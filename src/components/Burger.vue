<template>
    <div>
        <div v-if="close"
            class="open"
            @click="toggleActive">
            <i class="fas fa-bars"></i>
        </div>
        <div v-else 
            class="hamburger-menu">
            <img src="../assets/img/avada-music-logo-retina.png" alt=""> 
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Meet The Band</a>
                </li>
                <li>
                    <a href="#">Live Dates</a>
                </li>
                <li>
                    <a href="#">Latest News</a>
                </li>
                <li>
                    <a href="#">Albums</a>
                </li>
                <li>
                    <a href="#">Fans</a>
                </li>
            </ul>
            <div class="close"
            @click="toggleActive">
                <i class="fas fa-times"></i>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Burger',
        
        data(){
            return{
                close: true,
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
    
    .hamburger-menu {
        position: absolute;
        top: 0;
        left: 0;
        padding: 20vh 0;
        width: 100vh;
        height: 100vh;
        min-width: 100vw;
        min-height: 100vh;
        background: #ea4a56;

        img{
            position: absolute;
            width: 30%;
            top: 0%;
            left: 0%;
            padding: 20px 40px;
        }

        ul {
            display: flex;
            height: 100%;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            
            li a {
                color: rgb(209, 205, 205);
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

    .close {
        display: block;
        position: absolute;
        right: 0;
        top: 0;
        color: white;
        font-size: 35px;
        text-decoration: none;
    }


</style>