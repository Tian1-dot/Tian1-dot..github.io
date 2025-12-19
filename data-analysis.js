// 《白夜行》文本数据分析脚本
// 用于从原始文本中提取关键信息并生成可视化数据

class ByakuyakoAnalyzer {
    constructor() {
        this.text = '';
        this.characters = new Map();
        this.locations = new Map();
        this.emotions = new Map();
        this.themes = new Map();
        this.timeline = [];
    }

    // 加载文本数据
    async loadText(filePath) {
        try {
            const response = await fetch(filePath);
            this.text = await response.text();
            console.log('文本加载成功，总长度:', this.text.length);
            return true;
        } catch (error) {
            console.error('文本加载失败:', error);
            return false;
        }
    }

    // 提取人物信息
    extractCharacters() {
        const characterPatterns = [
            { name: '桐原亮司', patterns: ['亮司', '桐原'] },
            { name: '唐泽雪穗', patterns: ['雪穗', '唐泽'] },
            { name: '笹垣润三', patterns: ['笹垣', '润三'] },
            { name: '松野秀臣', patterns: ['松野', '秀臣'] },
            { name: '秋吉雄一', patterns: ['秋吉', '雄一'] },
            { name: '园村友彦', patterns: ['园村', '友彦'] },
            { name: '桐原洋介', patterns: ['洋介', '桐原洋介'] },
            { name: '西本雪穗', patterns: ['西本'] }
        ];

        characterPatterns.forEach(character => {
            let count = 0;
            character.patterns.forEach(pattern => {
                const regex = new RegExp(pattern, 'g');
                const matches = this.text.match(regex);
                if (matches) {
                    count += matches.length;
                }
            });
            this.characters.set(character.name, count);
        });

        return this.characters;
    }

    // 提取地点信息
    extractLocations() {
        const locationPatterns = [
            { name: '大阪', patterns: ['大阪'] },
            { name: '当铺', patterns: ['当铺'] },
            { name: '学校', patterns: ['学校', '小学', '中学'] },
            { name: '图书馆', patterns: ['图书馆'] },
            { name: '警察局', patterns: ['警察局', '警署'] },
            { name: '医院', patterns: ['医院'] },
            { name: '商店', patterns: ['商店', '店'] },
            { name: '家', patterns: ['家', '住宅'] }
        ];

        locationPatterns.forEach(location => {
            let count = 0;
            location.patterns.forEach(pattern => {
                const regex = new RegExp(pattern, 'g');
                const matches = this.text.match(regex);
                if (matches) {
                    count += matches.length;
                }
            });
            this.locations.set(location.name, count);
        });

        return this.locations;
    }

    // 提取情感词汇
    extractEmotions() {
        const emotionPatterns = {
            '压抑': ['压抑', '郁闷', '沉重', '窒息'],
            '黑暗': ['黑暗', '阴暗', '黑', '夜'],
            '救赎': ['救赎', '拯救', '解脱', '释放'],
            '希望': ['希望', '光明', '未来', '梦想'],
            '悬疑': ['悬疑', '神秘', '疑问', '疑惑'],
            '爱情': ['爱情', '爱', '喜欢', '恋'],
            '悲剧': ['悲剧', '悲伤', '痛苦', '绝望'],
            '成长': ['成长', '长大', '变化', '成熟']
        };

        Object.entries(emotionPatterns).forEach(([emotion, patterns]) => {
            let count = 0;
            patterns.forEach(pattern => {
                const regex = new RegExp(pattern, 'g');
                const matches = this.text.match(regex);
                if (matches) {
                    count += matches.length;
                }
            });
            this.emotions.set(emotion, count);
        });

        return this.emotions;
    }

    // 提取主题词汇
    extractThemes() {
        const themePatterns = {
            '白夜行': ['白夜行'],
            '罪与罚': ['罪', '罚', '罪恶', '惩罚'],
            '秘密': ['秘密', '隐藏', '隐瞒'],
            '真相': ['真相', '事实', '真实'],
            '谎言': ['谎言', '欺骗', '虚假'],
            '童年': ['童年', '小时候', '幼年'],
            '创伤': ['创伤', '伤害', '痛苦'],
            '保护': ['保护', '守护', '庇护'],
            '牺牲': ['牺牲', '奉献', '舍弃'],
            '命运': ['命运', '宿命', '天命'],
            '选择': ['选择', '决定', '抉择'],
            '光明': ['光明', '明亮', '阳光'],
            '孤独': ['孤独', '孤单', '寂寞'],
            '执着': ['执着', '坚持', '固执'],
            '追查': ['追查', '调查', '侦查']
        };

        Object.entries(themePatterns).forEach(([theme, patterns]) => {
            let count = 0;
            patterns.forEach(pattern => {
                const regex = new RegExp(pattern, 'g');
                const matches = this.text.match(regex);
                if (matches) {
                    count += matches.length;
                }
            });
            this.themes.set(theme, count);
        });

        return this.themes;
    }

    // 构建时间线数据
    buildTimeline() {
        // 基于小说内容构建关键时间节点
        this.timeline = [
            {
                year: 1973,
                title: '故事开端',
                description: '当铺老板被杀，亮司父亲死亡，故事拉开序幕',
                importance: 10
            },
            {
                year: 1974,
                title: '调查开始',
                description: '笹垣刑警开始调查案件，发现疑点',
                importance: 7
            },
            {
                year: 1979,
                title: '青少年时期',
                description: '亮司和雪穗进入中学，关系进一步发展',
                importance: 8
            },
            {
                year: 1981,
                title: '高中时代',
                description: '两人进入高中，面临新的挑战和选择',
                importance: 6
            },
            {
                year: 1985,
                title: '成年时期',
                description: '雪穗进入上流社会，亮司在暗中保护',
                importance: 9
            },
            {
                year: 1988,
                title: '事业成功',
                description: '雪穗事业有成，亮司继续默默守护',
                importance: 7
            },
            {
                year: 1991,
                title: '真相逼近',
                description: '笹垣重新调查，真相逐渐浮出水面',
                importance: 8
            },
            {
                year: 1992,
                title: '故事结局',
                description: '亮司死亡，雪穗继续前行，故事结束',
                importance: 10
            }
        ];

        return this.timeline;
    }

    // 生成人物关系数据
    generateCharacterRelations() {
        const relations = [
            { source: '桐原亮司', target: '唐泽雪穗', strength: 10, type: '爱情' },
            { source: '桐原亮司', target: '桐原洋介', strength: 5, type: '父子' },
            { source: '唐泽雪穗', target: '西本雪穗', strength: 5, type: '同一人' },
            { source: '笹垣润三', target: '桐原亮司', strength: 7, type: '追查' },
            { source: '笹垣润三', target: '唐泽雪穗', strength: 7, type: '追查' },
            { source: '松野秀臣', target: '桐原洋介', strength: 3, type: '验尸' },
            { source: '桐原亮司', target: '秋吉雄一', strength: 4, type: '朋友' },
            { source: '桐原亮司', target: '园村友彦', strength: 4, type: '朋友' }
        ];

        return relations;
    }

    // 计算文本统计信息
    getTextStatistics() {
        const lines = this.text.split('\n').length;
        const characters = this.text.length;
        const words = this.text.split(/\s+/).length;
        const paragraphs = this.text.split(/\n\s*\n/).length;

        return {
            lines,
            characters,
            words,
            paragraphs,
            avgWordsPerParagraph: Math.round(words / paragraphs),
            avgCharsPerLine: Math.round(characters / lines)
        };
    }

    // 生成完整的分析报告
    generateAnalysisReport() {
        const stats = this.getTextStatistics();
        const characters = this.extractCharacters();
        const locations = this.extractLocations();
        const emotions = this.extractEmotions();
        const themes = this.extractThemes();
        const timeline = this.buildTimeline();
        const relations = this.generateCharacterRelations();

        return {
            statistics: stats,
            characters: Object.fromEntries(characters),
            locations: Object.fromEntries(locations),
            emotions: Object.fromEntries(emotions),
            themes: Object.fromEntries(themes),
            timeline,
            relations
        };
    }

    // 导出数据为JSON格式
    exportToJSON() {
        const report = this.generateAnalysisReport();
        const dataStr = JSON.stringify(report, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'byakuyako_analysis.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }
}

// 使用示例
const analyzer = new ByakuyakoAnalyzer();

// 页面加载完成后执行分析
document.addEventListener('DOMContentLoaded', async function() {
    // 如果需要从文件加载文本进行实际分析
    // await analyzer.loadText('白夜行.txt');
    // const report = analyzer.generateAnalysisReport();
    // console.log('分析报告:', report);
    
    // 模拟分析结果（用于演示）
    console.log('《白夜行》数字人文分析系统已初始化');
    console.log('功能包括：人物关系分析、情感分析、主题提取、时间线构建等');
});

// 将分析器暴露到全局作用域，供其他脚本使用
window.ByakuyakoAnalyzer = ByakuyakoAnalyzer;