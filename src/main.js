

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'

import App from './App.vue'
import router from './router'

import '@/styles/common.scss'

//测试接口函数


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy',{
  mounted(el,binding){
    //el:指令绑定的元素 img
    //binding:binding.value 图片url
    console.log(el,binding.value)
    useIntersectionObserver(
      el,
      ([{ isIntersecting }])=>{
        console.log(isIntersecting)
      }
    )
  }


})
