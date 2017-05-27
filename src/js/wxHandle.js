/**
 * Created by Administrator on 2017/5/12.
 */
import {store,state,ACTION} from './store.js';
import infoUser from './info';

let wxSSH={
    initData:['img','wxLogin','userInfo'],//展示菜单界面的必要数据
    urls:{
        authenticationUrl:'',//认证url  是否使用微信登录
        userInfoUrl:'',//请求用户信息的url
        shareUrl:''//用户进行分享的url
    },
    reloadStatus:{//表示预加载是否完成
        img:false,//图片的预加载是否完成
        authentication:false,
        userInfo:false
    },
    init:()=>{
        //首先根据屏幕尺寸设置合适的fontSize
        wxSSH.resize();
        //请求所需的图片  图片预加载
        loadImg.start();
        //其次 微信认证和请求用户信息
        wxSSH.wxAuthentication();
    },

    wxAuthentication: () => {
        $.ajax({
            type: "GET",
            url: wxSSH.urls.authenticationUrl,
            data: '',
            dataType: "text",
            success: function(data){
                if(1){
                    //成功后通知isShowMenu并且获取用户信息
                    wxSSH.isShowMenu('wxLogin');
                    wxSSH.wxUserInfo();
                }else{
                    // alert('请使用微信登录');
                }
            }
        });
        //成功后通知isShowMenu并且获取用户信息
        wxSSH.isShowMenu('wxLogin');
        wxSSH.wxUserInfo();
    },

    wxUserInfo: () => {
        $.ajax({
            type: "GET",
            url: wxSSH.urls.userInfoUrl,
            data: '',
            dataType: "text",
            success: function(data){
                store.dispatch({type:'INFO',value:infoUser})
                //获取用户的信息成功
                wxSSH.isShowMenu('userInfo');
            }
        });
        //获取用户的信息成功
        store.dispatch({type:'INFO',value:infoUser})
        wxSSH.isShowMenu('userInfo');
    },

    isShowMenu: (type) =>{
    //    是不是应该展示菜单
        if((wxSSH.initData.splice(wxSSH.initData.indexOf(type),1)).length>0){
            return;
        }
        //先调用一次分享
        wxSSH.shareSys();
        //开始显示菜单栏
        setTimeout(function () {
            console.log('show menu');
            $('.j_loading').hide();
            $('.j_menu').show();
        }.bind(this),1000);
    },
    shareSys: () => {
        $.ajax({
            type:'GET',
            url: wxSSH.urls.shareUrl,
            data:{'url':encodeURIComponent(window.location.href)},
            dataType: "json",
            success:function(res){
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: '', // 必填，公众号的唯一标识
                    timestamp: res.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.nonceStr, // 必填，生成签名的随机串
                    signature: res.signature,// 必填，签名
                    jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline","hideMenuItems"] // 必填，需要使用的JS接口列表
                });
                // "hideMenuItems"
                wx.ready(function(){
                    wx.hideMenuItems({
                        menuList: ["menuItem:share:qq", "menuItem:share:weiboApp","menuItem:share:QZone","menuItem:copyUrl","menuItem:openWithQQBrowser", "menuItem:openWithSafari","menuItem:share:email","menuItem:originPage","menuItem:readMode","menuItem:editTag","menuItem:favorite"] // 要隐藏的菜单项
                    });

                    wx.onMenuShareTimeline({
                        title: '',  // 分享标题
                        link: config.urls[config.type].share, // 分享链接
                        desc:  '', // 分享描述
                        imgUrl: '',  // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });

                    wx.onMenuShareAppMessage({
                        title: '',  // 分享标题
                        link: config.urls[config.type].share, // 分享链接
                        desc:  '', // 分享描述
                        imgUrl:  '', // 分享图标
                        success: function () {
                            // 用户确认分享后执行的回调函数
                        },
                        cancel: function () {
                            // 用户取消分享后执行的回调函数
                        }
                    });
                });

                wx.error(function(res){
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    console.log(res);
                });
            },
            error:function(res){}
        });
    },
    resize: () => {
        if (document.addEventListener) {
            var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
            window.addEventListener(resizeEvt, wxSSH.calculate_size, false);
            document.addEventListener('DOMContentLoaded', wxSSH.calculate_size, false);
            wxSSH.calculate_size();
        }
    },
    calculate_size: () => {
        var BASE_FONT_SIZE = 100;
        var docEl = document.documentElement,
            clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        docEl.style.fontSize = BASE_FONT_SIZE * (clientWidth / 320) + 'px';
        var orientation = (window.innerWidth > window.innerHeight) ? 'landscape' : 'portrait';
        if(orientation==='landscape'){
        //横屏模式
        }else{
        //竖屏模式
        }
    }
}

let loadImg={
    headUrl:'./image/',
    promiseNum:0,
    imgUrl:[
        'heitaoSprite.png',
        'hongtaoSprite.png',
        'huaziSprite.png',
        'pianziSprite.png',
        'otherSprite.png',
        'imgSprite.png',
        'bg_skin.png',
        'loading.gif'
    ],
    start: () => {
        for(let url of loadImg.imgUrl){
            let img=document.createElement('img');
            let promiseCur= new Promise(function (resolve , reject) {
                img.onload = () =>{resolve(`${url} is loaded!`)};
                img.onerror = () =>{reject(`${url} is failed!`)};
                img.onabort = () =>{reject(`${url} is failed!`)};
            });
            promiseCur.then(
                (data) => loadImg.promiseResult(data),
                (err) => loadImg.promiseResult(err)
            );
            img.src=loadImg.headUrl+url;
        }
    },
    promiseResult: (data) => {
        //处理当前的图片加载状态
        console.log(data);
        //    暂时不区分失败和成功
        if(++loadImg.promiseNum==loadImg.imgUrl.length){
            //    全部加载完毕
            wxSSH.isShowMenu('img');
        }
        store.dispatch({type:'LOADING_IMG',value:Math.round(50/loadImg.imgUrl.length)});
    }
}

let initWX=()=>{
    wxSSH.init();
}
export { initWX }
