<template>
  <div>
    <el-select v-model="prov" style="width: 167px; margin-right: 25px">
      <el-option v-for="option in arr" :key="option.id" :value="option.name">
        {{ option.name }}
      </el-option>
    </el-select>
    <el-select v-model="city" style="width: 167px; margin-right: 25px">
      <el-option v-for="option in cityArr" :key="option.id" :value="option.name">
        {{ option.name }}
      </el-option>
    </el-select>
    <el-select v-model="district" v-if="district" style="width: 167px">
      <el-option v-for="option in districtArr" :key="option.id" :value="option.name">
        {{ option.name }}
      </el-option>
    </el-select>
  </div>
</template>
<script>
import area from "../../utils/util";
export default {
  data() {
    return {
      arr: area.arrAll,
      prov: "省份",
      city: "城市",
      district: "区域",
      cityArr: [],
      districtArr: [],
    };
  },
  methods: {
    updateCity: function () {
      console.log(this.arr,'kkk')
      for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name) {
          if (obj.name == this.prov) {
            this.cityArr = obj.sub;
            break;
          }
        }
      }
      this.city = this.cityArr[1].name;
    },
    updateDistrict: function () {
      for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
          this.districtArr = obj.sub;
          break;
        }
      }
      if (
        this.districtArr &&
        this.districtArr.length > 0 &&
        this.districtArr[1].name
      ) {
        this.district = this.districtArr[1].name;
      } else {
        this.district = "";
      }
    },
  },
  beforeMount() {
    this.updateCity();
    this.updateDistrict();
  },
  watch: {
    prov: function () {
      this.updateCity();
      this.updateDistrict();
    },
    city: function () {
      this.updateDistrict();
    },
  },
};
</script>