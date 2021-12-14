<template>
    <a href="">
        <h2>View all latest news</h2>
    </a>
</template>

<script>
export default {
    name: 'GiantBtn'
}
</script>

<style lang="scss" scoped>
    a{
        width: 100%;
        height: 100px;
        background-color: #ea4a56;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;

        h2{
            font-size: 20px;
        }
    }

    a:hover{
        background-color: white;
        h2{
            color: black;
        }
    }
</style>