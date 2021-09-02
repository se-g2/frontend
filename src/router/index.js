import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'
import Login from '../views/Login.vue'
import Driver from '../layout/Driver.vue'
import Admin from '../layout/Admin.vue'
import Register from '../views/Register.vue'
import Verify from '../views/Verify.vue'
const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect:"/person",
    children: [
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
      {
        path: '/order',
        name: 'Order',
        component :()=>import("@/views/Order")
      },
      {
        path: '/submit',
        name: 'Submit',
        component :()=>import("@/views/Submit")
      },
      {
        path: '/score',
        name: 'Score',
        component :()=>import("@/views/Score")
      },
      {
        path: '/join',
        name: 'Join',
        component :()=>import("@/views/Join")
      },
      {
        path: '/cancel',
        name: 'Cancel',
        component :()=>import("@/views/Cancel")
      }

    ]
  },
  {
    path: '/driver',
    name: 'Driver',
    component: Driver,
    redirect:"/driver/accept",
    children: [
      {
        path: '/driver/accept',
        name: 'Accept',
        component :()=>import("@/views/driver/Accept")
      },
      {
        path: '/driver/finish',
        name: 'Finish',
        component :()=>import("@/views/driver/Finish")
      }

    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    redirect:"/admin/new",
    children: [
      {
        path: '/admin/new',
        name: 'New',
        component :()=>import("@/views/admin/New")
      },
      {
        path: '/admin/usernew',
        name: 'Usernew',
        components :()=>import("@/views/admin/Usernew")
      },
      {
        path: '/admin/usermodify',
        name: 'Usermodify',
        component :()=>import("@/views/admin/Usermodify")
      },
      {
        path: '/admin/userdelete',
        name: 'Userdelete',
        component :()=>import("@/views/admin/Userdelete")
      },     
      {
        path: '/admin/vehiclemodify',
        name: 'Vehiclemodify',
        component :()=>import("@/views/admin/Vehiclemodify")
      },     
      {
        path: '/admin/vehicledelete',
        name: 'Vehicledelete',
        component :()=>import("@/views/admin/Vehicledelete")
      },      
      {
        path: '/admin/orderfinish',
        name: 'Orderfinish',
        component :()=>import("@/views/admin/Orderfinish")
      },
      {
        path: '/admin/orderdelete',
        name: 'Orderdelete',
        component :()=>import("@/views/admin/Orderdelete")
      },           
      {
        path: '/admin/orderfeedback',
        name: 'Orderfeedback',
        component :()=>import("@/views/admin/Orderfeedback")
      },      
      {
        path: '/admin/orderreply',
        name: 'Orderreply',
        component :()=>import("@/views/admin/Orderreply")
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
