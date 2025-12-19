// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initTabNavigation();
    initCharacterTimelines();
    initAnimations();
});

// 桐原亮司的故事章节
const ryojiStories = {
    1: [
        {
            type: 'narrator',
            text: '那是在1973年的大阪，我永远记得那一天。在大楼里，我看到了她...',
            time: '1973年 • 大阪',
            speaker: null
        },
        {
            type: 'character',
            text: '雪穗，从今以后，我会一直在你身边。无论发生什么，我都会保护你。',
            time: '童年誓言',
            speaker: '桐原亮司'
        },
        {
            type: 'other-character',
            text: '亮司，你为什么要这么做？',
            time: '雪穗的声音',
            speaker: '唐泽雪穗'
        },
        {
            type: 'character',
            text: '因为...因为你就是我世界里唯一的光。',
            time: '黑暗中的承诺',
            speaker: '桐原亮司'
        }
    ],
    2: [
        {
            type: 'narrator',
            text: '时间快进，我已经成年。我依然在暗中守护着雪穗，为她扫清一切障碍...',
            time: '1985年 • 大阪',
            speaker: null
        },
        {
            type: 'character',
            text: '我已经学会了各种技能。为了她，我可以成为任何人。',
            time: '成年后的决心',
            speaker: '桐原亮司'
        },
        {
            type: 'narrator',
            text: '我开发软件，经营生意，所有的一切都是为了让她能在阳光下生活。',
            time: '守护的方式',
            speaker: null
        }
    ],
    3: [
        {
            type: 'narrator',
            text: '刑警笹垣重新开始调查，我知道，时间不多了...',
            time: '1991年 • 大阪',
            speaker: null
        },
        {
            type: 'character',
            text: '19年了，我一直走在黑暗中。但如果我的死亡能让她永远在阳光下，那就值得。',
            time: '最后的决心',
            speaker: '桐原亮司'
        }
    ],
    4: [
        {
            type: 'narrator',
            text: '那一刻，我选择了用生命结束这一切。雪穗，你一定要幸福地活下去...',
            time: '1992年 • 最后时刻',
            speaker: null
        },
        {
            type: 'character',
            text: '雪穗，对不起，不能陪你走下去了。但请记住，我从未后悔过。',
            time: '永恒的告别',
            speaker: '桐原亮司'
        }
    ]
};

// 唐泽雪穗的人生阶段
const yukihoStories = {
    1: [
        {
            type: 'narrator',
            text: '母亲去世后，我被唐泽家收养。那时候，我遇到了改变我一生的男孩...',
            time: '1973年 • 大阪',
            speaker: null
        },
        {
            type: 'character',
            text: '亮司，谢谢你一直在我身边。有了你的守护，我才能在阳光下前行。',
            time: '内心独白',
            speaker: '唐泽雪穗'
        }
    ],
    2: [
        {
            type: 'narrator',
            text: '少女时代，我努力学习，追求完美。我知道，只有成为最优秀的人，才能摆脱过去的阴影...',
            time: '1981年 • 学校',
            speaker: null
        },
        {
            type: 'character',
            text: '我必须在阳光下生活，这是我和亮司的约定。',
            time: '少女的坚持',
            speaker: '唐泽雪穗'
        }
    ],
    3: [
        {
            type: 'narrator',
            text: '进入上流社会后，我遇到了高宫诚。但这只是我计划的一部分...',
            time: '1985年 • 上流社会',
            speaker: null
        },
        {
            type: 'character',
            text: '对不起，高宫先生。但我有必须完成的使命。',
            time: '内心的歉意',
            speaker: '唐泽雪穗'
        }
    ],
    4: [
        {
            type: 'narrator',
            text: '亮司走了，从此我只能在白夜中独自前行。但他的守护会永远陪伴着我...',
            time: '1992年 • 独自前行',
            speaker: null
        },
        {
            type: 'character',
            text: '亮司，看到了吗？我在阳光下生活得很好。谢谢你，我的太阳...',
            time: '永恒的思念',
            speaker: '唐泽雪穗'
        }
    ]
};

// 笹垣润三的调查阶段
const sasagakiStories = {
    1: [
        {
            type: 'narrator',
            text: '1973年，大阪一栋大楼里发生了一起命案。作为刑警，我接手了这个案子...',
            time: '1973年 • 警察局',
            speaker: null
        },
        {
            type: 'character',
            text: '这个案子不简单。两个孩子眼神里的东西，让我无法忘记。我一定要找出真相。',
            time: '调查笔记',
            speaker: '笹垣润三'
        }
    ],
    2: [
        {
            type: 'narrator',
            text: '调查陷入了僵局，但我总觉得那两个孩子的关系不一般...',
            time: '1974年 • 调查室',
            speaker: null
        },
        {
            type: 'character',
            text: '我会在19年后重新调查这个案子。真相不会永远被埋藏。',
            time: '内心的承诺',
            speaker: '笹垣润三'
        }
    ],
    3: [
        {
            type: 'narrator',
            text: '19年后，新的线索出现了。我发现了一个叫桐原亮司的男人...',
            time: '1991年 • 重新调查',
            speaker: null
        },
        {
            type: 'character',
            text: '19年了，我终于找到了突破口。真相即将浮出水面。',
            time: '突破性的发现',
            speaker: '笹垣润三'
        }
    ],
    4: [
        {
            type: 'narrator',
            text: '最后，我终于明白了整个真相。这是一个关于守护与牺牲的悲伤故事...',
            time: '1992年 • 案件告破',
            speaker: null
        },
        {
            type: 'character',
            text: '法律上他们是罪犯，但情感上...我理解他们的选择。真相有时候比谎言更残酷。',
            time: '刑警的感慨',
            speaker: '笹垣润三'
        }
    ]
};

// 显示桐原亮司的故事
function showRyojiChapter(chapter) {
    updateDialogue('ryojiStoryContent', ryojiStories[chapter]);
    updateChapterButtons('ryoji', chapter);
}

function showRyojiStory(type) {
    const stories = type === 1 ? [1, 2] : [3, 4];
    const randomChapter = stories[Math.floor(Math.random() * stories.length)];
    showRyojiChapter(randomChapter);
}

// 显示唐泽雪穗的故事
function showYukihoChapter(chapter) {
    updateDialogue('yukihoStoryContent', yukihoStories[chapter]);
    updateChapterButtons('yukiho', chapter);
}

function showYukihoStory(type) {
    const stories = type === 1 ? [1, 2] : [3, 4];
    const randomChapter = stories[Math.floor(Math.random() * stories.length)];
    showYukihoChapter(randomChapter);
}

// 显示笹垣润三的故事
function showSasagakiChapter(chapter) {
    updateDialogue('sasagakiStoryContent', sasagakiStories[chapter]);
    updateChapterButtons('sasagaki', chapter);
}

function showSasagakiStory(type) {
    const stories = type === 1 ? [1, 2] : [3, 4];
    const randomChapter = stories[Math.floor(Math.random() * stories.length)];
    showSasagakiChapter(randomChapter);
}

// 更新对话内容
function updateDialogue(containerId, stories) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    stories.forEach((story, index) => {
        setTimeout(() => {
            const dialogueItem = createDialogueItem(story);
            container.appendChild(dialogueItem);
            dialogueItem.style.opacity = '0';
            dialogueItem.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                dialogueItem.style.transition = 'all 0.5s ease';
                dialogueItem.style.opacity = '1';
                dialogueItem.style.transform = 'translateY(0)';
            }, 100);
        }, index * 800);
    });
}

// 创建对话项
function createDialogueItem(story) {
    const div = document.createElement('div');
    div.className = `dialogue-item ${story.type}`;
    
    let avatar = '';
    if (story.type === 'character') {
        avatar = '<div class="dialogue-avatar">亮</div>';
    } else if (story.type === 'other-character') {
        avatar = '<div class="dialogue-avatar">雪</div>';
    }
    
    div.innerHTML = `
        ${avatar}
        <div class="dialogue-content">
            ${story.speaker ? `<div class="dialogue-speaker">${story.speaker}</div>` : ''}
            <div class="dialogue-text">${story.text}</div>
            <div class="dialogue-time">${story.time}</div>
        </div>
    `;
    
    return div;
}

// 更新章节按钮状态
function updateChapterButtons(character, activeChapter) {
    const prefix = character === 'ryoji' ? 'showRyojiChapter' : 
                   character === 'yukiho' ? 'showYukihoChapter' : 'showSasagakiChapter';
    
    const buttons = document.querySelectorAll(`.chapter-btn[onclick^="${prefix}"]`);
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const activeBtn = document.querySelector(`.chapter-btn[onclick="${prefix}(${activeChapter})"]`);
    if (activeBtn) activeBtn.classList.add('active');
}

// 开始阅读之旅
function startReadingJourney() {
    // 创建引导对话框
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        color: white;
    `;
    
    modal.innerHTML = `
        <div style="background: linear-gradient(135deg, #2c3e50, #34495e); padding: 2rem; border-radius: 15px; max-width: 500px; text-align: center;">
            <h2 style="margin-bottom: 1rem;">欢迎来到《白夜行》</h2>
            <p style="margin-bottom: 1.5rem; line-height: 1.6;">
                建议阅读顺序：<br>
                1. 先了解桐原亮司的守护之路<br>
                2. 再看唐泽雪穗的成长历程<br>
                3. 最后跟随笹垣润三揭开真相
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button onclick="this.closest('div[style*=position]').remove(); switchTab('ryoji')" style="background: #3498db; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer;">开始</button>
                <button onclick="this.closest('div[style*=position]').remove()" style="background: #95a5a6; color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 20px; cursor: pointer;">稍后</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 显示人物关系图
function showCharacterRelations() {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    modal.innerHTML = `
        <div style="background: white; padding: 2rem; border-radius: 15px; max-width: 600px; position: relative;">
            <button onclick="this.closest('div[style*=position]').remove()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #7f8c8d;">×</button>
            <h2 style="color: #2c3e50; margin-bottom: 1.5rem; text-align: center;">人物关系图</h2>
            <div style="text-align: center;">
                <div style="display: inline-block; text-align: center; margin: 1rem;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #2c3e50, #34495e); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 0.5rem;">👨</div>
                    <strong>桐原亮司</strong><br>
                    <small style="color: #7f8c8d;">守护者</small>
                </div>
                <div style="display: inline-block; margin: 0 2rem; font-size: 2rem; color: #e74c3c;">❤️</div>
                <div style="display: inline-block; text-align: center; margin: 1rem;">
                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #8e44ad, #9b59b6); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; margin: 0 auto 0.5rem;">👩</div>
                    <strong>唐泽雪穗</strong><br>
                    <small style="color: #7f8c8d;">白夜行者</small>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <div style="display: inline-block; text-align: center; margin: 1rem;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #c0392b, #e74c3c); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; margin: 0 auto 0.5rem;">🕵️</div>
                    <strong>笹垣润三</strong><br>
                    <small style="color: #7f8c8d;">真相追寻者</small>
                </div>
                <div style="display: inline-block; margin: 0 1rem; font-size: 1.5rem; color: #f39c12;">🔍</div>
                <div style="display: inline-block; text-align: center; margin: 1rem;">
                    <div style="width: 60px; height: 60px; background: linear-gradient(135deg, #27ae60, #2ecc71); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; margin: 0 auto 0.5rem;">⚖️</div>
                    <strong>真相</strong><br>
                    <small style="color: #7f8c8d;">19年的追寻</small>
                </div>
            </div>
            <div style="margin-top: 2rem; padding: 1rem; background: #ecf0f1; border-radius: 10px;">
                <p style="color: #555; line-height: 1.5; text-align: center;">
                    <strong>核心关系：</strong>亮司与雪穗有着超越爱情的羁绊，<br>
                    一个在黑暗中守护，一个在阳光下前行。<br>
                    笹垣刑警执着追查19年，最终揭开这个关于守护与牺牲的故事。
                </p>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// 初始化标签页导航
function initTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // 移除所有活动状态
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // 添加活动状态
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // 初始化对应页面的图表
            setTimeout(() => {
                if (targetTab === 'ryoji') {
                    initRyojiTimeline();
                } else if (targetTab === 'yukiho') {
                    initYukihoTimeline();
                } else if (targetTab === 'sasagaki') {
                    initSasagakiTimeline();
                }
            }, 100);
        });
    });
}

// 切换标签页的全局函数
function switchTab(tabName) {
    const tabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabBtn) {
        tabBtn.click();
    }
}

// 初始化人物时间线图表
function initCharacterTimelines() {
    // 延迟初始化，确保DOM元素已加载
    setTimeout(() => {
        initRyojiTimeline();
        initYukihoTimeline();
        initSasagakiTimeline();
    }, 500);
}

// 桐原亮司时间线
function initRyojiTimeline() {
    const canvas = document.getElementById('ryojiTimeline');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1973', '1979', '1985', '1992'],
            datasets: [{
                label: '黑暗程度',
                data: [60, 75, 85, 95],
                borderColor: '#e74c3c',
                backgroundColor: 'rgba(231, 76, 60, 0.1)',
                tension: 0.4
            }, {
                label: '守护强度',
                data: [40, 60, 80, 100],
                borderColor: '#3498db',
                backgroundColor: 'rgba(52, 152, 219, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '桐原亮司人物轨迹'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// 唐泽雪穗时间线
function initYukihoTimeline() {
    const canvas = document.getElementById('yukihoTimeline');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1973', '1979', '1985', '1992'],
            datasets: [{
                label: '社会地位',
                data: [20, 40, 75, 90],
                borderColor: '#e91e63',
                backgroundColor: 'rgba(233, 30, 99, 0.1)',
                tension: 0.4
            }, {
                label: '内心坚强',
                data: [30, 50, 70, 85],
                borderColor: '#9b59b6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '唐泽雪穗成长轨迹'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// 笹垣润三时间线
function initSasagakiTimeline() {
    const canvas = document.getElementById('sasagakiTimeline');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['1973', '1974', '1991', '1992'],
            datasets: [{
                label: '调查进展',
                data: [20, 30, 80, 100],
                borderColor: '#f39c12',
                backgroundColor: 'rgba(243, 156, 18, 0.1)',
                tension: 0.4
            }, {
                label: '线索掌握',
                data: [15, 25, 70, 95],
                borderColor: '#27ae60',
                backgroundColor: 'rgba(39, 174, 96, 0.1)',
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: '笹垣润三调查历程'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// 初始化人物关系网络图
function initCharacterNetwork() {
    const dom = document.getElementById('characterNetwork');
    const myChart = echarts.init(dom);
    
    const option = {
        title: {
            text: '《白夜行》人物关系网络',
            left: 'center',
            textStyle: {
                fontSize: 20,
                color: '#2c3e50'
            }
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'force',
                data: [
                    {
                        name: '桐原亮司',
                        symbolSize: 60,
                        itemStyle: { color: '#e74c3c' },
                        category: 0
                    },
                    {
                        name: '唐泽雪穗',
                        symbolSize: 60,
                        itemStyle: { color: '#e91e63' },
                        category: 0
                    },
                    {
                        name: '笹垣润三',
                        symbolSize: 45,
                        itemStyle: { color: '#3498db' },
                        category: 1
                    },
                    {
                        name: '松野秀臣',
                        symbolSize: 35,
                        itemStyle: { color: '#9b59b6' },
                        category: 1
                    },
                    {
                        name: '桐原洋介',
                        symbolSize: 30,
                        itemStyle: { color: '#95a5a6' },
                        category: 2
                    },
                    {
                        name: '西本雪穗',
                        symbolSize: 30,
                        itemStyle: { color: '#95a5a6' },
                        category: 2
                    },
                    {
                        name: '秋吉雄一',
                        symbolSize: 35,
                        itemStyle: { color: '#f39c12' },
                        category: 1
                    },
                    {
                        name: '园村友彦',
                        symbolSize: 35,
                        itemStyle: { color: '#f39c12' },
                        category: 1
                    }
                ],
                links: [
                    {
                        source: '桐原亮司',
                        target: '唐泽雪穗',
                        lineStyle: { width: 4, color: '#e74c3c' }
                    },
                    {
                        source: '桐原亮司',
                        target: '桐原洋介',
                        lineStyle: { width: 2, color: '#95a5a6' }
                    },
                    {
                        source: '唐泽雪穗',
                        target: '西本雪穗',
                        lineStyle: { width: 2, color: '#95a5a6' }
                    },
                    {
                        source: '笹垣润三',
                        target: '桐原亮司',
                        lineStyle: { width: 3, color: '#3498db' }
                    },
                    {
                        source: '笹垣润三',
                        target: '唐泽雪穗',
                        lineStyle: { width: 3, color: '#3498db' }
                    },
                    {
                        source: '松野秀臣',
                        target: '桐原洋介',
                        lineStyle: { width: 2, color: '#9b59b6' }
                    },
                    {
                        source: '桐原亮司',
                        target: '秋吉雄一',
                        lineStyle: { width: 2, color: '#f39c12' }
                    },
                    {
                        source: '桐原亮司',
                        target: '园村友彦',
                        lineStyle: { width: 2, color: '#f39c12' }
                    }
                ],
                categories: [
                    { name: '主要人物' },
                    { name: '重要配角' },
                    { name: '背景人物' }
                ],
                roam: true,
                label: {
                    show: true,
                    position: 'right',
                    formatter: '{b}',
                    fontSize: 12
                },
                force: {
                    repulsion: 1000,
                    edgeLength: [100, 200]
                }
            }
        ]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 初始化情感分析图表
function initEmotionChart() {
    const ctx = document.getElementById('emotionChart').getContext('2d');
    const emotionChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['压抑', '黑暗', '救赎', '希望', '悬疑', '爱情', '悲剧', '成长'],
            datasets: [{
                label: '情感强度',
                data: [85, 75, 60, 40, 90, 55, 95, 70],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: '《白夜行》情感维度分析',
                    font: {
                        size: 16
                    }
                }
            }
        }
    });
}

// 初始化词云图
function initWordCloud() {
    const dom = document.getElementById('wordCloud');
    const myChart = echarts.init(dom);
    
    const option = {
        title: {
            text: '《白夜行》主题词云',
            left: 'center',
            textStyle: {
                fontSize: 20,
                color: '#2c3e50'
            }
        },
        tooltip: {
            show: true
        },
        series: [{
            type: 'wordCloud',
            shape: 'circle',
            left: 'center',
            top: 'center',
            width: '70%',
            height: '80%',
            right: null,
            bottom: null,
            sizeRange: [12, 60],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: false,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontWeight: 'bold',
                color: function () {
                    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22', '#34495e'];
                    return colors[Math.floor(Math.random() * colors.length)];
                }
            },
            emphasis: {
                focus: 'self',
                textStyle: {
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            data: [
                { name: '白夜行', value: 100 },
                { name: '亮司', value: 85 },
                { name: '雪穗', value: 85 },
                { name: '罪与罚', value: 75 },
                { name: '救赎', value: 70 },
                { name: '黑暗', value: 65 },
                { name: '希望', value: 60 },
                { name: '爱情', value: 55 },
                { name: '悲剧', value: 80 },
                { name: '成长', value: 50 },
                { name: '秘密', value: 65 },
                { name: '真相', value: 60 },
                { name: '谎言', value: 55 },
                { name: '童年', value: 70 },
                { name: '创伤', value: 65 },
                { name: '保护', value: 75 },
                { name: '牺牲', value: 70 },
                { name: '命运', value: 60 },
                { name: '选择', value: 55 },
                { name: '光明', value: 45 },
                { name: '黑暗', value: 75 },
                { name: '孤独', value: 70 },
                { name: '执着', value: 65 },
                { name: '追查', value: 60 },
                { name: '真相', value: 70 }
            ]
        }]
    };
    
    myChart.setOption(option);
    
    // 响应式调整
    window.addEventListener('resize', function() {
        myChart.resize();
    });
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 初始化动画效果
function initAnimations() {
    // 滚动显示动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有section
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // 情感条动画
    const emotionBars = document.querySelectorAll('.emotion-fill');
    const emotionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
            }
        });
    }, observerOptions);
    
    emotionBars.forEach(bar => {
        emotionObserver.observe(bar);
    });
}

// 添加交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 卡片悬停效果
    const cards = document.querySelectorAll('.stat-card, .character-card, .location-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // 主题标签点击效果
    const themeTags = document.querySelectorAll('.theme-tag');
    themeTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
            }, 100);
        });
    });
});

// 页面滚动时的导航栏效果
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    }
});