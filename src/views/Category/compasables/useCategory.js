//封装分类数据相关代码
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import {getCategoryApi} from '@/apis/category'
import {  useRoute } from 'vue-router';

export function useCategory(){
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async(id=route.params.id)=>{
  const res=await getCategoryApi(id)
  categoryData.value=res.result
}

  onMounted(()=>getCategory())

  onBeforeRouteUpdate((to)=>{
    getCategory(to.params.id)
  })
  return{
    categoryData,
  }
}
