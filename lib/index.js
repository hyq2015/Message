"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var Message=function(){function e(){_classCallCheck(this,e),this.fadeTime=2e3,this.messageContainer=null}return _createClass(e,[{key:"renderDom",value:function(e,t){var n=this;this.messageContainer||(this.messageContainer=document.createElement("div"),this.messageContainer.className="r-message-container");var a=document.createElement("div"),r=document.createElement("div");r.className="r-"+e,a.className="r-"+e+"-outer",r.innerText=t.txt,a.appendChild(r),this.messageContainer.appendChild(a),document.querySelector("body").appendChild(this.messageContainer),setTimeout(function(){n.messageContainer.removeChild(a)},t.time||this.fadeTime)}},{key:"warn",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{txt:"",time:2e3};this.renderDom("warn",e)}}]),e}(),_default=new Message;exports.default=_default;