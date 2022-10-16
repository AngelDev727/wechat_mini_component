// pages/api_integrate/api_integrate.js
const app = getApp();

Page({

    /**
     * Page initial data
     */
    data: {
        avatarUrl: '../../resources/no_profile.png',
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: ""
    },

    /**
     * Lifecycle function--Called when page load
     */
    onLoad: function (options) {
        if (!wx.cloud) {
            wx.redirectTo({
              url: '../index/index',
            })
            return
        }

        wx.getSetting({
        //   withSubscriptions: true,
            success:res => {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                    //   lang: lang,
                        success: res => {
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                userInfo: res.userInfo
                            })
                        }
                    })
                }
            }
        })
    },

    /**
     * Lifecycle function--Called when page is initially rendered
     */
    onReady: function () {

    },

    /**
     * Lifecycle function--Called when page show
     */
    onShow: function () {

    },

    /**
     * Lifecycle function--Called when page hide
     */
    onHide: function () {

    },

    /**
     * Lifecycle function--Called when page unload
     */
    onUnload: function () {

    },

    /**
     * Page event handler function--Called when user drop down
     */
    onPullDownRefresh: function () {

    },

    /**
     * Called when page reach bottom
     */
    onReachBottom: function () {

    },

    /**
     * Called when user click on the top right corner to share
     */
    onShareAppMessage: function () {

    }
})