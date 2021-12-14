<template>
  <footer>
        <section class="footer-top">
            <img src="..\assets\img\avada-music-logo.png" alt="">
            <div>
                <a href="">Home</a>
                <a href="">Meet The Band</a>
                <a href="">Live Dates</a>
                <a href="">Latest News</a>
                <a href="">Album</a>
                <a href="">Fans</a>
            </div>
        </section>
        <section class="footer-bottom">
            <div class="menù">
                <div>@Copyright 2012 - 2020</div>
                <div>|</div>
                <div>AVADA THEME BY THEMEFUSION</div>
                <div>|</div>
                <div>ALL RIGHT RESERVED</div>
                <div>|</div>
                <div>POWERED BY WORDPRESS</div>
            </div>
            <div class="social">
                <a href="" class="box">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="" class="box">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="" class="box">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href="" class="box">
                    <i class="fab fa-youtube"></i>
                </a>
            </div>
        </section>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

    .footer-top{
        background-color: #323844;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;

        img{
            width: 150px;
        }

        a{
            margin-left: 15px;
            color: #7d7b8d;
            text-decoration: none;

            &:hover{
                color: white;
            }
        }
    }

    .footer-bottom{
        background-color: #252a33;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
        
        .menù{
            color: #7d7b8d;
            display: flex;
            font-size: 10px;
            div{
                padding-right: 10px;
            }
        }

        .social{
            display: flex;
            
            .box{
                background-color: #323844;
                margin: 0 5px;
                width: 40px;
                height: 40px;
                border-radius: 5px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-decoration: none;

                i{
                    color: #7d7b8d;
                }

                &:hover{
                    i{
                        color: white;
                    }
                }
            }
        }

    }

</style>