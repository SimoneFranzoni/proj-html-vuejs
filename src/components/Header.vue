<template>
  <header>
    <img src="../assets/img/avada-music-logo-retina.png" alt="">
    <div><i class="fas fa-bars"></i></div>
    <div id="title-container">
      <h1>Untold Stories</h1>
      <p>There is an untold story behind every favourite song</p>
      <div>
        <div class="btn">LATEST ALBUM</div>
        <div class="btn">LIVE DATES</div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',

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

    img{
      position: absolute;
      width: 30%;
      padding: 20px 40px;
    }

    i{
      position: absolute;
      top: 0%;
      right: 0%;
      padding: 40px 80px;
      font-size: 30px;
    }

    .btn{
      color: white;
      border: 1px solid white;
    }
  }

  #title-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

 

</style>
