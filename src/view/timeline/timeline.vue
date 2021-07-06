/*   <!-- <div class="block">
    <div class="radio">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
      <br>
      <br>
      <br>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(item, index) in activities"
        :key="index"
        :icon="item.icon"
         :type="item.type"
      :color="item.color"
        :timestamp="item.timestamp"
      >
        {{ item.content }}
      </el-timeline-item>
    </el-timeline>
  </div> 

// <script>
// export default {
//   data() {
//     return {
//       reverse: true,
//       activities: [{
//           content: '支持使用图标',
//           timestamp: '2018-04-12 20:46',
//           size: 'large',
//           type: 'primary',
//           icon: 'el-icon-more'
//         },
//         {
//           content: "活动按时开始",
//           timestamp: "2018-05-10",
//          
 color: '#234232'
//         },
//         {
//           content: "通过表决",
//           timestamp: "2018-05-12",
//         },
//         {
//           content: "圆满完成",
//           timestamp: "2018-05-30",
//         },
//       ],
//     };
//   },
// };
// </script>--> */





<template>
  <div>
    <button @click="get"> quding </button>
    {{msg}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods:{
      get () {
        this.msg = 0
        for(var i=101;i<=200;i++) {
          for (var j=2; j<(i/2);j++) {
            if (i%j == 0) {
              break
            }
            if(j>= (i%2)) {
              this.msg ++
              console.log(i,this.msg)
            }
          }
        }
      }
  }
}
</script>








