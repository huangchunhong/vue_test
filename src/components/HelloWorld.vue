<template>
  <div>
    <swiper :list="swiperList" v-model="swiperList_index" @on-index-change="swiperListChange"></swiper>
    
  </div>
</template>

<script>
import { Group, Cell,Swiper } from 'vux'
import { create } from 'domain';

export default {
  components: {
    Group,
    Cell,
    Swiper,
  },
  data(){
    return{
      swiperList:[{
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
        title: '送你一朵fua'
      }, {
        url: 'javascript:',
        img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
        title: '送你一辆车'
      }, {
        url: 'javascript:',
        img: 'https://static.vux.li/demo/5.jpg', // 404
        title: '送你一次旅行',
        fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
      }],
      swiperList_index:"",
    }
  },
  methods:{
    swiperListChange(index){
      this.swiperList_index = index
    },
  },
  created() {
    // this.$vux.toast.show({
    //   text: 'Loading'
    // })

  },
}
</script>
<style scoped>
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>

