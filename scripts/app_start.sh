#!/bin/bash
cd /home/ec2-user/server
npm start
pm2 start npm --name "yeti-static" -- start
pm2 startup
pm2 save