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
        <div class="live-dates" id="live-dates">
            <div class="container">
                <div 
                :v-for="item in concerts"
                class="box">
                    <div v-if="close"
                    class="concert-top">
                        <div 
                        @click="openMap"
                        class="plus"> + </div>
                        <div class="date">17/08/2020 Gem festival 2020 anakalia, georgia</div>
                    </div>
                    <div v-else>
                        <div class="concert-top">
                            <div 
                            @click="openMap"
                            class="minum"> - </div>
                            <div class="date">17/08/2020 Gem festival 2020 anakalia, georgia</div>
                        </div>
                        <div class="concert-bottom">
                            <div class="map"></div>
                            <div class="text">
                                <h2>Untold Stories</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, consequatur vel dolore blanditiis quia quas id molestias accusamus quo consectetur!</p>
                                <div class="btn btn-red">Book now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
  </div>
</template>

<script>
export default {
    name: 'LowerMain',
    data() {
        return{    
            
            close: true,

            concerts: [
                {
                    date: '17/08/2020',
                    name: 'Gem festival 2020 anakalia, georgia'
                },
                {
                    date: '24/09/2020',
                    name: 'Groovefest dominical republic'
                },
                {
                    date: '31/10/2020',
                    name: 'oasis festival 2020 marrakech, morocco'
                },
                {
                    date: '07/11/2020',
                    name: 'moga festival - essaouria. morocco'
                },
                {
                    date: '10/12/2020',
                    name: 'envision festival - uvita, costa rica'
                },
            ] 
        }
    },

    methods: {
        openMap(){
            if(this.close === true){
                this.close = false;
            } else {
                this.close = true;
            }
            console.log(this.open)
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/style/vars.scss';

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
          
    }

    main{
        background-color: $black;
        
        .live-dates{
            
            .container{
                padding: 0px 10% 30px 10%;

                .box{
                    background-color: $grey;
                    display: flex;
                    flex-direction: column;
                    
                    .concert-top{
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        padding: 10px 0;
                        margin: 10px 0;

                        .plus{
                            padding: 0 24px;
                            color: white;
                            cursor: pointer;
                        }

                        .minum{
                            margin: 0 16px;
                            padding: 0 9px;
                            color: white;
                            cursor: pointer;
                            background-color: $red;
                        }

                        .date{
                            color: $red;
                            text-transform: uppercase;
                        }
                    }

                    .concert-bottom{  
                        padding: 0 20px 20px 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;

                        .map{
                            width: 30%;
                            height: 200px;
                            background-image: url("../assets/img/mappa.png");
                            background-position: center;
                            background-size: cover;
                        }

                        .text{
                            padding: 20px 20px 0 50px;
                            height: 200px;
                            width: 70%;
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            
                            h2{
                                font-size: 16px;
                                font-weight: 400;
                            }

                            p{
                                font-size: 15px;
                            }

                            .btn{
                                width: 150px;
                                
                            }
                        }
                    }
                }                
            }
        }
    }
</style>