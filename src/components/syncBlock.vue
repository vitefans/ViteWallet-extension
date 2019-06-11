<template>
    <div class="chain-status">
        <span v-if="netStatus">{{ $t(`blockHeight`) + ': ' + (blockHeight || '----') }}</span>
        <span v-else>{{ $t(`hint.noNet`) }}</span>
    </div>
</template>

<script>
export default {
    computed: {
        blockHeight() {
            return this.$store.state.ledger.currentHeight;
        },
        netStatus() {
            return this.$store.state.env.clientStatus;
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/vars.scss";

.chain-status {
    font-family: $font-bold, arial, sans-serif;
    font-size: 16px;
    color: #1d2024;
    line-height: 20px;
    padding: 20px 0;
    text-align: center;
}
</style>
