//封装banner轮播图相关代码
//获取banner
import { getBannerApi } from '@/apis/home';
import { onMounted, ref } from 'vue';

export function useBanner(){
  const BannerList=ref([])
  const getBanner=async()=>{
  const res=await getBannerApi({
    distributionSite:'2'
  })
  BannerList.value=res.result
}
  onMounted(()=>getBanner())

  return{
    BannerList
  }
}
