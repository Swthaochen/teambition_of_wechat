import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      userInfo: ''
    },
    mutations: {
        commitInfo:(state,val)=>{
            state.userInfo = val
        },
        getUserDetail:(state,val) => {
            state.userInfo = val
        }
    }
});
  