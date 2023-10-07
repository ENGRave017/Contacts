// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// FONT AWESOME ICONS
// import "./node_modules/@fortawesome/fontawesome-free/css/all.css";

// BOOTSTRAP CSS, JS
// import "./node_modules/bootstrap/dist/css/bootstrap.css";
// import "./node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "./styles.css"; // main css file

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
