
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */



require('./bootstrap'); 
window.Vue = require('vue'); 
Vue.use(require('vue-resource')); 
Vue.http.headers.common['X-CSRF-TOKEN'] = document.getElementById('csrf_token').value;

Vue.component('notas', require('./components/Notas.vue'));