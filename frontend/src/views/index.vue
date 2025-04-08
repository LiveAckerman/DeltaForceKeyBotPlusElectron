<template>
  <div class="flex-row flex">
    <el-menu active-text-color="#ffd04b" class="w-40 h-full" background-color="#545c64" default-active="2"
      text-color="#fff" @select="handleSelect" defaultActive="/home/config">
      <el-menu-item index="/home/config">
        <el-icon>
          <setting />
        </el-icon>
        <span>配置信息</span>
      </el-menu-item>
      <el-menu-item index="/home/run">
        <el-icon>
          <IconMenu />
        </el-icon>
        <span>运行</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-1 h-full overflow-auto p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
/* 跳转 */
const router = useRouter()
console.log(window);

const handleSelect = (index: string) => {
  console.log(index);
  if (!index) return
  router.push(index)
}
</script>