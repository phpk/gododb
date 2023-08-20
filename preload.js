// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const type of ['chrome', 'node', 'electron']) {
        replaceText(`${type}-version`, process.versions[type])
    }
})

// Preload (Isolated World)
// 三种方式在main与html之间通信
const { contextBridge, ipcRenderer } = require('electron')
contextBridge.exposeInMainWorld(
    'ipcRenderer',
    {
        // From render to main.
        send: (channel, args) => { return ipcRenderer.sendSync(channel, 'ping') },
        // From main to render.
        // listener为自定义的消息处理函数，原型在renderer中
        receive: (channel, listener) => {
            ipcRenderer.on(channel, (event, args) => listener(args));
        },
        // From render to main and back again.
        invoke: (channel, args) => {
            return ipcRenderer.invoke(channel, args);
        }
    }

)
