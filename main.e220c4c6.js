parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.querySelector(".append-row").addEventListener("click",function(){var e=document.querySelectorAll("tr");document.querySelector(".remove-row").disabled=!1,e.length<10&&e[e.length-1].parentElement.append(e[e.length-1].cloneNode(!0)),9===e.length&&(document.querySelector(".append-row").disabled=!0)}),document.querySelector(".remove-row").addEventListener("click",function(){var e=document.querySelectorAll("tr");3===e.length&&(document.querySelector(".remove-row").disabled=!0),document.querySelector(".append-row").disabled=!1,e.length>2&&e[e.length-1].remove()}),document.querySelector(".append-column").addEventListener("click",function(){document.querySelector("tr").children.length<10&&document.querySelectorAll("tr").forEach(function(e){e.append(e.lastElementChild.cloneNode(!0))}),10===document.querySelector("tr").children.length&&(document.querySelector(".append-column").disabled=!0),document.querySelector(".remove-column").disabled=!1}),document.querySelector(".remove-column").addEventListener("click",function(){document.querySelector("tr").children.length>2&&document.querySelectorAll("tr").forEach(function(e){e.lastElementChild.remove()}),2===document.querySelector("tr").children.length&&(document.querySelector(".remove-column").disabled=!0),document.querySelector(".append-column").disabled=!1});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.e220c4c6.js.map