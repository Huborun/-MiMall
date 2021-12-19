import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Login from './pages/login'
import Test from "./components/common/test"
import Xiaomi11Ultra from "./pages/phones/Xiaomi11Ultra"
import Note11Pro from "./pages/phones/Note11Pro"
import MIX4 from "./pages/phones/MIX4"
import MIXFOLD from "./pages/phones/MIXFOLD"
import RedmiK40 from "./pages/phones/RedmiK40"
import Purchase from "./pages/purchase"
import error from "./pages/404"
import Success1 from "./pages/success1"
import Cart from "./pages/cart"
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Index,
                },
                {
                    path: '/product/1',
                    name: 'Xiaomi11Ultra',
                    component: Xiaomi11Ultra,
                },
                {
                    path: '/product/2',
                    name: 'Note11Pro',
                    component: Note11Pro,
                },
                {
                    path: '/product/3',
                    name: 'MIX4',
                    component: MIX4,
                },
                {
                    path: '/product/4',
                    name: 'MIXFOLD',
                    component: MIXFOLD,
                },
                {
                    path: '/product/5',
                    name: 'K40',
                    component: RedmiK40,
                },
                {
                    path: "/purchase/:id",
                    name: "purchase",
                    component: Purchase
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: "/test",
            name: 'test',
            component: Test
        },
        {
            path: "/cartSuccess",
            name: "cartSuccess",
            component: Success1,
        },
        {
            path:"/cart",
            name:Cart,
            component: Cart
        },
        {
            path: "/404",
            name: 404,
            component: error
        },
        {
            path: "*",
            redirect: "/404"
        }
    ]
})
router.beforeEach(async (to, from, next) => {
    let path = to.fullPath
    //匹配到了product
    if (path.search("product") > 0) {
        //查询是否有此product
        let id = path.substring(9)
        let url = `http://localhost:3000/itemShow?id=${id}`
        let data = await fetch(url).then(response => response.json())
            .then(data => data);

        //没有此product
        if (data.length == 0) {
            next('/404')
        } else {
            next()
        }
    } else if (path.search("purchase") > 0) {
        //查询是否有此product
        let id = path.substring(10)
        let url = `http://localhost:3000/itemShow?id=${id}`
        let data = await fetch(url).then(response => response.json())
            .then(data => data);

        //没有此product
        if (data.length == 0) {
            next('/404')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router