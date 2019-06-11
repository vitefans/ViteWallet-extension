<template>
    <div id="app">
        <router-view />
        <notice-list></notice-list>
    </div>
</template>

<script>
import noticeList from 'components/noticeList.vue';

export default {
    components: { noticeList },
    mounted() {
        // this.$store.commit('setLang', this.$i18n.locale);
        // this.$store.dispatch('startLoopBalance');
    },
    watch: {
        active() {
            // this.$offKeyDown();
        }
    }
};
</script>

<style>
#app {
    height: 100%;
}
</style>
