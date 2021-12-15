<template>
  <div>
    <Home />
    <UpperMain />
    <GiantBtn title="view all latest news"/>
    <LowerMain />
    <GiantBtn title="view all live dates"/>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue';
import UpperMain from './components/UpperMain.vue';
import GiantBtn from './components/GiantBtn.vue';
import LowerMain from './components/LowerMain.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Home,
    UpperMain,
    GiantBtn,
    LowerMain,
    Footer
  }
}
</script>

<style lang="scss">
  
  @import './assets/style/general.scss';
  @import './assets/style/vars.scss';

</style>
