<template>
  <div>
      <header class="title">
        <h2>Music Is Life</h2>
        <div class="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A autem alias provident ipsum, quaerat perspiciatis recusandae harum! Blanditiis, tempore placeat.</p>
      </header>

      <main>  
        <section class="title">
          <h2>Latest Band News</h2>
          <div class="line"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A autem alias provident ipsum, quaerat perspiciatis recusandae harum! Blanditiis, tempore placeat.</p>
        </section>
        
        <section class="articles">
          <div class="container d-flex">
            <div class="left-column">
              <div class="box orizontal-box">
                <div class="inner-box">
                  <div class="bg" id="bg1"></div>
                  <div class="text-box">
                    <h3>Tecnology and music</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.</p>
                  </div>
                </div>
              </div>
              <div class="box vertical-box">
                <div class="inner-box">
                  <div class="bg" id="bg2"></div>
                  <div class="text-box">
                    <h3>Tecnology and music</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.</p>
                  </div>
                </div>
              </div>
              <div class="box orizontal-box">
                <div class="inner-box">
                  <div class="bg" id="bg4"></div>
                  <div class="text-box">
                    <h3>Tecnology and music</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.</p>
                  </div>
                </div>
              </div>
            </div>
              
            <div class="right-column">
              <div class="box vertical-box">
                <div class="inner-box">
                  <div class="bg" id="bg5"></div>
                  <div class="text-box">
                    <h3>Tecnology and music</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.</p>
                  </div>
                </div>
              </div>
              <div class="box vertical-box">
                <div class="inner-box">
                  <div class="bg" id="bg6"></div>
                  <div class="text-box">
                    <h3>Tecnology and music</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.</p>
                  </div>
                </div>
              </div>  
            </div>
          </div>
        </section>
      </main>
  </div>
</template>

<script>
export default {
    name: 'UpperMain',
}
</script>

<style scoped lang="scss">

  header{
    background-color: #323844;
  }

  main{
    background-color: #252a33;
    color: white;
    height: 1370px;

    .container{
      padding: 0 5%;
      width: 100%;
      height: 1000px;

      .left-column{
        width: 66%;
      }

      .right-column{
        width: 33%;
      }
    }

    .box{
    height: 30%;
    margin: 5px;
    padding: 5px;

      .inner-box{
        background-color: #323844;
        height: 100%;
      }
    }

    .orizontal-box{
      height: 25%;
      width: 100%;
      
      .bg{
        width: 100%;
        height: 60%;
        background-position: center;
        background-size: cover;
      }
    }

    .vertical-box{
      height: 50.6%;
      width: 100%;

      .bg{
        width: 100%;
        height: 80%;
        background-position: center;
        background-size: cover;
      }
    }  

    .text-box{
      padding: 18px 15px ;
      
      h3{
        color: red;
        font-size: 20px;
      }

      p{
        font-size: 12px;
      }  
    }
    
  }
  
  
  #bg1{
    background-image: url("../assets/img/blog_music_techo-800x400.jpg");
  }

  #bg2{
    background-image: url("../assets/img/blog-post3-600x900.jpg");
  }
 
  #bg3{
    background-image: url("../assets/img/blog-post3-600x900.jpg");
  }

  #bg4{
    background-image: url("../assets/img/blog-post3-600x900.jpg");
  }

  #bg5{
    background-image: url("../assets/img/blog-post3-600x900.jpg");
  }

  #bg6{
    background-image: url("../assets/img/blog-post3-600x900.jpg");
  }

</style>