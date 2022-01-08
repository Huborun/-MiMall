import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Login from './pages/login'
import Xiaomi11Ultra from "./pages/phones/Xiaomi11Ultra"
import Note11Pro from "./pages/phones/Note11Pro"
import MIX4 from "./pages/phones/MIX4"
import MIXFOLD from "./pages/phones/MIXFOLD"
import RedmiK40 from "./pages/phones/RedmiK40"
import Purchase from "./pages/purchase"
import error from "./pages/404"
import Success1 from "./pages/success1"
import Success2 from "./pages/success2"
import Cart from "./pages/cart"
import Check from "./pages/check"
import Order from "./pages/order"
import OrderShowTotal from "./components/order/OrderShowTotal"
import OrderShowDetail from "./components/order/OrderShowDetail"

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
                    meta:{
                        title: '小米商城'
                    }
                },
                {
                    path: '/product/2',
                    name: 'Xiaomi11Ultra',
                    component: Xiaomi11Ultra,
                    meta:{
                        title: 'Xiaomi 11 Ultra'
                    }
                },
                {
                    path: '/product/1',
                    name: 'Note11Pro',
                    component: Note11Pro,
                    meta:{
                        title: 'Redmi Note 11 Pro'
                    }
                },
                {
                    path: '/product/4',
                    name: 'MIX4',
                    component: MIX4,
                    meta:{
                        title: 'Xiaomi MIX 4'
                    }
                },
                {
                    path: '/product/5',
                    name: 'MIXFOLD',
                    component: MIXFOLD,
                    meta:{
                        title: 'Xiaomi MIX FOLD'
                    }
                },
                {
                    path: '/product/3',
                    name: 'K40',
                    component: RedmiK40,
                    meta:{
                        title: 'Redmi K40'
                    }
                },
                {
                    path: "/purchase/:id",
                    name: "purchase",
                    component: Purchase,
                    meta:{
                        title: '立即购买-小米商城'
                    }
                },
                {
                    path: "/order",
                    name: "order",
                    component: Order,
                    children: [
                        {
                            path: 'total/:id',
                            component: OrderShowTotal,
                            meta:{
                                title: '我的订单-小米商城'
                            }
                        },
                        {
                            path:'detail/:id',
                            component: OrderShowDetail,
                            meta:{
                                title: '订单详情'
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta:{
                title: '小米账号-登录'
            }
        },
        {
            path: "/cartSuccess",
            name: "cartSuccess",
            component: Success1,
            meta:{
                title: '成功加入购物车'
            }
        },
        {
            path: "/orderSuccess",
            name: "orderSuccess",
            component: Success2,
            meta:{
                title: '支付订单'
            }
        },
        {
            path: "/cart",
            component: Cart,
            meta:{
                title: '我的购物车-小米商城'
            }
        },
        {
            path: "/check",
            component: Check,
            meta:{
                title: '填写订单信息'
            }
        },
        {
            path: "/404",
            name: 404,
            component: error,
            meta:{
                title: '404'
            }
        },
        {
            path: "*",
            redirect: "/404",
            meta:{
                title: '404'
            }
        }

    ]
})

export default router