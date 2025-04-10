<template>
  <div class="flex flex-row">
    <el-menu v-if="constantRouterList && constantRouterList.length" active-text-color="#ffd04b" class="w-40 h-full"
      background-color="#545c64" default-active="2" text-color="#fff" @select="handleSelect"
      :defaultActive="constantRouterList[0].path">
      <el-menu-item :index="item.path" v-for="item in constantRouterList" :key="item.path">
        <el-icon :size="20" v-if="item.meta.icon">
          <component :is="resolveIcon(item.meta.icon)" />
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
    <div class="flex-1 h-full p-4 overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  Menu as IconMenu,
  Setting,
  HomeFilled,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import routerMap from '@/router/routerMap'
import { ref } from 'vue'

const iconMap = {
  IconMenu,
  Setting,
  HomeFilled,
};

const resolveIcon = (iconName) => {
  console.log(iconMap[iconName]);

  return iconMap[iconName] || null;
};

const constantRouterList = ref([])
constantRouterList.value = routerMap[0].children



/* 跳转 */
const router = useRouter()
console.log(window);

const handleSelect = (index: string) => {
  console.log(index);
  if (!index) return
  router.push(index)
}
</script>