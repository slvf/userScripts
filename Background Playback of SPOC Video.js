// ==UserScript==
// @name         Background Playback of SPOC Video
// @namespace    http://tampermonkey.net/
// @version      0.2.3
// @description  国家安全后台挂课脚本
// @author       haku
// @match        https://spoc.buaa.edu.cn/spoc/moocxsxx/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=buaa.edu.cn
// @grant        none
// @license      MIT
// ==/UserScript==
 
(function() {
    'use strict';
var video = document.querySelector("video");
video.playbackRate = 3;
var button = document.querySelector("a[href='javascript:void(0)'][onclick='videoclick(this)']");
    button.click();
 
 
document.addEventListener('visibilitychange', function () {
    if (video) {
        video.play();
    }
});
 
    function disableSourceCodeBlocker() {
        window.onload = null; // 移除 window.onload 的事件处理器
        document.onkeydown = null; // 移除按键事件监听器
        document.oncontextmenu = null; // 移除右键菜单事件监听器
    }
 
    // 在页面加载后禁用源代码阻止功能
    window.addEventListener('load', function() {
        disableSourceCodeBlocker();
        clearInterval(2);
        video.currentTime = (video.duration - 1);
    });
    })();