<template>
    <form autocomplete="off">
        <input class="__btn __btn_input" ref="name" v-model="name" type='text' autofocus
               :placeholder="$t('accountName')" />

        <input class="__btn __btn_input" ref="pass1" v-model="pass1" type='password'
               :placeholder="$t('startCreate.input')" />

        <input class="__btn __btn_input" ref="pass2" v-model="pass2" type='password'
               :placeholder="$t('startCreate.again')" />
    </form>
</template>

<script>
export default {
    props: {
        submit: {
            type: Function,
            default: () => {}
        }
    },
    mounted() {
        this.focusName();
    },
    data() {
        return {
            name: '',
            pass1: '',
            pass2: ''
        };
    },
    methods: {
        focusName() {
            this.$nextTick(() => {
                this.$refs.name && this.$refs.name.focus();
            });
        },
        focusPass1() {
            this.$nextTick(() => {
                this.$refs.pass1 && this.$refs.pass1.focus();
            });
        },
        focusPass2() {
            this.$nextTick(() => {
                this.$refs.pass2 && this.$refs.pass2.focus();
            });
        },
        valid() {
            // [NOTICE] Order fix
            // Name not empty
            if (!this.name) {
                this.$toast(this.$t('startCreate.hint.nameInput'));
                this.focusName();
                return;
            }

            if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/g.test(this.name)) {
                this.$toast(this.$t('startCreate.hint.name'));
                this.focusName();

                return;
            }

            if (this.name.length > 32) {
                this.$toast(this.$t('startCreate.hint.nameLong'));
                this.focusName();

                return;
            }

            // Not empty
            if (!this.pass1) {
                this.$toast(this.$t('hint.pwEmpty'));
                this.focusPass1();

                return;
            }

            // Chinese
            if (/[\u4e00-\u9fa5]|\s+/g.test(this.pass1)) {
                this.$toast(this.$t('startCreate.hint.pwFormat'));
                this.focusPass1();

                return;
            }

            // Length limit
            if (this.pass1.length < 1 || this.pass1.length > 32) {
                this.$toast(this.$t('startCreate.hint.long'));
                this.focusPass1();

                return;
            }

            // Not empty
            if (!this.pass2) {
                this.$toast(this.$t('startCreate.again'));
                this.focusPass2();

                return;
            }

            // Same password
            if (this.pass1 !== this.pass2) {
                this.$toast(this.$t('startCreate.hint.consistency'));
                this.focusPass2();

                return;
            }

            // Ok
            this.submit && this.submit(this.name, this.pass1);
        }
    }
};
</script>

<style lang="scss" scoped>
.__btn {
    margin-top: 20px;
    display: block;
    box-sizing: border-box;
    width: 100%;
}
</style>
