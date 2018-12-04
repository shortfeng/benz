// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/wechat/header.png" }
    ],
    list: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/wechat/c-1.jpg" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/wechat/c-2.jpg" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/wechat/c-4.jpg" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/wechat/c-5.jpg" }
    ],
    img: [
      { id: 1, img_url: "http://127.0.0.1:3000/img/wechat/centend7a.png" },
      { id: 2, img_url: "http://127.0.0.1:3000/img/wechat/chuxingzhushou.png" },
      { id: 3, img_url: "http://127.0.0.1:3000/img/wechat/dongtaicheshu.png" },
      { id: 4, img_url: "http://127.0.0.1:3000/img/wechat/service1a.png" },
      { id: 5, img_url: "http://127.0.0.1:3000/img/wechat/service3a.png" },
      { id: 6, img_url: "http://127.0.0.1:3000/img/wechat/service4c.png" },
      { id: 7, img_url: "http://127.0.0.1:3000/img/wechat/service5a.png" },
      { id: 8, img_url: "http://127.0.0.1:3000/img/wechat/xresc.png" },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  handleJumjulebu: function (event) {
    var id = event.target.dataset.id;
    if (id == 5) {
      wx: wx.navigateTo({
        url: '/pages/mejulebu/mejulebu',
      })
    }
  }
})
