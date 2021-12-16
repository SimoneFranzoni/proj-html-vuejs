<template>
    <div>
        <div v-if="close"
            class="open"
            @click="toggleActive">
            <i class="fas fa-bars"></i>
        </div>
        <div v-else 
            class="hamburger-menu">
            <div class="upper-menu">
                <img src="../assets/img/avada-music-logo-retina.png" alt=""> 
                <div class="close"
                @click="toggleActive">
                    <i class="fas fa-times"></i>
                </div>
            </div>
            <ul>
                <li 
                v-for="(li,index) in navbar_li"
                :key="index">
                    <a href="">{{navbar_li[index]}}</a>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Burger',
        
        data(){
            return{
                close: true,

                navbar_li:['Home', 'Meet The Band', 'Live Dates', 'Latest News', 'Albums', 'Fans'],
            }
        },

        methods: {
            toggleActive(){
                if(this.close === true){
                    this.close = false;
                } else {
                    this.close = true;
                }
            }
        }
    }
    
</script>

<style scoped lang="scss">
    
    @import '../assets/style/vars.scss';

    .hamburger-menu {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20vh 0;
        width: 100%;
        height: 100vh;
        background: $red;

        ul {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            
            li a {
                color: #e6e6e6;
                text-decoration: none;
                font-size: 25px;
                font-weight: lighter;

                &:hover{
                    color: white;
                    font-weight: bold;
                }
            }
        }
    }

    .upper-menu{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      position: absolute;
      top: 0%;
      padding: 20px 40px;

      img{
        width: 30%;
      }

      .close {
        color: white;
        font-size: 40px;
        text-decoration: none;
        cursor: pointer;
      }

    }

    .open{
        cursor: pointer;
        font-size: 40px;
    }

</style>