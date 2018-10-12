 #/bin/bash
cd /home/pi/all.git/zhaopeilin1.github.io
ifconfig | grep broadcast >> README.md 
git add README.md && git  commit -m aa && git push


