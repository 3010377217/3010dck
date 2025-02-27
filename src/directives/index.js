import { useIntersectionObserver } from '@vueuse/core'
export const lazyPlugin={
  install(app){
    //懒加载逻辑
    app.directive('img-lazy',{
      mounted(el,binding){
        //el:指令绑定的元素 img
        //binding:binding.value 图片url
        console.log(el,binding.value)
        const {stop} = useIntersectionObserver(
          el,
          ([{ isIntersecting }])=>{
            console.log(isIntersecting)
            if(isIntersecting){
              el.src=binding.value
              stop()
            }
          }
        )
      }


    })
  }
}
