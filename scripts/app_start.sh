#!/bin/bash
cd /home/ec2-user/server
npm start
npm run build
pm2 start npm --name "yeti-static" --interpreter bash -- start
pm2 startup
pm2 save
pm2 restart all