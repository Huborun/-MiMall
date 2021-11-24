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
    clear(context){
        context.commit("CLEAR")
    },
    clearcart(context){
        context.commit("CLEARCART")
    },
    clearorder(context){
        context.commit("CLEARORDER")
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
    CLEAR(state){
        state.userId = "",
        state.userName = "",
        state.cartList = [],
        state.orderList = []
    },
    CLEARCART(state){
        state.cartList = []
    },
    CLEARORDER(state){
        state.orderList = []
    }
}

const state = {
    userId: "",
    userName: "",
    cartList: [],
    orderList: []
}

export default new Vuex.Store({
    actions,
    mutations,
    state
})