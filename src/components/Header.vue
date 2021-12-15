<template>
  <header>
    <div class="upper-header">
      <img src="../assets/img/avada-music-logo-retina.png" alt="">
      <div><i class="fas fa-bars"></i></div>
    </div>
    <div id="title-container">
      <h1>Untold Stories</h1>
      <h2>There is an untold story behind every favourite song</h2>
      <div class="d-flex">
        <div class="btn btn-red">LATEST ALBUM</div>
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

    .upper-header{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: absolute;
      padding: 20px 40px;

      img{
        width: 30%;
      }

      i{
        font-size: 30px;
      }

    }

    .btn{
      color: white;
      border: 1px solid white;
      border-radius: 1px;
      margin: 0 10px;
      padding: 10px 20px;
      display: block;

      &:hover{
        background-color: white;
        color: black;
      }
    }

    .btn-red{
      background-color: #ea4a56;
      border: none;
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
  }

 

</style>
