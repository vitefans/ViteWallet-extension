<template>
    <layout>
        <router-view></router-view>
        <first-notice></first-notice>
    </layout>
</template>

<script>
import layout from './layout.vue';
import firstNotice from 'components/firstNotice.vue';

export default {
    components: {
        layout,
        firstNotice
    }
};
</script>
