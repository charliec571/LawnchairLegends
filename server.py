import http.server
import socketserver
import os
import mimetypes

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        req_path = self.path.split('?')[0].lstrip('/')
        if not req_path or req_path == '/':
            req_path = 'index.html'
        
        file_path = os.path.join(DIRECTORY, req_path)
        
        if os.path.isfile(file_path):
            self.send_response(200)
            mime_type, _ = mimetypes.guess_type(file_path)
            self.send_header('Content-Type', mime_type or 'application/octet-stream')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            with open(file_path, 'rb') as f:
                self.wfile.write(f.read())
        else:
            self.send_response(404)
            self.send_header('Content-Type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'404 Not Found')

    def do_POST(self):
        if self.path == '/api/save':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                import json
                # Validate JSON payload first
                json_data = json.loads(post_data.decode('utf-8'))
                
                # Write to local file
                data_file = os.path.join(DIRECTORY, 'data.json')
                with open(data_file, 'w', encoding='utf-8') as f:
                    json.dump(json_data, f, indent=2)
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        pass

if __name__ == '__main__':
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('', PORT), CustomHandler) as httpd:
        print(f"Lawnchair Legends Mockup server running on http://localhost:{PORT}")
        httpd.serve_forever()
