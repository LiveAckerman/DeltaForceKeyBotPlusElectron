<template>
  <div>
    <h1>功能测试</h1>
    <button @click="moveAndClick">模拟鼠标移动并点击</button>
    <button @click="pressEsc">模拟键盘按下 ESC</button>
    <button @click="screenshotAndRecognize">截屏并识别文字</button>
    <p>识别结果：{{ recognizedText }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import { ipcRenderer } from 'electron';


// 定义响应式数据
const recognizedText = ref(''); // 存储识别结果

// // 模拟鼠标移动并点击
const moveAndClick = async () => {
  // console.log(window.electron.moveAndClick(100, 100));
  const x = 700; // 鼠标目标位置 X 坐标
  const y = 300; // 鼠标目标位置 Y 坐标
  try {
    const result = await window.electron.mouseMoveClick(x, y); // 调用 moveAndClick 方法
    console.log(result);
  } catch (error) {
    console.error('鼠标移动并点击失败:', error);
  }
};

// 模拟键盘按下 ESC
const pressEsc = async () => {
  try {
    const result = await window.electron.keyboardPressEsc(); // 调用 pressEsc 方法
    console.log(result);
  } catch (error) {
    console.error('键盘按下 ESC 失败:', error);
  }
};

// 截屏并识别文字
const screenshotAndRecognize = async () => {
  const bounds = { x: 100, y: 100, width: 300, height: 200 }; // 截屏区域
  try {
    const text = await window.electron.screenshotRecognize(bounds); // 调用 screenshotRecognize 方法
    recognizedText.value = text;
    console.log('识别结果:', text);
  } catch (error) {
    console.error('截屏并识别文字失败:', error);
  }
};
</script>