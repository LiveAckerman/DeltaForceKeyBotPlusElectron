'use strict';

const { logger } = require('ee-core/log');
const { getConfig } = require('ee-core/config');
const { getMainWindow } = require('ee-core/electron');
const { uIOhook } = require('uiohook-napi'); // 引入 uiohook-napi
const { windowManager } = require('node-window-manager'); // 引入 node-window-manager


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
        // 获取所有系统窗口
        const windows = windowManager.getWindows();
        // 查找标题为 "三角洲行动" 的窗口
        // const _targetWindow = windows.filter(win => win.path.indexOf('DeltaForceClient') != -1);
        const targetWindow = windows.find(win => win.getTitle() === '三角洲行动  ');

        if (!targetWindow) {
          // 如果未找到目标窗口，提示用户
          console.error('未找到名为 "三角洲行动" 的窗口');
          const mainWindow = getMainWindow();
          if (mainWindow) {
            mainWindow.webContents.send('show-error', '未找到名为 "三角洲行动" 的窗口');
          }
        } else {
          // 如果找到目标窗口，显示并聚焦
          console.log('找到目标窗口:', targetWindow.getTitle());
          /* 最小化当前窗口 */
          const mainWindow = getMainWindow();
          if (mainWindow) {
            mainWindow.minimize(); // 最小化当前窗口
          }
          if (!targetWindow.isVisible()) {
            console.log('目标窗口不可见，尝试恢复窗口');
            targetWindow.restore(); // 恢复窗口
          }
          targetWindow.show(); // 将窗口置于最前
          targetWindow.bringToTop(); // 将窗口置于最前
        }
      } else if (event.keycode === 67) {
        console.log('F9 键被按下');
       // 获取所有系统窗口
        const windows = windowManager.getWindows();
        // 查找标题为 "三角洲行动" 的窗口
        const targetWindow = windows.find(win => win.getTitle() === '三角洲行动  ');
        if(targetWindow) {
          targetWindow.hide(); // 隐藏窗口
        }
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