<template>
    <div class='Imgroll'>
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="(item,index) in imgUrls" :key="index">
          <img ref='img' :src="item.imageUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrls:[]
        }
    },
    mounted(){
      this.getImages();
    },
    methods:{
      getImages() {
        this.getImgUrl().then(res => {
          this.imgUrls = res
        })
      },

      // 数据请求服务，一般是返回的一个promise对象，  是一个异步处理的解决方案，
      getImgUrl(){
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            const data = [];
            //遍历图片
            for (let index = 1; index < 12; index++) {
              const obj = {};
              //对图片名如果小于十就在前面加一个0
              if (index < 10) {
                index = '0' + index
              }
              obj.imageUrl = require(`../images/roll-picture/${index}.jpg`)
              data.push(obj)
            }
            resolve(data);
            reject();
          }, 100);
        })
      }
    }
}
</script>
