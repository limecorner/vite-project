<template>
  <div>
    <p>The window width and height are respectively {{width}}, {{height}}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  mounted() {
    // 在组件挂载后，添加resize事件监听器
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    // 在组件卸载前，移除resize事件监听器，以防止内存泄漏
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      // 处理resize事件的代码
      console.log('窗口大小已更改')
      this.width = document.documentElement.clientWidth;
      this.height = document.documentElement.clientHeight;
    }
  }
}
</script>
