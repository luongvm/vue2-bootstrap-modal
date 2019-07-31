import Vue from 'vue/dist/vue.js'

const bootstrapModal = require('./Vue2BootstrapModal.vue')
require('bootstrap-loader')
console.log(bootstrapModal)
const vueJS = new Vue({
    el: '#app',
    components: {
        'bootstrap-modal': bootstrapModal
    },
    methods: {
        openTheModal() {
            this.$refs.theModal.open()
        },
        myOpenFunc() {
            console.log('hello')
        },
    },

    mounted() { }
});
