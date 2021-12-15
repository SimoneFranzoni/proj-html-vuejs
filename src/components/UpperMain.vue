<template>
  <div>
      <header>
        <div class="red-line"></div>
        <div class="title">
          <h2>Music Is Life</h2>
          <div class="line"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A autem alias provident ipsum, quaerat perspiciatis recusandae harum! Blanditiis, tempore placeat.</p>
        </div>
      </header>

      <main>  
        <section class="title" id="latest-band-news">
          <h2>Latest Band News</h2>
          <div class="line"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A autem alias provident ipsum, quaerat perspiciatis recusandae harum! Blanditiis, tempore placeat.</p>
        </section>
        
        <section class="articles">
          <div class="container d-flex">
            <div class="left-column">
              <div class="box orizontal-box">
                <div class="inner-box">
                  <a href="">
                    <div class="bg" id="bg-orizontal-0">
                      <div class="bg-overlay">
                        <div>{{orizontal_articles.title[0]}}</div>  
                      </div>
                    </div>
                    <div class="text-box">
                      <h3>{{orizontal_articles.title[0]}}</h3>
                      <p>{{orizontal_articles.text[0]}}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div class="box vertical-box d-flex">
                <div class="vertical-column ">
                  <div class="inner-box sf-pr">
                    <a href="">
                      <div class="bg" id="bg-vertical-0">
                        <div class="bg-overlay">
                          <div>{{vertical_articles.title[0]}}</div>  
                        </div>
                      </div>
                      <div class="text-box">
                        <h3>{{vertical_articles.title[0]}}</h3>
                        <p>{{vertical_articles.text[0]}}</p>
                      </div>
                    </a> 
                  </div>
                </div>
                <div class="vertical-column ">
                  <div class="inner-box sf-pl">
                    <a href="">
                      <div class="bg" id="bg-vertical-1">
                        <div class="bg-overlay">
                          <div>{{vertical_articles.title[1]}}</div>  
                        </div>
                      </div>
                      <div class="text-box">
                        <h3>{{vertical_articles.title[1]}}</h3>
                        <p>{{vertical_articles.text[1]}}</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="box orizontal-box">
                <div class="inner-box">
                  <a href="">
                    <div class="bg" id="bg-orizontal-1">
                      <div class="bg-overlay">
                        <div>{{orizontal_articles.title[1]}}</div>  
                      </div>
                    </div>
                    <div class="text-box">
                      <h3>{{orizontal_articles.title[1]}}</h3>
                      <p>{{orizontal_articles.text[1]}}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
              
            <div class="right-column">
              <div class="box vertical-box">
                <div class="inner-box">
                  <a href="">
                    <div class="bg" id="bg-vertical-2">
                      <div class="bg-overlay">
                        <div>{{vertical_articles.title[2]}}</div>  
                      </div>
                    </div>
                    <div class="text-box">
                      <h3>{{vertical_articles.title[2]}}</h3>
                      <p>{{vertical_articles.text[2]}}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div class="box vertical-box">
                <div class="inner-box">
                  <a href="">
                    <div class="bg" id="bg-vertical-3">
                      <div class="bg-overlay">
                        <div>{{vertical_articles.title[3]}}</div>  
                      </div>
                    </div>
                    <div class="text-box">
                      <h3>{{vertical_articles.title[3]}}</h3>
                      <p>{{vertical_articles.text[3]}}</p>
                    </div>
                  </a>
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
    data() {
      return {
        orizontal_articles: {
          title:['Tecnology and music', 'The flavor of rock'],
          text:[
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
          ]
        },
        vertical_articles:{
          title:['While my guitar gently weeps', 'It just sound better', 'Taking it back to the old school', 'Sharing the stage with a legend'],
          text:[
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, optio.',
          ]
        }
      }
    }
}
</script>

<style scoped lang="scss">

  header{
    background-color: #323844;
    
    .red-line{
      width: 20%;
      margin: 0 40%;
      height: 10px;
      background-color: #ea4a56;
    }
  }

  main{
    background-color: #252a33;
    color: white;
    height: 1600px;

    .container{
      padding: 0 5%;
      width: 100%;
      height: 1200px;

      .left-column{
        width: 66%;
      }

      .right-column{
        width: 33%;
      }
    }

    .box{
      margin: 5px;
      padding: 5px;

      .inner-box{
        background-color: #323844;
        height: 100%;

        a{
          text-decoration: none;
        }
      }
    }

    .orizontal-box{
      height: 25%;
      width: 100%;
      
      .bg{
        width: 100%;
        height: 65%;
        background-position: center;
        background-position-y: - 50px;
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
        color: #ea4a56;
        font-size: 20px;
        font-weight: bold;
      }

      p{
        font-size: 14px;
        
      }  
    }

    .bg-overlay{
      width: 100%;
      height: 100%;
      background-color: #ea4a55b7;
      color: white;
      font-size: 18px;
      justify-content: center;
      align-items: center;
      display: none;
    }

    .inner-box:hover{

      .bg-overlay{
        display: flex;
      }

    }
    
  }

  .vertical-column{
    width: 50%;

    .sf-pr{
      margin-right: 5px;
    }

    .sf-pl{
      margin-left: 5px;
    }
  }
  
  #bg-orizontal-0{
    background-image: url("../assets/img/blog_music_techo.jpg");
  }

  #bg-orizontal-1{
    background-image: url("../assets/img/blog_flavor_rock.jpg");
  }

  #bg-vertical-0{
    background-image: url("../assets/img/blog-post3.jpg");
  }
 
  #bg-vertical-1{
    background-image: url("../assets/img/blog-post4-600x900.jpg");
  }

  #bg-vertical-2{
    background-image: url("../assets/img/blog-post1.jpg");
  }

  #bg-vertical-3{
    background-image: url("../assets/img/blog-post2.jpg");
  }

</style>