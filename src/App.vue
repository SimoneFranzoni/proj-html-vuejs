<template>
  <div>
    
    <Header />
    <UpperMain />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import UpperMain from './components/UpperMain.vue'

export default {
  name: 'App',
  components: {
    Header,
    UpperMain,
  }
}
</script>

<style lang="scss">
  
  @import './assets/style/general.scss';

</style>
