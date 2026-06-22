@echo off
setlocal
set NODE=C:\Users\张省菲\AppData\Local\Programs\kimi-desktop\resources\resources\runtime\node.exe
set CLI=C:\Users\张省菲\AppData\Roaming\kimi-desktop\daimon-share\daimon\npm-global\node_modules\tailwindcss\lib\cli.js

cd /d "%~dp0"

%NODE% %CLI% -i css\src\index.css -o css\index.css -c tailwind\index.config.js --minify
%NODE% %CLI% -i css\src\project-detail.css -o css\project-detail.css -c tailwind\project-detail.config.js --minify
%NODE% %CLI% -i css\src\mango.css -o css\mango.css -c tailwind\mango.config.js --minify
%NODE% %CLI% -i css\src\tiangong.css -o css\tiangong.css -c tailwind\tiangong.config.js --minify
%NODE% %CLI% -i css\src\animation-list.css -o css\animation-list.css -c tailwind\animation-list.config.js --minify
%NODE% %CLI% -i css\src\test-project-detail.css -o css\test-project-detail.css -c tailwind\test-project-detail.config.js --minify
%NODE% %CLI% -i css\src\project-detail-backup.css -o css\project-detail-backup.css -c tailwind\project-detail-backup.config.js --minify

echo Done.
