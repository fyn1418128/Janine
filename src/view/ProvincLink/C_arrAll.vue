<!--仿写  不完美 -->
<template>
    <div>
        <el-select v-model='prov' placeholder="请选择省份">
            <el-option v-for='option in arr' :key='option.id' :value='option.name'>
                {{option.name}} 
            </el-option>
        </el-select>
        <el-select v-model='city' placeholder="请选择省份">
            <el-option v-for='option in cityArr' :key='option.id' :value='option.name'>
                {{option.name}} 
            </el-option>
        </el-select>
        <el-select v-model='district' placeholder="请选择省份">
            <el-option v-for='option in districtArr' :key='option.id' :value='option.name'>
                {{option.name}} 
            </el-option>
        </el-select>
    </div>
</template>

<script>
import ary from '../../utils/util'
export default {
    data() {
        return {
            arr: ary.arrAll,
            prov: '省份',
            city: '城市',
            district: '区域',
            cityArr: [],
            districtArr: []
        }
    },
    beforeMount () {
        this.updateCity()
        this.updateDistrict()
    },
    watch : {
        prov: function () {
            this.updateCity()
            this.updateDistrict()
        },
        city: function () {
            this.updateDistrict()
        }
    },
    methods: {
        updateCity: function () {
            for (var i in this.arr) {
                var obj = this.arr[i]
                if (obj.name) {
                    if (obj.name == this.prov) {
                        this.cityArr = obj.sub
                        break
                    }
                }
            }
        },
        updateDistrict: function () {
            console.log(this.cityArr,'123')
            if (this.cityArr && this.cityArr.length >0 && this.cityArr[1].name) {
                this.city = this.cityArr[1].name
                console.log(this.city,'jkj')
            } else {
                this.city = '请选购'
            }
            for (var i in this.cityArr) {
                var obj = this.cityArr[i]
                if (obj.name == this.city) {
                    this.districtArr =obj.sub
                    break
                }
            }
            if (this.districtArr && this.districtArr.length >0 && this.districtArr[1].name) {
                this.district = this.districtArr[1].name
            } else {
                this.district = ''
            }
        }
    }
}
</script> 