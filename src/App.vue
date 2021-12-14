<template>
  <div>
    <Header />
    <UpperMain />
    <GiantBtn />
    <LowerMain />
    <GiantBtn />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import UpperMain from './components/UpperMain.vue';
import GiantBtn from './components/GiantBtn.vue';
import LowerMain from './components/LowerMain.vue';

export default {
  name: 'App',
  components: {
    Header,
    UpperMain,
    GiantBtn,
    LowerMain,
  }
}
</script>

<style lang="scss">
  
  @import './assets/style/general.scss';

</style>
