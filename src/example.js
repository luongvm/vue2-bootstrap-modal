import Vue from 'vue/dist/vue.js'

var bootstrapModal = require('./Vue2BootstrapModal.vue')

new Vue({
    el: '#app',
    components: {
        'bootstrap-modal': bootstrapModal
    },
    methods:{
        openTheModal(){
            this.$refs.theModal.open()
        }
    },
    mounted(){
    
    }
});
