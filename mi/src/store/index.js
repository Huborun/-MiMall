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
    setusercart(context, usercart) {
        context.commit("SETUSERCART", usercart)
    },
    setuserorder(context, order) {
        context.commit("SETUSERORDER", order)
    },
    setuserddress(context, address) {
        context.commit("SETUSERADDRESS", address)
    },
    setuserchosen(context, chosen) {
        context.commit("SETUSERCHOSEN", chosen)
    },
    clear(context) {
        context.commit("CLEAR")
    }
}

const mutations = {
    SETUSERID(state, userId) {
        state.userId = userId
    },
    SETUSERNAME(state, userName) {
        state.userName = userName
    },
    SETUSERCART(state, usercart) {
        state.userCart = usercart
    },
    SETUSERORDER(state, order) {
        state.userOrder = order
    },
    SETUSERCHOSEN(state, chosen) {
        state.userChosen = chosen
    },
    CLEAR(state) {
        state.userId = ""
        state.userName = ""
        state.userCart = []
        state.userOrder = []
        state.userChosen = []
    }
}

const state = {
    userId: "",
    userName: "",
    userCart: [],
    userOrder: [],
    userChosen: [],
}

const getters = {
    //cartAmount：购物车中有几件商品
    cartAmount: state => {
        if (state.userCart.length == 0) {
            return 0
        } else {
            return state.userCart.reduce((total, current) => total + current.amount, 0)
        }
    },
    // cartTotalPrice: state => state.cartList.reduce((total, current, index) => total + current.price * state.cartGoods[index], 0),
    cartTotalPrice: state => {
        if (state.userCart.length == 0) {
            return 0
        } else {
            return state.userCart.reduce((total, current) => total + current.price * current.amount, 0)
        }
    },
    // cartTotalItems: state => state.cartGoods.reduce((total, current) => total + current, 0),
    totalChosen: state => state.userChosen.reduce((total, current) => total + current.amount, 0),
    totalChosenPrice: state => {
        if (state.userChosen.length == 0) {
            return 0
        } else {
            return state.userChosen.reduce((total, current) => total + current.price * current.amount, 0)
        }
    },

}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})