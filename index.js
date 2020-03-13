const { app, BrowserWindow, Menu, ipcMain} = require('electron')


function createWindow () {  
  Menu.setApplicationMenu(null)
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 430,
    height: 550,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)
