<template>
    <div>
    <div class="nav-left">
      <a href="#" class="logo">AI Plus | 智加</a>
    </div>
    <!-- 顶部右侧 -->
    <div class="nav-right">
      <el-dropdown class="manage-box">
        <span class="el-dropdown-link">
          管理
          <i class="el-icon-arrow-down el-icon--right"></i>
      <div class="manage-box paltBox" v-focusOrBlur="handleMouseEnterOrLeave">
        <span :class="['el-dropdown-link platTab', iconRoures ? 'iconRoures' : '']">{{sysName}}
          <i :class="['el-icon-arrow-down el-icon--right', iconRoures ? 'iconRoures' : '']"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <span @click="goToAiplus">权限管理</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="fn">配置管理 </span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span class="message-box">
        <i class="el-icon-bell"></i>
      </span>
      <!-- <el-dropdown class="message-box">

        <el-dropdown-menu slot="dropdown" class="msg-dropdown">
          <el-dropdown-item class="msg-item">上线通知</el-dropdown-item>
          <el-dropdown-item class="msg-item">待阅报告</el-dropdown-item>
          <el-dropdown-item class="msg-item">订阅申请</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
        <ul :class="['appWarp', showAppUl ? 'showAppUl' : '']">
          <li v-for="app in sysList(true)" :key="app.nameEn">
            <a href="javascript:void(0)" @click="handlePlatOrAppClick(app)" >{{app.name}}</a>
          </li>
        </ul>
      </div>
      <!-- 顶部管理 -->
      <div class="manage-box manageWrap" v-focusOrBlur="handleMouseEnterOrLeave1">
        <span :class="['el-dropdown-link platTab', iconRouresInMan ? 'iconRoures' : '']">管理
          <i :class="['el-icon-arrow-down el-icon--right', iconRouresInMan ? 'iconRoures' : '']"></i>
        </span>
        <ul :class="['appWarp', showManageUl ? 'showAppUl' : '']">
          <li>
            <a @click="goToAiplus">权限管理</a>
          </li>
           <li>
            <a href="javascript:void(0)" @click="fn">系统配置</a>
          </li>
        </ul>
      </div>
      <!-- 通知 -->
      <!-- <span class="message-box"> -->
          <!-- <i class="el-icon-chat-dot-round notifationIcon" title="通知"></i> -->
          <!-- <i class="el-icon-bell notifationIcon" title="通知"></i> -->
      <!-- </span> -->
      <!-- 退出登录 -->
      <!-- <div class="user-box">
        <span>
          <div class="manage-box" v-focusOrBlur="handleMouseEnterOrLeave2">
            <i class="el-icon-user userIcon"></i>
            <span :class="['el-dropdown-link platTab', iconRouresInUser ? 'iconRoures' : '']">{{currentTimes + '好，' + name}}
              <i :class="['el-icon-arrow-down el-icon--right', iconRouresInUser ? 'iconRoures' : '']"></i>
            </span>
            <ul :class="['appWarp', showUserUl ? 'showAppUl' : '']">
              <li command="a">
                <a href="javascript:void(0)" class="logout">账户设置</a>
              </li>
              <li command="b">
                <a href="javascript:void(0)" class="logout" @click="logOut">退出登录</a>
              </li>
            </ul>
          </div>
        </span>
      </div> -->
    <div class="nav-right">
      <div class="user-box">
        <span>
          <el-dropdown class="manage-box">
        </span>
      </div>
    </div>
    <!-- 顶部中间 -->
    <div class="nav-middle">
      <ul>
        <li :class="this.$store.state.user.type ===1?'active':''">
          <a href="javascript:void(0);" @click="handleHerf(0)">精准营销</a>
        </li>
        <li>
          <a href="javascript:void(0);" @click="handleHerf(1)">标签管理</a>
        </li>
        <li>
          <a href="javascript:void(0);" @click="handleHerf(2)">指标管理</a>
        </li>
        <li>
          <a href="https://bi.bestpay.com.cn/ODSMSPortal/login!init.action" target="_blank">BI平台</a>
        </li>
        <li>
          <a href="javascript:void(0);" @click="handleHerf(3)">数据服务</a>
        <!-- <li class="active"></li> platFormList  applicationList-->
        <li v-for="item in sysList()" :key="item.name" :class="[item.nameEn == currentSys ? 'active' : '', item.secondMenu ? 'second-drop' : '']" @click="handlePlatOrAppClick(item)">
          <span v-if="item.secondMenu">
            <el-dropdown class="manage-box" @command="handleETLHref">
              <span class="el-dropdown-link">{{item.name}}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="secItem in item.secondMenu" :key="secItem" :command="secItem">
                  <span class="logout">{{secItem}}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <span v-else>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
 </div>

</template>
<script>
import { logout, redirectOtherPlatForm } from '@/api/login'
import { decrypt, getParams } from '@/utils/util.js'
import { decrypt, loginFail, getEnv, } from '@/utils/util.js'
import { ip } from '@/utils/emus.js'
/**
 *  1. 根据系统修改 Data 对象中的 currentSys 与 currentSysType 字段
 *  2. 注意 78,79行的方法导入路径是否正确
 *  3. 根据自身系统自行修改系统接口
 *  4. 
 * 
 */
export default {
  data () {
    return {
      username: decrypt(window.localStorage.username), // 当前登录用户名
      ipconfig: {},
      currentSys: 'LABEL', // 指定当前是哪个系统
      currentSysType: 'app', // 指定当前系统属于哪个类型
      platFormList: [], // 平台
      applicationList: [], // 应用
      iconRoures: false,
      iconRouresInMan: false,
      iconRouresInUser: false,
      showAppUl: true,
      showManageUl: true,
      showUserUl: true,
      currentTimes: '',
      env: ''
    }
  },
  created(){
    directives: {
        focusOrBlur: {
        // bind (el, binding) {
            // el.addEventListener('mouseenter', binding.value)
        // }
        }
    }
  },
  computed: {
    // env() {
    //   let env = getParams(window.location.search)['env']
    //     ? getParams(window.location.search)['env'].toUpperCase()
    //     : 'INNER'
    //   return env
    sysName () {
      return this.currentSysType == 'app' ? '大数据应用' : '大数据服务'
    }
  },
  watch: {},
  created () {
    this.setUsername()
    this.getIpconfig()
    this.currentTimes = new Date().toLocaleTimeString().slice(0, 2)
    this.env = getEnv().toUpperCase()
  },
  methods: {
    handleHerf(i) {
      let url
      let newWin
      let systemType
      if (i === 0) {
        // window.location.reload()
        this.$router.push({
          path: '/marketingAnalysis/marketingBoard'
        })
        return false
      }
      if (i === 1) {
        // 标签平台测试地址
        let address = ip['TAG']
        url = address[this.env]
        systemType = 'TAG'
        // newWin = window.open('http://localhost:952' + i, i)
      }
      if (i === 2) {
        // 指标平台测试地址
        let address = ip['TARGET']
        url = address[this.env]
        systemType = 'TARGET'
        // newWin = window.open('http://localhost:952' + i, i)
      }
      if (i === 3) {
        // 数据服务测试地址
        let address = ip['API']
        url = address[this.env]
        systemType = 'API'
        // newWin = window.open('http://localhost:952' + i, i)// newWin = window.open('http://localhost:952' + i, i)
      }
      redirectOtherPlatForm({
        url,
        systemType,
        env: this.env
      }).then(res => {
        if (res.data.code == 'success') {
          window.location.href = res.data.data
        } else {
          this.$message.warning('跳转失败')
        }
      })
    },
    editPassword() {
      // console.log(ip['AIPLUS'], this.env)
      // return
      window.location.href =
        ip['AIPLUS'][this.env] +
        '?env=' +
        '&sysType=label' +
        '#/updatePassword'
    },
    logOut() {
      this.$store.dispatch('LogOut').then(res => {
        window.location.href =
          ip['AIPLUS'][this.env] + '?env=' + this.env + '&sysType=label'
      })
    },
    goToAiplus() {
      window.location.href =
        ip['AIPLUS'][this.env] + '?env=' + this.env + '#/power'
      this.$router.push({
        path: '/manageCenter/auditConfigChild'
      })
    },
    // 根据当前系统设置navbar展示列表
    sysList (right = false) {
      if (right) {
        return this.currentSysType == 'app' ? this.platFormList : this.applicationList
      }
       return this.currentSysType == 'app' ? this.applicationList : this.platFormList
    },
    // ETL跳转
    handleETLHref (key) {
      if (key.includes('DEV')) return this.$message.warning('该环境暂未开放')
    },
    // 点击跳转
    handlePlatOrAppClick (item) {
      let secondMenu = item.secondMenu
      if (secondMenu && this.currentSysType == 'plat') return // 如果是点击二级菜单的，直接return
      // console.log(item)
      let nameEn = item.nameEn
      let hrefUrl = ''
      if (item.sysType == 'plat') {
        // 如果是平台类型的
        hrefUrl = this.getHrefUrl(this.platFormList, nameEn) // 获取点击那一项的要跳转的url
      } else {
        hrefUrl = this.getHrefUrl(this.applicationList, nameEn)
      }
      if (!hrefUrl) return this.$message.warning('该环境暂未开放,请确定您的ENV正确')
      this.getFreeUrl({
        url: hrefUrl,
        systemType: nameEn,
        env: getEnv().toUpperCase()
      }).then(res => {
        if (res.data.code) {
          let result = res.data.data
          if (item.openNewWindow) {
            window.open(result, nameEn + (+new Date()))
          } else {
            window.location.href = result
          }
        }
      })
    },
    // 返回当前环境下，点击那一项的url
    getHrefUrl (list, nameEn) {
      let clickItem = list.find(item => item.nameEn == nameEn) // 获取点击那一项的所有数据
      let urlList = clickItem.urlList // 获取点击的urlList
      let env = getEnv().toUpperCase() // 获取当前环境
      let hrefUrl = urlList[env] // 根据当前环境获取对应的url
      return hrefUrl
    },
    // 点击后触发的接口
    getFreeUrl (data) {
      return redirectOtherPlatForm(data)
    },
    // , {name: '元数据管理', nameEn: 'MEDATA'}
    // 对获取的list进行二次设置
    setApplist() {
      let ipconfig = this.ipconfig.ip
      const paltList = [{name: 'ETL平台', nameEn: 'ETL'}, {name: '数据服务', nameEn: 'API'}]
      const appList = [{name: '精准营销', nameEn: 'LABEL'}, {name: '埋点管理', nameEn: 'ETM'}, {name: '指标管理', nameEn: 'TARGET'}, {name: '标签管理', nameEn: 'TAG'}]
      Object.keys(ipconfig).forEach(ip => {
        let obj = {}
        paltList.forEach(plat => {
          if (ip == plat['nameEn']) {
            if (ip == 'ETL') {
              // obj.secondMenu = ['开发环境(DEV)', '生产环境(PRD)']
              obj.secondMenu = null
            } else {
              obj.secondMenu = null
            }
            if (ip == 'MEDATA') {
              obj.openNewWindow = true
            } else {
              obj.openNewWindow = false
            }
            obj.sysType = 'plat' // 代表该item属于 平台 类型
            obj.urlList = ipconfig[ip]
            obj.name = plat['name']
            obj.nameEn = plat['nameEn']
            this.platFormList.push(obj)
          }
        })
        appList.forEach(app => {
          if (ip == app['nameEn']) {
            if (ip == 'ETM') {
              obj.openNewWindow = true
            } else {
              obj.openNewWindow = false
            }
            obj.sysType = 'app' // 代表该item属于 应用 类型
            obj.urlList = ipconfig[ip]
            obj.name = app['name']
            obj.nameEn = app['nameEn']
            obj.secondMenu = null
            this.applicationList.push(obj)
          }
        })
      })

      // 调整指标管理平台的顺序到第三位 确保顺序为 精准营销 标签管理 指标管理 埋点管理
      let target = this.applicationList[0]
      this.applicationList.shift()
      this.applicationList.splice(2,0,target)
      this.platFormList.reverse()
    },
    // 设置 username
    setUsername () {
      let name = localStorage.getItem('name')
      this.name = name ? decrypt(name) : 'admin'
    },
    // 获取ipconfig
    getIpconfig () {
      let ipconfig = localStorage.getItem('ipconfig')
      ipconfig && (this.ipconfig = JSON.parse(ipconfig))
      this.setApplist()
    },
    // 鼠标的移入移出操作
    handleMouseEnterOrLeave () {
      this.showAppUl = !this.showAppUl
      this.iconRoures = !this.iconRoures
    },
    handleMouseEnterOrLeave1 () {
      this.showManageUl = !this.showManageUl
      this.iconRouresInMan = !this.iconRouresInMan
    },
    handleMouseEnterOrLeave2 () {
      this.showUserUl = !this.showUserUl
      this.iconRouresInUser = !this.iconRouresInUser
    },
    // 前往智加平台
    hreftoaiplus () {
      loginFail('success', '正在前往智加平台...', 'power')
    },
    // // 登出-退出登录
    logOut () {
      logout()
        .then(res => {
          if (res.data.code) {
            loginFail('success', '退出成功,正在前往登录页...')
          }else{
          	this.$message.error({
							title: '错误',
							message: res.data.errorMsg
						})
          }
        })
    }
  },
  created() {}
  
}
</script>
<style lang="scss">

.el-header{
  padding: 0 30px;
  background: rgb(35,35,35);
  color: #fff;
  z-index: 2000;
}
.navbar {
  height: 60px;
  .nav-left {
    float: left;
    line-height: 60px;
    height: 60px;
    width: 180px;
    left: 0;
    top: 0;
    z-index: 999;
    background: #232323;
    .logo {
      font-weight: bold;
      font-size: 18px;
      color: #1bbd9d;
    }
  }
  .nav-middle{
    float: left;
    font-size: 14px;
    color: rgb(141, 139, 139);
    line-height: 60px;
    margin-right: 60px;
    ul,li{
      list-style: none;
      float: left;
      margin: 0;
      padding: 0;
    }
    li{
      height: 60px;
      line-height: 60px;
      padding: 0 30px;
      border-bottom: 3px solid transparent;
      cursor: pointer;
      color: #fff;
      transition: all 0.3s ease;
      &.active,&:hover{
        border-bottom: 3px solid #1bbd9d;
        span {
          color: #1bbd9d !important;
        }
      }
    }
    .second-drop {
      .el-dropdown-link {
        color: #fff;
      }
      .el-dropdown {
        display: inline;
      }
      span {
        font-size: 16px;
      }
    }
  }

  .nav-right {
    font-size: 14px;
    color: #b5bdca;
    height: 60px;
    float: right;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .manage-box{
      // margin-right: 15px;
      color: #fff;
      cursor: pointer;
      height:60px;
      line-height: 60px;
      position: relative;
      &.paltBox {
        margin-top: 0px;
        padding: 0 30px;
        border-left: 1px solid rgba(#fff, 0.3);
        border-right: 1px solid rgba(#fff, 0.3);
      }
      &.manageWrap {
        text-align: center;
        padding: 0 20px;
      }
      span.platTab {
        display: inline-block;
        height: 60px;
        padding: 0 20px;
        transition: all 0.3s ease;
      }
      span.iconRoures {
        color: #1bbd9d;
        border-bottom: 3px solid #1bbd9d;
      }
      ul.appWarp {
        width: 66%;
        padding: 5px 0;
        margin: 0;
        position: absolute;
        left: 17%;
        top: 60px;
        z-index: 10;
        background-color: #fff;
        border-radius: 3px;
        box-shadow: 1px 1px 10px #c1c1c1;
        transition: opacity 0.4s ease;
        &.showAppUl {
          opacity: 0;
          visibility: hidden;
        }
        li a {
          display: block;
          color: #000;
          text-align: center;
          height: 38px;
          line-height: 28px;
          font-size: 13px;
          padding: 5px 0;
          &:hover {
            background-color: rgba(27,190,158, 0.2);
          }
        }
      }
      i {
        transition: transform 0.4s ease;
        transform: rotate(0deg);
        &.iconRoures {
          transform: rotate(180deg);
          color: #1bbd9d;
        }
      }
    }
    .message-box{
      padding-right: 30px;
      i {
        // color: #1bbd9d;
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        &:hover {
          color: #1bbd9d;
        }
      }
      .el-badge__content{
        background-color: #ff224c;
        border: none;
        line-height: 16px;
      }
    }
    .user-box{
      .line{
        padding: 0 8px;
      }
      .userIcon {
        color: #1bbd9d;
        font-size: 16px;
        margin-right: 10px;
      }
      .logout{
        cursor: pointer;
        &:hover{
          color: #1bbd9d
        }
      }
    }
  }
}
</style>
