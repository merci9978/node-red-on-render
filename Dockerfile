FROM nodered/node-red:latest
# 告訴 Node-RED 使用 Render 給的 PORT
ENV PORT=1880
EXPOSE 1880
# 複製我們自訂的 settings.js 到正確位置
COPY settings.js /data/settings.js