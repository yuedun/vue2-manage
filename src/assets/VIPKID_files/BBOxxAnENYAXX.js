"use strict";
document.domain = getHostInfo().domain;
var IM_PC_URL = getHostInfo().url;
var messageInfo = {
	routeSkill: "imittest_zixun",
	channelData: {
		equipment: "PC"
	},
	chatWidth: 360,
	chatHeight: 540
};
window.addEventListener("load", init);
window.addEventListener("message",
function(event) {
	var origin = event.origin || event.originalEvent.origin;
	if (origin != IM_PC_URL) {
		return
	}
	switch (event.data.chatWindow) {
	case "close":
		setClass("remove");
		break;
	case "hide":
		setClass("hide");
		break
	}
},
false);
function init() {
	var iframeWrapper = document.createElement("div");
	iframeWrapper.setAttribute("id", "iframeWrapper");
	document.body.appendChild(iframeWrapper);
	setClass("hide");
	var IMDomArray = document.querySelectorAll(".js-online-service");
	Array.prototype.forEach.call(IMDomArray,
	function(item) {
		item.addEventListener("click", initCreatFrame)
	})
}
function initCreatFrame() {
	var iframeChat = document.getElementById("iframeChat");
	if (iframeChat && iframeChat.style.display == "none") {
		setClass("show")
	} else {
		if (iframeChat && iframeChat.style.display == "block") {
			setClass("hide")
		} else {
			var iframeWrapper = document.getElementById("iframeWrapper");
			var _iframeChat = document.createElement("iframe");
			_iframeChat.src = IM_PC_URL + "/ittest";
			_iframeChat.setAttribute("frameborder", 0);
			_iframeChat.setAttribute("id", "iframeChat");
			_iframeChat.setAttribute("style", "display:block;");
			iframeWrapper.appendChild(_iframeChat);
			setClass("show");
			_iframeChat.onload = function() {
				this.contentWindow.postMessage(messageInfo, IM_PC_URL)
			}
		}
	}
}
function setClass(flag) {
	var iframeWrapper = document.getElementById("iframeWrapper");
	var iframeChat = document.getElementById("iframeChat");
	if (flag === "hide") {
		iframeWrapper.setAttribute("style", "display:none;");
		iframeChat && (iframeChat.style.display = "none")
	} else {
		if (flag === "show") {
			iframeWrapper.setAttribute("style", "display:block;");
			iframeChat.style.display = "block"
		} else {
			if (flag === "remove") {
				iframeWrapper.setAttribute("style", "display:none;");
				iframeChat.remove()
			}
		}
	}
}
function getCookie() {
	var cookieArr = document.cookie.split(";");
	var cookieObj = {};
	cookieArr.forEach(function(item) {
		var itemArr = item.split("=");
		cookieObj[itemArr[0].trim()] = itemArr[1].trim()
	});
	return cookieObj
};
function getHostInfo() {
	var obj = {
		domain: {
			dev: "localhost",
			pre: "vipkid.com.cn",
			online: "vipkid.com.cn"
		},
		url: {
			dev: "http://stage-multi-im-chat.localhost",
			pre: "https://pre-multi-im-chat.vipkid.com.cn",
			online: "https://multi-im-chat.vipkid.com.cn"
		}
	};
	var host = window.location.host;
	var returnObj = {};
	if (host === "nest.hopefly.top") {
		returnObj.domain = obj.domain.online;
		returnObj.url = obj.url.online
	} else {
		if (host === "pre-nest.hopefly.top") {
			returnObj.domain = obj.domain.pre;
			returnObj.url = obj.url.pre
		} else {
			returnObj.domain = obj.domain.dev;
			returnObj.url = obj.url.dev
		}
	}
	return returnObj
};