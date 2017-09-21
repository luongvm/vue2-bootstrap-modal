import Vue from 'vue/dist/vue.js'

var bootstrapModal = require('./Vue2BootstrapModal.vue')
require('bootstrap-loader')
new Vue({
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

    mounted() {}
});
