import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryApi } from '@/apis/layout'
export const useCategoryStore = defineStore('category', () => {
  //导航列表逻辑
  //导航列表数据
  const categoryList=ref([])
  //获取导航数据的方法
  const getCategory=async()=>{
    const res= await getCategoryApi()
    console.log(res)
    categoryList.value=res.result
  }
  return {
    categoryList,
    getCategory
  }
})
