<template>
  <div>
      <div class="jumbotrone">
          <p>
              "I just listened to it and said to myself, "Man, i really love this album." Still, today, it just sounds so fresh. It sounds full of ideas. These guys knew what they were doing. They're good. And they're inventive. I haven't heard anything this year that's as inventive. I don't really expect to."
          </p>
          <a href=""><img src="..\assets\img\band_interview_play_icon.png" alt=""></a>
      </div>
      <main>
        <div class="title">
            <h2>Live Dates</h2>
            <div class="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A autem alias provident ipsum, quaerat perspiciatis recusandae harum! Blanditiis, tempore placeat.</p>
        </div>
        <div class="live-dates">
            <div class="container">
                <div class="box">
                    <div class="plus">+</div>
                    <div class="date">Ciaoooooooooooo</div>
                </div>
                
            </div>
        </div>
      </main>
  </div>
</template>

<script>
export default {
    name: 'LowerMain',
}
</script>

<style lang="scss" scoped>

    .jumbotrone{
        background-image: url('../assets/img/home-testimonial-parallax.jpg');
        width: 100%;
        height: 700px;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 30%;
        font-style: italic;

        p{
            color: white;
            font-size: 20px;
        }
        /*
        a{
            margin-top: 30px;
            background-color: #ea4a56;
            border-radius: 50px;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            
            i{
                color: white;
                text-decoration-line: none;
            }
        }
        */    
    }

    main{
        background-color: #252a33;
        
        .live-dates{
            
            .container{
                padding: 0px 15% 30px 15%;

                .box{
                    width: 100%;
                    background-color: #323844;
                    display: flex;
                    padding: 10px 0;
                    margin: 10px 0;

                    .plus{
                        padding: 0 25px;
                        color: white;
                    }

                    .date{
                        color: #ea4a56;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }
</style>