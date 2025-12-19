# Simple HTTP Server
$port = 3000
$url = "http://localhost:$port/"

Write-Host "Starting server at $url"
Write-Host "Open your browser and navigate to $url"
Write-Host "Press Ctrl+C to stop the server"

# Try to start a simple HTTP listener
try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($url)
    $listener.Start()

    Write-Host "Server started successfully!"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath
        Write-Host "Request: $($request.HttpMethod) $localPath"

        # Determine file path
        if ($localPath -eq "/") {
            $filePath = ".\index.html"
        } else {
            $filePath = "." + $localPath.Replace("/", "\")
        }

        # Try to serve the file
        if (Test-Path $filePath -PathType Leaf) {
            try {
                $content = Get-Content -Path $filePath -Raw -Encoding UTF8
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($content)
                
                # Set content type
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $contentType = "text/html" }
                    ".css" { $contentType = "text/css" }
                    ".js" { $contentType = "application/javascript" }
                    ".json" { $contentType = "application/json" }
                    default { $contentType = "text/plain" }
                }
                
                $response.ContentType = $contentType
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                Write-Host "Served: $filePath ($contentType)"
            } catch {
                $response.StatusCode = 500
                Write-Host "Error serving file: $($_.Exception.Message)"
            }
        } else {
            $response.StatusCode = 404
            $errorHtml = "<h1>404 - File Not Found</h1><p>The file $filePath was not found.</p>"
            $errorBuffer = [System.Text.Encoding]::UTF8.GetBytes($errorHtml)
            $response.ContentType = "text/html"
            $response.ContentLength64 = $errorBuffer.Length
            $response.OutputStream.Write($errorBuffer, 0, $errorBuffer.Length)
            Write-Host "404: $filePath not found"
        }

        $response.Close()
    }
} catch {
    Write-Host "Error starting server: $($_.Exception.Message)"
    Write-Host "Make sure port $port is not already in use."
} finally {
    if ($listener -and $listener.IsListening) {
        $listener.Stop()
        Write-Host "Server stopped."
    }
}