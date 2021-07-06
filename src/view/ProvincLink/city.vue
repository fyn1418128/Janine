<!-- 省市联动-->
<template>
  <div>
    <el-form>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="省份" label-width="40px">
            <el-select v-model="selectedProv">
              <el-option
                v-for="item in listProv"
                :label="item.name"
                :value="item.id"
                :key="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="城市" label-width="40px">
            <el-select v-model="selectedCity">
              <el-option
                v-for="item in listCity"
                :value="item.id"
                :key="item.id"
                :label="item.name"
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
      selectedProv: null,
      selectedCity: null,
      listProv: [],
      listCity: [],
      cityAll: [
        {
            "pid": "1",
            "id": "1",
            "name": "广州"
          },
          {
            "pid": "1",
            "id": "2",
            "name": "湛江"
          },
          {
            "pid": "2",
            "id": "3",
            "name": "长沙"
          },
          {
            "pid": "2",
            "id": "4",
            "name": "湘潭"
          }, {
            "pid": "3",
            "id": "5",
            "name": "南宁"
          },
          {
            "pid": "3",
            "id": "6",
            "name": "梧州"
          }
      ],
    };
  },
  created: function () {
    this.getProvList();
  },
  watch: {
    selectedProv: "getCityList",
  },
  methods: {
    //获取省份列表
    getProvList: function () {
      this.listProv = [
        {
          id: "1",
          name: "广东",
        },
        {
          id: "2",
          name: "湖南",
        },
        {
          id: "3",
          name: "广西",
        },
      ];
    },
    // 获取当前选择省份下的城市列表
    getCityList: function () {
      let vm = this;
      this.listCity = this.cityAll.filter(function (name) {
        return name.pid == vm.selectedProv;
      });
    },
  },
};
</script>

<style scoped>
</style>