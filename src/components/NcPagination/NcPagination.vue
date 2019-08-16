<template>
    <div>
        <ul>
            <li>{{totais}}</li>
        </ul>
    </div>
</template>

<script>
export default {

    name: 'NcPagination',
    data(){
        return{
            totais: [],
        }
    },
    props:{
        total: {type: Number},
        limit: {type: Number},
        offset: {type: Number}
    }, 

    beforeCreate() {
        this.totais.push(this.total);
        console.log(this.totais);
    },
    
}
</script>

<style>

</style>
