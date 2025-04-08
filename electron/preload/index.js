/*************************************************
 ** preload为预加载模块，该文件将会在程序启动时加载 **
 *************************************************/

 const { logger } = require('ee-core/log');
 const { ipcMain, desktopCapturer } = require('electron');
 const { mouse, keyboard, Key, screen, Region } = require('@nut-tree/nut-js');
 const tesseract = require('node-tesseract-ocr');
 const path = require('path');
const fs = require('fs');

function preload() {
   logger.info('[preload] load 1');
 }

 // 模拟鼠标移动并点击
 ipcMain.handle('mouse-move-click', async (_, x, y) => {
   await mouse.setPosition({ x, y });
   await mouse.leftClick();
   return 'Mouse moved and clicked';
 });

 // 模拟键盘按下 ESC
 ipcMain.handle('keyboard-press-esc', async () => {
   await keyboard.pressKey(Key.Escape);
   await keyboard.releaseKey(Key.Escape);
   return 'ESC key pressed';
 });

 // 截屏并识别文字
 ipcMain.handle('screenshot-recognize', async (_, bounds) => {
   const { x, y, width, height } = bounds;

   // 截屏
   const sources = await desktopCapturer.getSources({ types: ['screen'] });
   const screen = sources[0]; // 默认取第一个屏幕
   const image = screen.thumbnail.crop({ x, y, width, height });
   const screenshotPath = path.join(__dirname, 'screenshot.png');
   fs.writeFileSync(screenshotPath, image.toPNG());

   // OCR 识别
   const config = {
     lang: 'chi_sim', // 中文识别
     oem: 1,
     psm: 3,
   };
   const text = await tesseract.recognize(screenshotPath, config);
   fs.unlinkSync(screenshotPath); // 删除截图文件
   return text;
 });

 /**
 * 预加载模块入口
 */
 module.exports = {
   preload
 }