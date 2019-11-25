// pages/home/home.js
const appInstance = getApp()

console.log(appInstance.globalData.name)
console.log(appInstance.globalData.age)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'KK',
    age: 18,
    person: [
      {id: 110, name: 'YK', age: 18},
      { id: 111, name: 'YY', age: 18 },
      { id: 112, name: 'KK', age: 18 },
      { id: 113, name: 'GG', age: 18 }
    ],
    counter: 0,
    nickName: '',
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var self = this
    wx.request({
      url: 'http://localhost:3000/data',
      // success: function(res){
      //   console.log(res)
      //   const data = res.data;
      //   console.log(data)
      //   self.setData({
      //     list: data
      //   })
      // }
      success: (res) =>{
        const data = res.data;
        this.setData({
          list: data
        })
      }
    })
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
  toAbout: function(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  //点击增加
  count: function(){
    // 1. this.data.counter += 1   counter值变化了，但是界面上无变化
    //console.log(this.data.counter)

    // 2. this.setData(
    this.setData({
      counter: this.data.counter + 1
    })
  },
  reduce: function(){
      this.setData({
        counter: this.data.counter -1
      })
  },
  //獲取用戶信息
  getUserInfo: function(){
    var infoThis = this
    wx.getUserInfo({
      success: function(res){
        console.log(res.userInfo.nickName)
        infoThis.setData({
          nickName: res.userInfo.nickName
        })
      }
    })
  },
 
 onPullDownRefresh:function(){
   console.log('下拉刷新事件')
 },



})
