import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


const menuHamb=document.querySelector('.open');
const CloseBtn=document.querySelector('.close')

menuHamb.addEventListener('click', function(){
    const menuMoblie = document.querySelector('.hamburger-menu');
    menuMoblie.classList.add('active');
});

CloseBtn.addEventListener('click', function(){
    const menuMobile = document.querySelector('.hamburger-menu');
    menuMobile.classList.remove('active');
}); 