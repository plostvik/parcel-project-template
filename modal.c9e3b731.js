parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RSqK":[function(require,module,exports) {
!function(){var e=document.querySelector("[data-body]"),o={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),closeModalBtn1:document.querySelector("[data-modal-close1]"),closeModalBtn2:document.querySelector("[data-modal-close2]"),closeModalBtn3:document.querySelector("[data-modal-close3]"),closeModalBtn4:document.querySelector("[data-modal-close4]"),closeModalBtn5:document.querySelector("[data-modal-close5]"),modal:document.querySelector("[data-modal]")};function l(){o.modal.classList.toggle("is-open"),e.classList.toggle("stop-scroll")}o.openModalBtn.addEventListener("click",l),o.closeModalBtn.addEventListener("click",l),o.closeModalBtn1.addEventListener("click",l),o.closeModalBtn2.addEventListener("click",l),o.closeModalBtn3.addEventListener("click",l),o.closeModalBtn4.addEventListener("click",l),o.closeModalBtn5.addEventListener("click",l)}();
},{}]},{},["RSqK"], null)
//# sourceMappingURL=/parcel-project-template/modal.c9e3b731.js.map