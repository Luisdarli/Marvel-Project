<template>
    <body>
        <div>
        <top />
        </div>
        <div>
        <mid />
        </div>
        <div class="align">
        </div>
        <div>
        <bot />
        </div>
    </body>
</template>

<script>
import ncheader from '../components/top/Top'
import ncsection from '../components/Hero/Hero'
import ncfooter from '../components/Footer/Footer'



export default {
    name: 'Home',
    components:{
        "top": ncheader,
        "mid": ncsection,
        "bot": ncfooter,
    },
}
</script>

<style>
 .align{
    clear:both;
 }
</style>
