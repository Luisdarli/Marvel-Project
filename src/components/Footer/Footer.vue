<template>
    <div id="main-footer">
       <ul>
           <li>Facebook</li>
           <li>Instagram</li>
           <li>Twitter</li>
       </ul>

    </div>
</template>

<script>
export default {

}
</script>

<style>
    #main-footer{
        display: block;
        position: fixed;
        bottom: 0;
        background-color: red;
        height: 8%;
        width: 100%;
    }

    #main-footer li{
        color: white;
        text-decoration: none;
        list-style: none;
        display: inline-block;
        margin-left: 30px;
        cursor: pointer;
        
    }

    #main-footer ul{
        margin-top: 30px;
    }
</style>
