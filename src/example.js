import Vue from 'vue/dist/vue.js'
import bootstrapModal from './Vue2BootstrapModal.vue'

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

    mounted() { }
});
