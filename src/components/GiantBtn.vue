<template>
    <a href="">
        <h2>{{title}}</h2>
    </a>
</template>

<script>
export default {
    name: 'GiantBtn',
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/style/vars.scss';

    a{
        width: 100%;
        height: 100px;
        background-color: $red;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;

        h2{
            font-size: 20px;
        }

        &:hover{
            background-color: white;
            h2{
                color: $black;
            }
        }    
    }
</style>