import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    setuserid(context, userId) {
        context.commit("SETUSERID", userId)
    },
    setusername(context, userName) {
        context.commit("SETUSERNAME", userName)
    },
    setcartlist(context, cartlist) {
        context.commit("SETCARTLIST", cartlist)
    },
    setorderlist(context, orderlist) {
        context.commit("SETORDERLIST", orderlist)
    },
    clear(context) {
        context.commit("CLEAR")
    },
    clearcart(context) {
        context.commit("CLEARCART")
    },
    clearorder(context) {
        context.commit("CLEARORDER")
    },
    setcartgoods(context, cartgoods) {
        context.commit("SETCARTGOODS", cartgoods)
    }
}

const mutations = {
    SETUSERID(state, userId) {
        state.userId = userId
    },
    SETUSERNAME(state, userName) {
        state.userName = userName
    },
    SETCARTLIST(state, cartlist) {
        state.cartList = cartlist
    },
    SETORDERLIST(state, orderlist) {
        state.orderList = orderlist
    },
    SETCARTGOODS(state, cartgoods) {
        state.cartGoods = cartgoods
    },
    CLEAR(state) {
        state.userId = "",
            state.userName = "",
            state.cartList = [],
            state.orderList = []
    },
    CLEARCART(state) {
        state.cartList = []
    },
    CLEARORDER(state) {
        state.orderList = []
    }
}

const state = {
    userId: "",
    userName: "",
    cartList: [],
    cartGoods: [],
    orderList: [],
}

const getters = {
    cartAmount: state => state.cartList.length,
    cartTotalAmount: state => state.cartList.reduce((total, current, index) => total + current.price * state.cartGoods[index], 0),
    cartTotalItems: state => state.cartGoods.reduce((total, current) => total + current, 0),
    totalChosen: state => state.cartGoods.reduce((total, current, index) => total + current * state.orderList[index])
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})