'use strict';

const { logger } = require('ee-core/log');
const { getConfig } = require('ee-core/config');
const { getMainWindow } = require('ee-core/electron');
const { uIOhook } = require('uiohook-napi'); // 引入 uiohook-napi
const ffi = require('ffi-napi'); // 引入 ffi-napi
const ref = require('ref-napi'); // 引入 ref-napi

// 定义 User32.dll 的方法
const user32 = new ffi.Library('user32', {
  'FindWindowW': ['pointer', ['pointer', 'pointer']], // 查找窗口
  'SetForegroundWindow': ['bool', ['pointer']], // 设置窗口为前台
  'ShowWindow': ['bool', ['pointer', 'int']], // 显示窗口
  'GetWindowTextW': ['int', ['pointer', 'pointer', 'int']], // 获取窗口标题
  'EnumWindows': ['bool', ['pointer', 'int']], // 枚举所有窗口
  'IsWindowVisible': ['bool', ['pointer']], // 检查窗口是否可见
});

// 定义回调函数类型
const EnumWindowsProc = ffi.Callback('bool', ['pointer', 'int'], (hwnd, lParam) => {
  const buffer = Buffer.alloc(512); // 分配缓冲区存储窗口标题
  user32.GetWindowTextW(hwnd, buffer, 512);
  const title = buffer.toString('ucs2').replace(/\0/g, ''); // 转换为字符串

  if (title === '三角洲行动') {
    console.log(`找到窗口: ${title}`);
    // 显示并聚焦窗口
    user32.ShowWindow(hwnd, 9); // 9 表示恢复窗口
    user32.SetForegroundWindow(hwnd); // 设置为前台窗口
    return false; // 停止枚举
  }
  return true; // 继续枚举
});

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

        // 枚举所有窗口
        user32.EnumWindows(EnumWindowsProc, 0);
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