// vite.config.mjs
import vue from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { defineConfig } from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/vite/dist/node/index.js";
import Unocss from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/my_project/DeltaForce/electron-egg/frontend/node_modules/unplugin-vue-components/dist/resolvers.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\my_project\\DeltaForce\\electron-egg\\frontend";
var vite_config_default = defineConfig(() => {
  return {
    // 项目插件
    plugins: [
      vue(),
      Unocss(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    // 基础配置
    base: "./",
    publicDir: "public",
    resolve: {
      alias: {
        "@": path.resolve(__vite_injected_original_dirname, "src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
          // additionalData: `@import "@/styles/variables.scss";` // 如果有全局变量文件的话
        }
      }
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      brotliSize: false,
      sourcemap: false,
      minify: "terser",
      terserOptions: {
        compress: {
          // 生产环境去除console及debug
          drop_console: false,
          drop_debugger: true
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcbXlfcHJvamVjdFxcXFxEZWx0YUZvcmNlXFxcXGVsZWN0cm9uLWVnZ1xcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbXlfcHJvamVjdFxcXFxEZWx0YUZvcmNlXFxcXGVsZWN0cm9uLWVnZ1xcXFxmcm9udGVuZFxcXFx2aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L215X3Byb2plY3QvRGVsdGFGb3JjZS9lbGVjdHJvbi1lZ2cvZnJvbnRlbmQvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBVbm9jc3MgZnJvbSBcInVub2Nzcy92aXRlXCI7XHJcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy9yZXNvbHZlcnMnXHJcblxyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAvLyBcdTk4NzlcdTc2RUVcdTYzRDJcdTRFRjZcclxuICAgIHBsdWdpbnM6IFsgICAgICB2dWUoKSwgICAgICAgVW5vY3NzKCkgICwgQXV0b0ltcG9ydCh7XHJcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgfSksICAgXSxcclxuICAgIC8vIFx1NTdGQVx1Nzg0MFx1OTE0RFx1N0Y2RVxyXG4gICAgYmFzZTogJy4vJyxcclxuICAgIHB1YmxpY0RpcjogJ3B1YmxpYycsXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICBzY3NzOiB7XHJcbmFwaTogJ21vZGVybi1jb21waWxlcidcclxuICAgICAgICAvLyBhZGRpdGlvbmFsRGF0YTogYEBpbXBvcnQgXCJAL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiO2AgLy8gXHU1OTgyXHU2NzlDXHU2NzA5XHU1MTY4XHU1QzQwXHU1M0Q4XHU5MUNGXHU2NTg3XHU0RUY2XHU3Njg0XHU4QkREXHJcbiAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBvdXREaXI6ICdkaXN0JyxcclxuICAgICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcclxuICAgICAgYXNzZXRzSW5saW5lTGltaXQ6IDQwOTYsXHJcbiAgICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcclxuICAgICAgYnJvdGxpU2l6ZTogZmFsc2UsXHJcbiAgICAgIHNvdXJjZW1hcDogZmFsc2UsXHJcbiAgICAgIG1pbmlmeTogJ3RlcnNlcicsXHJcbiAgICAgIHRlcnNlck9wdGlvbnM6IHtcclxuICAgICAgICBjb21wcmVzczoge1xyXG4gICAgICAgICAgLy8gXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU1M0JCXHU5NjY0Y29uc29sZVx1NTNDQWRlYnVnXHJcbiAgICAgICAgICBkcm9wX2NvbnNvbGU6IGZhbHNlLFxyXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogdHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9XHJcbn0pXHJcblxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxPQUFPLFNBQVM7QUFDeFYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLFNBQVMsMkJBQTJCO0FBRXBDLE9BQU8sVUFBVTtBQVBqQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWEsTUFBTTtBQUNoQyxTQUFPO0FBQUE7QUFBQSxJQUVMLFNBQVM7QUFBQSxNQUFPLElBQUk7QUFBQSxNQUFTLE9BQU87QUFBQSxNQUFLLFdBQVc7QUFBQSxRQUNsRCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXLENBQUMsb0JBQW9CLENBQUM7QUFBQSxNQUNuQyxDQUFDO0FBQUEsSUFBSztBQUFBO0FBQUEsSUFFTixNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsSUFDWCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsTUFDcEM7QUFBQSxJQUNGO0FBQUEsSUFDQSxLQUFLO0FBQUEsTUFDSCxxQkFBcUI7QUFBQSxRQUN6QixNQUFNO0FBQUEsVUFDUixLQUFLO0FBQUE7QUFBQSxRQUVDO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLE1BQ25CLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLGVBQWU7QUFBQSxRQUNiLFVBQVU7QUFBQTtBQUFBLFVBRVIsY0FBYztBQUFBLFVBQ2QsZUFBZTtBQUFBLFFBQ2pCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
