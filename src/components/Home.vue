<template>
  <header>
    <div class="upper-header">
      <img src="../assets/img/avada-music-logo-retina.png" alt="">         
      <Burger />
    </div>
    <div id="title-container">
      <h1>Untold Stories</h1>
      <h2>There is an untold story behind every favourite song</h2>
      <div class="d-flex">
        <a class="btn btn-red">LATEST ALBUM</a>
        <a class="btn" href="#live-dates" >LIVE DATES</a>
      </div>
    </div>
  </header>
</template>

<script>
import Burger from './Burger.vue'

export default {
  components: { Burger },
  name: 'Home',
}
</script>

<style scoped lang="scss">

  header{
    height: 100vh;
    width: 100%;
    background-image: url(../assets/img/home_slider.jpg);
    background-size: cover;
    background-position: center;
    color: white;

    .upper-header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      position: absolute;
      padding: 20px 40px;

      img{
        width: 30%;
      }

    }

    
  }

  #title-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 120px;
      font-weight: bolder;
    }
    
    h2{
      color: white;
      font-size: 20px;
      padding-bottom: 50px;
      font-style: italic;
      font-weight: lighter;
    }

    .btn{
      margin: 0 10px;
    }
  }

</style>
