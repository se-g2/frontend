import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Verify from '../views/Verify.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:"/user",
    children: [
      {
        path: 'user',
        name: 'User',
        component :()=> import("@/views/User")
      },
      {
        path: '/person',
        name: 'Person',
        component :()=> import("@/views/Person")
      },
      {
        path: '/announce',
        name: 'Announce',
        component :()=>import("@/views/Announce")
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/verify',
    name: 'Verify',
    component: Verify
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// 限制某些页面禁止未登录访问
let limitPagePath = ['/about']

router.beforeEach((to, from, next) => {
    if (limitPagePath.includes(to.path)) {
        // 判断sessionStorage是否保存了用户信息
        let userStr = sessionStorage.getItem("user") || "{}"
        let user = JSON.parse(userStr)
        if (!user.id) {
            // 跳转到登录页面
            next({path: "/login"})
        } else {
            next()
        }
    } else {
        next()
    }

})
export default router
