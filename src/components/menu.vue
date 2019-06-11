<template>
    <div v-click-outside="hideMenu">
        <div class="header">
            <img class="vite-logo" v-once src="~assets/imgs/ViteLogo2.svg" />
            <span class="menu" @click="toggle"></span>
        </div>

        <div class="menu-list" :class="{'show': showList }">
            <div v-for="(item, i) in menuList" :key="i" class="item" @click="go(item)">{{ item.title }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        active: {
            type: String,
            default: ''
        },
        menuList: {
            type: Array,
            default: () => []
        },
        menuListClick: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return { showList: false };
    },
    methods: {
        toggle() {
            this.showList = !this.showList;
        },
        hideMenu() {
            this.showList = false;
        },
        go(item) {
            this.hideMenu();
            this.menuListClick(item);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/vars.scss";

.header {
    padding: 10px 15px;
    background: #fff;
    box-shadow: 0 6px 36px 0 rgba(0, 62, 100, 0.04);
    overflow: hidden;

    .vite-logo {
        height: 35px;
        border: none;
        outline: none;
        float: left;
    }

    .menu {
        display: block;
        float: right;
        width: 35px;
        height: 35px;
        line-height: 35px;
        background: url('../assets/imgs/menu.svg') no-repeat center;
        background-size: 16px 14px;

        &:active {
            background: url('../assets/imgs/menu_presssed.svg') no-repeat center;
            background-size: 16px 14px;
        }
    }
}

.menu-list {
    box-sizing: border-box;
    position: absolute;
    margin-top: 2px;
    font-family: $font-bold, arial, sans-serif;
    font-size: 14px;
    color: #1d2024;
    letter-spacing: 0.35px;
    padding: 0 15px;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .4);
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0;
    z-index: 10;

    &.show {
        transform: scaleY(1);
    }

    .item {
        box-sizing: border-box;
        margin-top: 0;
        border-bottom: 1px solid #d7dce5;
        height: 50px;
        line-height: 50px;

        &:last-child {
            border: none;
        }

        &.active {
            color: #007aff;
        }
    }
}
</style>
