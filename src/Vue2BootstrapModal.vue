<style>

.background-darken {
    background: rgba(0, 0, 0, 0.3);
}

</style>

<template>

<div ref="modal" class="modal fade background-darken" tabindex="-1" role="dialog" :class="{in:isOpen,show:isShow}" @click.self="close()" @keyup.esc="close()">
    <div :class="['modal-dialog', {'modal-lg': largeSize}]" role="document">
        <div class="modal-content">
            <div v-if="needHeader" class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">
                <slot name="title">
                    Modal
                </slot>
            </h4>
            </div>
            <div class="modal-body">
                <slot name="body">
                    Body
                </slot>
            </div>
            <div v-if="needFooter" class="modal-footer">
                <slot name="footer">

                </slot>
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->

</template>

<script>

//require('bootstrap-loader')
export default {
    props: {
      needHeader: {
        type: Boolean,
        default: true
      },
      needFooter: {
        type: Boolean,
        default: true
      },
      largeSize: {
          type: Boolean,
          default: false
      }
    },
    data() {
        return {
            isOpen: false,
            isShow: false
        }
    },
    methods: {
        open() {

                this.isShow = true
                this.$nextTick(function() {
                    this.isOpen = true
                    this.$refs.modal.focus()
                })

            },
            close() {
                this.isOpen = false
                this.$nextTick(function() {
                    setTimeout(() => {
                        this.isShow = false
                    }, 500)
                })
            }
    }
}

</script>
