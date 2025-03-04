import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
import {getSubCategoryApi} from '@/apis/category'
import {  useRoute } from 'vue-router';

export function useSubCategory(){
  const subCategoryData = ref({})
  const route = useRoute()
  const getSubCategory = async(id=route.params.id)=>{
  const res=await getSubCategoryApi(id)
  subCategoryData.value=res.result.children
  console.log(subCategoryData.value)
}

  onMounted(()=>getSubCategory())

  onBeforeRouteUpdate((to)=>{
    getSubCategory(to.params.id)
  })
  return{
    subCategoryData,
  }
}
