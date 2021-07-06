<template>
  <div class="calender">
    <!-- 日期加时间：type="datetimerange"  日期：type="daterange" -->
    <el-date-picker
      :disabled="couponsForm.effectiveType != 1"
      v-model="couponsForm.effectiveTime"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerBeginDateAfter"
    >
    </el-date-picker>
    <!-- 范围选择时选中日期所使用的当日内具体时刻 :default-time="['00:00:00','23:59:59']"
在范围选择器里取消两个日期面板之间的联动 ：unlink-panels -->
    <el-form-item label="活动时间：" prop="activityTime">
      <el-date-picker
        v-model="ruleForm.activityTime"
        type="datetimerange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerBeginDateAfter"
        :default-time="['00:00:00', '23:59:59']"
        unlink-panels
      >
      </el-date-picker>
    </el-form-item>

    <!-- <el-form-item label="任务有效期">
      <el-date-picker
        v-model="dialogForm.taskTime"
        :picker-options="pickerOptionsModel"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
        @blur="blurFn('taskTime')"
        @change="blurFn('taskTime')"
      ></el-date-picker>
    </el-form-item>-->
    <!-- <el-form-item label="开始时刻" prop="startTime">
          <el-time-picker
            v-model="dialogForm.startTime"
            :picker-options="limitStartTime"
            :default-value="defaultStartTime"
            value-format="HH:mm"
            format="HH:mm"
            placeholder="请选择开始时刻"
            @change="blurFn('startTime')"
            @blur="blurFn('startTime')"
          />
        </el-form-item> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      effectiveTime: [], //领券日期范围
    };
  },
  methods: {
    //params.effectiveStime = this.couponsForm.effectiveTime[0].Format('yyyy-MM-dd hh:mm:ss'); 转成时间日期
    //params.effectiveEtime = this.couponsForm.effectiveTime[1].Format('yyyy-MM-dd hh:mm:ss');
    //startTime:this.activityTime[0].getTime(),  //转成时间戳
    //endTime:this.activityTime[1].getTime(),//转成时间戳
    //有效期  之前时间不能选
    pickerBeginDateAfter: {
      disabledDate: (time) => {
        let beginDateVal = new Date().getTime() - 24 * 3600 * 1000;
        return time.getTime() < beginDateVal;
      },
    },
    //之前的时间不能选当前时间可以选
    //new Date().getTime() - 24 * 3600 * 1000;
    //之前的时间不能选当前时间也不可能选
    //new Date().getTime();
    //只能选择之前的时间当前时间可以选，之后的时间选不了，用于筛选查询
    // pickerBeginDateAfter: {
    //   disabledDate: (time) => {
    //     let beginDateVal = new Date().getTime();
    //     return time.getTime() > beginDateVal;
    //   },
    // },
  },
};
</script>