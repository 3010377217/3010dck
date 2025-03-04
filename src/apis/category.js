import request from '@/utils/http'
export function getCategoryApi(id){
  return request({
    url:'/category',
    params:{
      id
    }
  })
}
export const getCategoryFilterApi=(id)=>{
  return request({
    url:'/category/sub/filter',
    params:{
      id
    }
  })
}
