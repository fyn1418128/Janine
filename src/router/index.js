import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router  = new Router({
    routes:[
        {
            path: '/procident',
            name:'procident',
            component:()=>import('@/view/procident'),
            meta:{
                title:'who'
            },
            hidden:true
        },
        {
            path: '/pigs',
            name: 'pigs',
            component:() => import('@/view/pigs/pigs'),
            meta:{
                title:'ddd'
            },
            hidden:true
        },{
            path:'/login',
            name:'login',
            component: ()=> import('@/view/login/login'),
            meta:{
                title:'域'
            }
        },{
            path:'/ProvincLink',
            name:'ProvincLink',
            component:()=>import('@/view/ProvincLink/ProvincLink'),
            meta:{
                title:'文'
            }
        },{
            path:'/city',
            name:'city',
            component: ()=>import('@/view/ProvincLink/city'),
            meta: {
                title:'艺'
            }
        },{
            path:'/arrAll',
            name:'arrAll',
            component: ()=>import('@/view/ProvincLink/arrAll'),
            meta: {
                title:'舞'
            }
        },{
            path:'/C_arrAll',
            name:'C_arrAll',
            component: ()=>import('@/view/ProvincLink/C_arrAll'),
            meta: {
                title:'舞'
            }
        },{
            path:'/vue_dialog',
            name:'vue_dialog',
            component: ()=>import('@/view/dialog/vue_dialog')
        },{
            path:'/el-dialog',
            name:'el_dialog',
            component: () => import('@/view/dialog/el-dialog')
        },{
            path:'/carousel',
            name:'carousel',
            component: () => import('@/view/Carousel/carousel')
        },{
            path:'/timeline',
            name:'timeline',
            component: ()=>import('../view/timeline/timeline.vue'),
            meta:{
                title:'时间线'
            }
        },{
            path:'/calender',
            name:'/calender',
            component: ()=>import('../view/calendar/calender.vue'),
            meta: {
                title: 'calender'
            }
        },{
            path:'/tab',
            name:'tab',
            component: ()=>import('../view/tab/tab.vue'),
            meta: {
                title:'标签页'
            }
        },{
            path:'/velf_tab',
            name:'velf_tab',
            component: ()=>import('../view/tab/velf_tab.vue'),
            meta: {
                title: '标签练习'
            }
        },{
            path:'/slot_vue',
            name:'slot_vue',
            component: ()=>import('../view/slot/slot_vue.vue'),
            meta:{
                title:'插槽'
            }
        }
    ]
})
export default router