const { app, BrowserWindow, Menu } = require('electron')
const { exec } = require("child_process");
// 启动Node server
const startServer = async () => {
    try {
        console.log('开始启动node server');
        // 使用spawn or exec来启动node服务
        //const serverProcess = spawn('node', ['startServer.js']);
        exec('npm run dev');
        console.log('成功启动node server')
    } catch (error) {
        console.log(`启动node server 失败：${error.message}`)
    }
}

let win
const createWindow = () => {
    win = new BrowserWindow({
        width: 800,
        height: 600
    })
    const tpl = [
        {
            label: '帮助',
            submenu: [
                {
                    label: '打开控制台',
                    role: 'toggleDevTools',
                },
                {
                    label: '绑定快捷键',
                    accelerator: 'Ctrl+Shift+K',
                    click: () => {
                        console.log('menu shortcut pressed')
                    },
                },
            ],
        },
    ]
    win.loadURL('http://localhost:8212/')
    if (process.platform === 'darwin') {
        tpl.unshift({ label: '' })
    }
    const menu = Menu.buildFromTemplate(tpl)
    Menu.setApplicationMenu(menu)

    
}
// 这段程序将会在 Electron 结束初始化
app.whenReady().then(async () => {
    startServer()
    createWindow()
    
    app.on('activate', () => {
        // 在 macOS 系统内, 如果没有已开启的应用窗口
        // 点击托盘图标时通常会重新创建一个新窗口
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})


