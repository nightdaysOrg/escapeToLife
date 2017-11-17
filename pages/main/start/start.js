let foodTypeList = require('../../../entity/food.js');

Page({

    data: {

    },

    gotoStatus:function() {
        wx.navigateTo({
            url: '../status/status',
        })
    },

    gotoBag:function() {
        wx.navigateTo({
            url: '../bag/bag',
        })
    },

    gotoEnv:function() {
        wx.navigateTo({
            url: '../env/env',
        })
    },

    gotoGame:function() {
        wx.navigateTo({
            url: '../game/game',
        })
    },

});