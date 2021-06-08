// ==UserScript==
// @name        知乎标题栏毛玻璃
// @namespace   none
// @version     1.5
// @description 一款可以使知乎标题栏呈现毛玻璃效果的用户样式表。
// @description 问题反馈请到https://github.com/HanHan666666/zhihu-blur
// @author      hanplus
// @license     MIT
// @grant       GM_addStyle
// @run-at      document-start
// @match       *://www.zhihu.com/*
// @match       *://zhuanlan.zhihu.com/*
// @name        zhihu_theme
// @description a theme for zhihu.com
// @description 知乎
// ==/UserScript==

(function() {
    let css = `
    .AppHeader {
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        background: #ffffff89;}
        .RichContent-actions {
            -webkit-backdrop-filter:  blur(20px);
            backdrop-filter:  blur(20px);
            background: #ffffff89
        }
    .QuestionHeader-footer {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            background: #ffffff89
        }
    .UserAvatarEditor-mask {
            -webkit-backdrop-filter:  blur(20px);
            backdrop-filter:blur(20px);
            background: #ffffff89
        }
    .ColumnPageHeader {
            -webkit-backdrop-filter:  blur(20px);
            backdrop-filter: blur(20px);
            background: #ffffff89
        }
    .Popover-content--fixed {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter:  blur(20px);
            background: #ffffff89
        }
    .HoverCard-loading {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            background: #ffffff89		
        }
    .HoverCard {
            -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
            background: #ffffff89	
    }
    .Input-wrapper.Input-wrapper--grey {
        background: #ffffff66;
    }
    .SimpleSearchBar-input {
        background-color: #f6f6f666;
    }
    .CommentCollapseButton {        
        background-color: rgb(243 243 243 / 60%);
        backdrop-filter: blur(20px)}

    `;
    if (typeof GM_addStyle !== "undefined") {
        GM_addStyle(css);
    } else {
        let styleNode = document.createElement("style");
        styleNode.appendChild(document.createTextNode(css));
        (document.querySelector("head") || document.documentElement).appendChild(styleNode);
    }
})();