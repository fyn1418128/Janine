<template>
  <div class="Imgroll">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item,index) in imgUrls" :key="index">
        <img ref="img" :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgUrls: []
    }
  },
  mounted () {
    this.getImages()
  },
  methods: {
    getImages () {
      this.getImgurl().then(res=>{
        this.imgUrls = res
      })
    },
    // 数据请求服务，一般返回的是一个promise对象，是一个异步处理的解决方案
    getImgurl() {
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          const data = []
          for (let index = 1; index < 12; index ++ ) {
            const obj = {}
            // 对 图片名 小于 10 的图片 前面 + 0
            if (index < 10) {
              index = '0' + index
            }
            obj.imageUrl  = require (`../images/roll-picture/${index}.png`)
            data.push(obj)
          }
          resolve(data)
          reject()
        },100)
      })
    }
  }
}
</script>