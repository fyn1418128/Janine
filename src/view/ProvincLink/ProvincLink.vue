<template>
  <div>
      <el-form label-width="20px">
          <el-row :gutter="20">
              <el-col :span="8">
                <el-form-item label='省'>
                    <el-select v-model="prov" @change="changeprov(prov)">
                        <el-option
                            v-for="item in provArr"
                            :key="item.vinceId"
                            :label="item.vince"
                            :value="item.vince"
                            type="text"
                            style="margin-right: 20px"
                        />
                    </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label='市'>
                    <el-select v-model='city' @change="changecity"> 
                        <el-option
                            v-for="item in cityArr"
                            :key="item.id"
                            :label="item.label"
                            :value="item.label"
                            type="text"
                            style="margin-right: 20px"
                        />
                    </el-select>
                </el-form-item>
              </el-col>
          </el-row>
      </el-form>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        provArr: [], // 省份
        cityArr: [], // 城市
        city: '', // 选中的城市
        prov: '', // 选中的省份
        cityALL: [
          {
            vince: "上海市",
            vinceId: "1",
            children: [
              { city: "1", label: "徐汇区" },
              { city: "2", label: "虹口区" },
              { city: "3", label: "黄浦区" },
              { city: "4", label: "杨浦区" },
              { city: "5", label: "金山区" },
              { city: "6", label: "松江区" },
              { city: "7", label: "闵行区" },
            ],
          },
          {
            vince: "北京市",
            vinceId: "2",
            children: [
              { city: "1", label: "朝阳区" },
              { city: "2", label: "宣武区" },
              { city: "3", label: "崇文区" },
              { city: "4", label: "东城区" },
              { city: "5", label: "西城区" },
              { city: "6", label: "海淀区" },
              { city: "7", label: "通州区" },
            ],
          },
        ],
      };
    },
    created() {},
    mounted() {},
    beforeMount () {
        this.changeprov()
    },
    watch :{
      // 监听 省份的变化 省份发生变化时，城市清空
        prov (newVal,oldVal) {
          console.log(newVal,'ll;')
          console.log(oldVal,'jjk')
          if (oldVal !== newVal) {
            this.city = ''
            console.log(this.city,'2321')
          }
        },
    },
    methods: {
      // 省 change 事件
      changeprov(val) {
        // 获取对应的省份
        this.cityALL.filter(item =>{
          if (val == item.vince) {
            return item.vince == val
          } 
        })
        // 获取省份
        this.provArr = this.cityALL
        // 获取城市
        for (var i in this.cityALL) {
          var obj = this.cityALL[i]
          if (obj.vince) {
            if (obj.vince == this.prov) {
              this.cityArr = obj.children
            }
          }
        }
      },
      // 城市 change 事件
      changecity() {
        console.log('o213p',this.city)
      }
    },
  };
</script>