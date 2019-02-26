// https://vuex.vuejs.org/en/mutations.html
import { set, toggle } from '@/utils/vuex'

export default {
  SET_DRAWER: set('drawer'),
  TOGGLE_DRAWER: toggle('drawer'),
  
  SHOW_ALERT: (state, payload) => {
    state.alert.value = true
    state.alert.type = payload.type ? payload.type : 'success'
    state.alert.timeout = payload.timeout ? payload.timeout : state.alert.defaultTimeou
    state.alert.message = payload.message
  },

  CLOSE_ALERT: (state) => {
    state.alert.value = false
    state.alert.type = null
    state.alert.message = null
  },

  SET_TOOLBAR_BACK_URL: (state, payload) => {
    state.toolbarBackUrl = payload
    
  },

  RESET_TOOLBAR_BACK_URL: (state) => {
    state.toolbarBackUrl = null
    window.console.log('resete')
  }
}