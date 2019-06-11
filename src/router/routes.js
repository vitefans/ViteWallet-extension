import setting from 'pages/setting/index.vue';

import start from 'pages/start/index.vue';
import startStart from 'pages/start/start/index.vue';
import startLogin from 'pages/start/login/index.vue';
import startCreate from 'pages/start/create/index.vue';
import startImport from 'pages/start/import/index.vue';
import startRecord from 'pages/start/record/index.vue';
import startRestore from 'pages/start/restore/index.vue';


import wallet from 'pages/wallet/index.vue';
import account from 'pages/wallet/account/index.vue';
import walletSBP from 'pages/wallet/SBP/index.vue';
import walletConversion from 'pages/wallet/conversion/index.vue';
import walletQuota from 'pages/wallet/quota/index.vue';
import walletTransList from 'pages/wallet/transList/index.vue';
import walletVote from 'pages/wallet/vote/index.vue';

export default {
    routes: [{
            name: 'setting',
            path: '/setting',
            component: setting
        },
        {
            path: '/start',
            component: start,
            children: [{
                name: 'start',
                path: '',
                component: startStart,
            },{
                name: 'create',
                path: 'create',
                component: startCreate
            }, {
                name: 'import',
                path: 'import',
                component: startImport
            }, {
                name: 'record',
                path: 'record',
                component: startRecord
            }, {
                name: 'restore',
                path: 'restore',
                component: startRestore
            }]
        }, {
            path: '/',
            component: wallet,
            children: [{
                    name: 'wallet',
                    path: '',
                    component: account
                },
                {
                    name: 'sbp',
                    path: 'sbp',
                    component: walletSBP
                }, {
                    name: 'conversion',
                    path: 'conversion',
                    component: walletConversion
                }, {
                    name: 'quota',
                    path: 'quota',
                    component: walletQuota
                }, {
                    name: 'tx',
                    path: 'tx',
                    component: walletTransList
                }, {
                    name: 'vote',
                    path: 'vote',
                    component: walletVote
                },
            ]
        },
    ]
}