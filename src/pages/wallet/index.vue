<template>
    <div>
        <vite-menu :menu-list-click="go" active="wallet" :menuList="[{
            title: 'wallet',
            path: '/',
        }, {
            title: 'quota',
            path: '/quota',
        }, {
            title: 'sbp',
            path: '/sbp',
        }, {
            title: 'vote',
            path: '/vote',
        }, {
            title: 'transactions',
            path: '/tx',
        }]"></vite-menu>
        <router-view></router-view>
    </div>
</template>

<script>
import viteMenu from 'components/menu.vue';

export default {
    components: { viteMenu },
    methods: {
        go(item) {
            this.$router.push({ path: item.path });
        }
    }
};
</script>
