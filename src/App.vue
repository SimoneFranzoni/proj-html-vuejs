<template>
  <div>
    <Header />
    <UpperMain />
    <GiantBtn />
    <LowerMain />
    <GiantBtn />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import UpperMain from './components/UpperMain.vue';
import GiantBtn from './components/GiantBtn.vue';
import LowerMain from './components/LowerMain.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    UpperMain,
    GiantBtn,
    LowerMain,
    Footer
  }
}
</script>

<style lang="scss">
  
  @import './assets/style/general.scss';

</style>
