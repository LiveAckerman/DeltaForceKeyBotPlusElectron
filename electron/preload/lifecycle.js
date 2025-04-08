'use strict';

const { logger } = require('ee-core/log');
const { getConfig } = require('ee-core/config');
const { getMainWindow } = require('ee-core/electron');
const { uIOhook } = require('uiohook-napi'); // 引入 uiohook-napi

class Lifecycle {

  /**
   * core app have been loaded
   */
  async ready() {
    logger.info('[lifecycle] ready');
    // 应用初始化逻辑
  }

  /**
   * electron app ready
   */
  async electronAppReady() {
    logger.info('[lifecycle] electron-app-ready');
    // 隐藏顶部菜单栏
    // Menu.setApplicationMenu(null);
  }

  /**
   * main window have been loaded
   */
  async windowReady() {
    logger.info('[lifecycle] window-ready');
    // 窗口加载完成逻辑
    // 延迟加载，无白屏
    const { windowsOption } = getConfig();
    if (windowsOption.show == false) {
      const win = getMainWindow();
      win.once('ready-to-show', () => {
        win.show();
        win.focus();
      })
    }

    // 监听全局按键事件
    uIOhook.on('keydown', (event) => {
      // 检测 F8 键（keycode 为 66）
      if (event.keycode === 66) {
        console.log('F8 键被按下');

        const currentWindow = getMainWindow(); // 获取当前窗口
        const allWindows = require('electron').BrowserWindow.getAllWindows(); // 获取所有窗口

        // 查找名为 "三角洲行动" 的窗口
        const targetWindow = allWindows.find(win => {
          console.log(  win.getTitle());
       return   win.getTitle() === '三角洲行动'
        });

        if (!targetWindow) {
          // 如果没有找到目标窗口，提示用户
          console.log('未找到名为 "三角洲行动" 的窗口');
          if (currentWindow) {
            currentWindow.webContents.send('show-message', '未找到名为 "三角洲行动" 的窗口');
          }
        } else {
          // 如果找到目标窗口，最小化当前窗口并显示目标窗口
          if (currentWindow) {
            currentWindow.minimize(); // 最小化当前窗口
          }
          targetWindow.show(); // 显示目标窗口
          targetWindow.focus(); // 聚焦目标窗口
        }
      } else if (event.keycode === 67) {
        console.log('F9 键被按下');
        // 在这里执行你需要的逻辑
        const win = getMainWindow();
        if (win) {
          win.show(); // 显示窗口
        }
      }
    });

    // 启动 uiohook
    uIOhook.start();
  }

  /**
   * before app close
   */
  async beforeClose() {
    logger.info('[lifecycle] before-close');
    // 应用关闭前逻辑
  }
}
Lifecycle.toString = () => '[class Lifecycle]';

module.exports = {
  Lifecycle
};