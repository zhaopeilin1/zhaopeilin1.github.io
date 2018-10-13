#/bin/bash
cd /home/pi/all.git/zhaopeilin1.github.io
git checkout addr.txt && git pull
ifconfig | grep broadcast >> addr.txt
git add addr.txt && git  commit -m ip && git push


