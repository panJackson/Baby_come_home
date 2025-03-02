#!/bin/bash
echo "Starting the website server..."
nohup serve -s dist -l tcp://0.0.0.0:3000 > server.log 2>&1 &
echo "Server is running in the background. Logs are saved to server.log."
