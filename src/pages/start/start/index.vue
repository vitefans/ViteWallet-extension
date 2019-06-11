<template>
    <div class="start-wrapper">
        <div class="__title">{{$t('createAcc')}}</div>
        <router-link class="__btn __btn_all_in" :to="{name: 'create'}">{{ $t('start') }}</router-link>
        <router-link class="__btn __btn_border _top" :to="{name: 'restore'}">{{ $t('mnemonic.restore') }}</router-link>
        <router-link class="__btn_link _top" :to="{name: 'import'}">{{ $t('btn.imported') }}</router-link>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.start-wrapper {
    padding-top: 100px;
}

._top {
    margin-top: 20px;
}
</style>
