let storys = [
    '公元xxxx年,由于自然灾害,各国大战,病毒感染,外星人入侵等各种各样的灾难,在这些灾难之中,依然存在着不少的底层人民生存着...',
    '一栋公寓楼里..',
    '3205室',
    '疲惫的声音:".........."'
]
let step = 0;
Page({

    data: {
        story: ''
    },

    onLoad: function (options) {
        this.setData({
            story: storys[step]
        })
    },

    start: function () {
        wx.navigateTo({
            url: '../start/start'
        }
        );
    },

    goOn: function () {
        step++;
        if(step > storys.length-1){
            this.start();
            return;
        }
        this.setData({
            story: storys[step]
        })
    },

})