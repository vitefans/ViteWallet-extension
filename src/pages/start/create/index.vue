<template>
    <div class="create-account-wrapper">
        <div class="__title">{{ $t('settingAcc')}}</div>

        <create ref="createDom" :submit="createAccount"></create>

        <div @click="toogleAgree" class="agreement __pointer" :class="{'active': isAgree}">
            {{ $t('startCreate.agreementPre') }}
            <a href="privacy.html" class="link">{{ $t('startCreate.agreement') }}</a>
        </div>

        <div class="__btn_list">
            <button class="__btn __btn_border __pointer" type="button" @click="back" >{{ $t('btn.back') }}</button>
            <button class="__btn __btn_all_in __pointer" type="button" :disabled="!isAgree" @click="valid">
                {{ $t('btn.next')}}
            </button>
        </div>

        <process class="process" active="createAccount"></process>
    </div>
</template>

<script>
import create from '../createForm.vue';
import process from 'components/process';

export default {
    components: { create, process },
    mounted() {
        this.$onKeyDown(13, () => {
            this.valid();
        });
    },
    data() {
        return {
            name: '',
            pass1: '',
            pass2: '',
            inputItem: '',
            isAgree: false
        };
    },
    methods: {
        valid() {
            if (!this.isAgree) {
                return;
            }
            this.$refs.createDom.valid();
        },
        back() {
            this.$router.go(-1);
        },
        createAccount(name, pass) {
            this.$wallet.create(name, pass);
            this.$router.push({ name: 'record' });
        },
        toogleAgree() {
            this.isAgree = !this.isAgree;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/vars.scss";

.agreement {
    text-align: left;
    margin-top: 20px;
    font-size: 14px;
    font-family: $font-normal, arial, sans-serif;
    font-weight: 400;
    color: rgba(255,255,255,1);
    line-height: 18px;
    .link {
        text-decoration: underline;
        color: inherit;
    }
    &.active {
        &::before {
            background: url('~assets/imgs/agree.svg');
            background-size: 100% 100%;
        }
    }
    &:before {
        display: inline-block;
        content: ' ';
        width: 18px;
        height: 18px;
        margin-bottom: -5px;
        margin-right: 6px;
        background: url('~assets/imgs/unagree.svg');
        background-size: 100% 100%;
    }
}

.__btn.__btn_all_in:disabled {
    background: rgba(191,191,191,1);
    color: #fff;
    cursor: none;
}

.__btn_list {
    margin-top: 20px;
}
</style>
