/*
 * 如果启用了上下文隔离，渲染进程无法使用electron的api，
 * 可通过contextBridge 导出api给渲染进程使用
 */

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  mouseMoveClick: async (x, y) => {
    return await ipcRenderer.invoke('mouse-move-click', x, y);
  },
  /* keyboard-press-esc */
  keyboardPressEsc: async () => {
    return await ipcRenderer.invoke('keyboard-press-esc');
  },
  /* screenshot-recognize */
  screenshotRecognize: async (bounds) => {
    return await ipcRenderer.invoke('screenshot-recognize', bounds);
  },
})