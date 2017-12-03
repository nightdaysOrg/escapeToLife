Page({

  data: {
    story: [
      '公元xxxx年',
      '世界充斥着自然灾害,战争,病毒感染,外星人入侵等各种各样的灾难',
      '在这些灾难之中,依然存在着不少的底层人民生存着...',
      '一栋公寓楼里...',
      '一楼的某间房间里...',
      '传来了一点微弱的声音:',
      '..........',
    ],
    showNum: -1,
    go: false,
    timer: null
  },

  onLoad: function (options) {

  },

  start: function () {
    let that = this;
    this.setData({
      go: true,
    });
    this.time();
  },
  time() {
    let that = this;
    let time = setInterval(function () {
      let i = that.data.showNum;
      let stop = that.data.story.length;
      i++;
      that.setData({
        showNum: i,
      })
      if (i >= stop) {
        that.setData({
          timer: time
        });
        clearInterval(that.data.timer);
      }
    }, 1000)
  }

})