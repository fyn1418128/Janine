<template>
    <div>
        <!-- 基础 dialog -->
        <el-button type="text" @click="determine = true">基础 dialog</el-button>
        <el-dialog
        title="提示"
         width="40%"
        :visible.sync='determine'
        :before-close='closely'>
        <span>xxx</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="determine = false">取消</el-button>
            <el-button type="primary" @click="determine = false">确定</el-button>
        </span>
        </el-dialog>
<br>
        <!-- dialog  表单 -->
        <el-button @click="disForm = true"  type='text'>表单 dialog</el-button>
        <el-dialog
        title="表单"
        :visible.sync='disForm'
        >
            <el-form :model="form">
                <el-form-item label='活动名称' label-width="formLabelWidth" >
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label='活动区域' label-width="formLabelWidth" >
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="hongkouqu"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="disForm = false">取消</el-button>
                <el-button type="primary" @click="disForm = false">确定</el-button>
            </span>
        </el-dialog>
        <br>
        <el-button type="text" @click="diaTable = true">表格 dialog</el-button>
        <el-dialog
        title="收货地址"
        :visible.sync='diaTable'>
            <el-table :data="gridData">
                <el-table-column property='date' label="日期" width="120px"></el-table-column>
                <el-table-column property='name' label="姓名" width="150px"></el-table-column>
                <el-table-column property='address' label="地址" ></el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>

<script> 
export default {
    data () {
        return {
            gridData:[{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻江路 1518 弄'
                },{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
                },
            ],
            determine: false,
            disForm: false,
            diaTable: false,
            form: {
                name:'',
                region:'',
                date1: '',
            },
            formLabelWidth:'120px'
        }
    },
    methods: {
        closely (done) {
            // this.determine = false
            this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
        },
    }
}
</script>