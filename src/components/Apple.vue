<template>
    <div> 
        <div>
            <!-- 输入框 -->
        <input type="text" placeholder="请输入" v-model="message">  
        <p>{{message}}</p> 
        </div>
        <!-- 文本框，，，换行 -->
        <div>
            <textarea  placeholder="换行文本框" v-model="vioce"></textarea>
            <p style="white-space:pre-wrap">{{vioce}}</p>
        </div>
        <!-- 复选框 -->
        <div>
            <input type="checkbox" value='Janine' v-model='checkout'>
            <label for='Janine'>Janine</label>
            <input type="checkbox" value='Nancy' v-model='checkout'>
            <label for='Nancy'>Nancy</label>
            <!-- <input type="checkbox" value='Janine' v-model='checkout'>
            <label for='Janine'>Janine</label> -->
            <p>checkout:{{checkout}}</p>
        </div>
        <!-- 单选按钮 -->
        <div>
            <input type="radio" value='one' v-model='texi'>
            <label for="one"> one </label>
            <input type="radio" value='two' v-model='texi'>
            <label for="two"> two </label>
            <p>texi: {{texi}}</p>
        </div>
        <!-- 选择框 -->
        <div>
            <select name="" id="">
                <option   value="">不限</option>
                <option value="sex">sex</option>
                <option value="name">name</option>
            </select>
        </div>
        <!-- v-for 渲染动态选框 -->

        <div>
            <select v-model="itemser">
                <option v-for="item in items" :key="item.id" :value="item.value">
                {{item.id}}
                </option>
            </select>
            <span>
                itemser:{{itemser}}
            </span>
        </div>
     </div>
     
</template>
<script>
export default {
    name: 'Apple',
    data() {
        return {
            message: '',
            vioce:'',
            checkout:[],
            texi:'',
            itemser:'',
            items:[
                {id:1,value:'one'},
                {id:2,value:'two'},
                {id:3,value:'three'}
            ]
        }
    },
}
</script>