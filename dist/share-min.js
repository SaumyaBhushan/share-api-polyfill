!function(e){var n={};function t(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)t.d(o,a,function(n){return e[n]}.bind(null,a));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){function t(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function o(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}navigator.share=navigator.share||function(){var e={default:{sms:"SMS",messenger:"Messenger",whatsapp:"WhatsApp",twitter:"Twitter",linkedin:"Linkedin",telegram:"Telegram",facebook:"Facebook",skype:"Skype",pinterest:"Pinterest"},cs:{shareTitle:"Sdílet",cancel:"Zrušit",copy:"Kopírovat",print:"Tisk",email:"E-mail",selectSms:"Vyberte kontakt"},sk:{shareTitle:"Zdieľať",cancel:"Zrušiť",copy:"Kopírovat",print:"Tlač",email:"E-mail",selectSms:"Vyberte kontakt"},ja:{shareTitle:"共有する",cancel:"キャンセル",copy:"コピーする",print:"印刷する",email:"E-mail",selectSms:"連絡先を選択してください"},zh:{shareTitle:"分享",cancel:"取消",copy:"複製連結",print:"列印",email:"E-mail",selectSms:"選擇聯絡人"},pt:{shareTitle:"Compartilhar",cancel:"Cancelar",copy:"Copiar",print:"Imprimir",email:"E-mail",selectSms:"Selecione um contato"},en:{shareTitle:"Share",cancel:"Cancel",copy:"Copy",print:"Print",email:"E-mail",selectSms:"Pick a contact"},es:{shareTitle:"Compartir",cancel:"Cancelar",copy:"Copiar",print:"Imprimir",email:"Correo",selectSms:"Seleccionar un contacto"},fr:{shareTitle:"Partager",cancel:"Annuler",copy:"Copier",print:"Imprimer",email:"E-mail",selectSms:"Veuillez choisir un contact"},de:{shareTitle:"Teilen",cancel:"Abbrechen",copy:"Kopieren",print:"Drucken",email:"E-mail",selectSms:"Wählen Sie einen Kontakt aus"},it:{shareTitle:"Condividi",cancel:"Annulla",copy:"Copia",print:"Stampa",email:"Email",selectSms:"Seleziona un contatto"},nl:{shareTitle:"Delen",cancel:"Annuleren",copy:"Kopiëren",print:"Printen",email:"E-mail",selectSms:"Selecteer een contact"},sv:{shareTitle:"Dela",cancel:"Avbryt",copy:"Kopiera",print:"Skriv ut",email:"E-mail",selectSms:"Välj en kontakt"},da:{shareTitle:"Del",cancel:"Luk",copy:"Kopiér",print:"Udskriv",email:"E-mail",selectSms:"Vælg en kontaktperson"},dk:{shareTitle:"Del",cancel:"Luk",copy:"Kopiér",print:"Udskriv",email:"E-mail",selectSms:"Vælg en kontaktperson"},ru:{shareTitle:"Поделиться",cancel:"Отмена",copy:"Скопировать",print:"Печать",email:"Э-майл",selectSms:"Выбери контакт"},tr:{shareTitle:"Paylaş",cancel:"Vazgeç",copy:"Kopyala",print:"Yazdır",email:"E-posta",selectSms:"Bir kişi seç"},ko:{shareTitle:"공유",cancel:"취소",copy:"링크 복사",print:"인쇄",email:"E-mail",selectSms:"연락처를 선택하세요"},ta:{shareTitle:"பகிர்",cancel:"இரத்து",copy:"நகலெடு",print:"அச்சிடு",email:"மின்னஞ்சல்",selectSms:"ஒரு தொடர்பைத் தேர்வுசெய்க"},pl:{shareTitle:"Dzielić",cancel:"Anuluj",copy:"Kopiuj",print:"Wydrukować",email:"E-mail",selectSms:"Wybierz kontakt"},is:{shareTitle:"Deila",cancel:"Hætta við",copy:"Afrita",print:"Prenta",email:"Póstur",selectSms:"Veldu tengilið"}},n=navigator.userAgent.match(/Android/i),t=navigator.userAgent.match(/iPhone|iPad|iPod/i),a=navigator.userAgent.match(/iPhone|iPad|iPod|Macintosh/i),i=!(t||n),c={share:a?'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><g><path fill="#424242" d="M381.9,181l95.8-95.8v525.9c0,13.4,8.9,22.3,22.3,22.3c13.4,0,22.3-8.9,22.3-22.3V85.2l95.8,95.8c4.5,4.5,8.9,6.7,15.6,6.7c6.7,0,11.1-2.2,15.6-6.7c8.9-8.9,8.9-22.3,0-31.2L515.6,16.1c-2.2-2.2-4.5-4.5-6.7-4.5c-4.5-2.2-11.1-2.2-17.8,0c-2.2,2.2-4.5,2.2-6.7,4.5L350.7,149.8c-8.9,8.9-8.9,22.3,0,31.2C359.6,190,373,190,381.9,181z M812,276.9H633.7v44.6H812v624H188v-624h178.3v-44.6H188c-24.5,0-44.6,20.1-44.6,44.6v624c0,24.5,20.1,44.6,44.6,44.6h624c24.5,0,44.6-20.1,44.6-44.6v-624C856.6,296.9,836.5,276.9,812,276.9z"/></g></svg>':'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path fill="#424242" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/></svg>',email:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#424242" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"/></svg>',copy:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#424242" d="M320 448v40c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V120c0-13.255 10.745-24 24-24h72v296c0 30.879 25.121 56 56 56h168zm0-344V0H152c-13.255 0-24 10.745-24 24v368c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V128H344c-13.2 0-24-10.8-24-24zm120.971-31.029L375.029 7.029A24 24 0 0 0 358.059 0H352v96h96v-6.059a24 24 0 0 0-7.029-16.97z"></path></svg>',print:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#424242" d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',sms:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#424242" d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 11H7V9h2v2zm4 0h-2V9h2v2zm4 0h-2V9h2v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',messenger:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0084ff" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>',facebook:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#3b5998" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"></path></svg>',whatsapp:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#075e54" d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path></svg>',twitter:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1da1f2" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>',linkedin:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#0077b5" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>',telegram:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="#0088cc" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path></svg>',skype:'<svg class="the-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#00aff0" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg>',pinterest:'<svg class="the-icon" width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"><path d="M0,128.002 C0,180.416 31.518,225.444 76.619,245.241 C76.259,236.303 76.555,225.573 78.847,215.848 C81.308,205.457 95.317,146.1 95.317,146.1 C95.317,146.1 91.228,137.927 91.228,125.848 C91.228,106.879 102.222,92.712 115.914,92.712 C127.557,92.712 133.182,101.457 133.182,111.929 C133.182,123.633 125.717,141.14 121.878,157.355 C118.671,170.933 128.686,182.008 142.081,182.008 C166.333,182.008 182.667,150.859 182.667,113.953 C182.667,85.899 163.772,64.901 129.405,64.901 C90.577,64.901 66.388,93.857 66.388,126.201 C66.388,137.353 69.676,145.217 74.826,151.307 C77.194,154.104 77.523,155.229 76.666,158.441 C76.052,160.796 74.642,166.466 74.058,168.713 C73.206,171.955 70.579,173.114 67.649,171.917 C49.765,164.616 41.436,145.031 41.436,123.015 C41.436,86.654 72.102,43.054 132.918,43.054 C181.788,43.054 213.953,78.418 213.953,116.379 C213.953,166.592 186.037,204.105 144.887,204.105 C131.068,204.105 118.069,196.635 113.616,188.15 C113.616,188.15 106.185,217.642 104.611,223.337 C101.897,233.206 96.585,243.07 91.728,250.758 C103.24,254.156 115.401,256.007 128.005,256.007 C198.689,256.007 256.001,198.698 256.001,128.002 C256.001,57.309 198.689,0 128.005,0 C57.314,0 0,57.309 0,128.002 Z" fill="#CB1F27"></path></svg>'};function l(e){var n=e,t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",o.appendChild(document.createTextNode(n)),o.id="shareAPIPolyfill-style",t.appendChild(o)}return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(s,r){n.title&&"string"==typeof n.title&&n.text&&"string"==typeof n.text||r("Invalid Params");var p=n.title,d=n.url,h=n.fbId,m=n.hashtags,u=o(o({},{copy:!0,print:!0,email:!0,sms:!0,messenger:!0,facebook:!0,whatsapp:!0,twitter:!0,linkedin:!0,telegram:!0,skype:!0,pinterest:!0,language:"en"}),t),v=o(o({},e.default),e[u.language]?e[u.language]:e[navigator.language]||e[navigator.language.substr(0,2).toLowerCase()]||e.en),g=n.text||p,y=encodeURIComponent(n.image);function f(){k.classList.remove("visible"),x.classList.remove("visible"),k.addEventListener("transitionend",(function e(){k.removeEventListener("transitionend",e),document.body.removeChild(k)})),x.addEventListener("transitionend",(function e(){x.removeEventListener("transitionend",e),document.body.removeChild(x),document.head.removeChild(document.querySelector("#shareAPIPolyfill-style")),document.removeEventListener("keyup",C)}))}l('\n#shareAPIPolyfill-backdrop,\n#shareAPIPolyfill-container {\n  opacity: 0;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 100%;\n  height: 100%;\n  will-change: opacity;\n  z-index: 99999999;\n}\n#shareAPIPolyfill-backdrop {\n  transition: opacity linear 250ms;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n#shareAPIPolyfill-container {\n  background-color: #f9f9f9;\n  top: auto;\n  max-width: 400px;\n  height: auto;\n  transition-property: transform,opacity;\n  transition-timing-function: linear;\n  transition-duration: 250ms;\n  transition-delay: 150ms;\n  transform: translateY(100%);\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", arial, sans-serif, "Microsoft JhengHei";\n}\n#shareAPIPolyfill-backdrop.visible,\n#shareAPIPolyfill-container.visible {\n  opacity: 1;\n  pointer-events: all;\n}\n#shareAPIPolyfill-container.visible {\n  transform: translateY(0);\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header {\n  background: #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header .shareAPIPolyfill-icons-container {\n  display: flex;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-header-title {\n  background-color: #E0E0E0;\n  padding: 10px 18px;\n  color: #424242;\n  font-weight: 600;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-body {\n  border-top: solid 1px #EEE;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer {\n width: 100%;\n display: block;\n border: none;\n transition: opacity ease-in 250ms;\n border-top: solid 1px #EEE;\n background-color: #EEE;\n text-align: center;\n padding: 10px;\n font-size:13px;\n cursor: pointer;\n opacity: .5;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-footer:hover {\n  opacity: 1;\n}\n#shareAPIPolyfill-container .shareAPIPolyfill-icons-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n#shareAPIPolyfill-container .tool-icon {\n border: none;\n display: inline-block;\n width: 25%;\n box-sizing: border-box;\n font-weight: 400;\n font-size: 12px;\n -webkit-font-smoothing: antialiased;\n -moz-osx-font-smoothing: grayscale;\n text-align: center;\n cursor: pointer;\n background-color: transparent;\n padding: 20px 0;\n}\n#shareAPIPolyfill-container .tool-icon:hover {\n  box-shadow: inset 0 0 20px rgba(0,0,0, .125);\n}\n#shareAPIPolyfill-container .the-icon-title {\n padding-top: 10px;\n display: block;\n}\n.shareAPIPolyfill-header-title .the-icon {\n\tdisplay: inline-block;\n\theight: 20px;\n\twidth: 20px;\n\tpadding-right: 5px;\n\tvertical-align:'.concat(a?"-2px":"-4px",";\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon,\n.shareAPIPolyfill-icons-container.body .tool-icon .the-icon {\n  display: block;\n  margin: auto;\n  width: 42px;\n  height: 36px;\n}\n.shareAPIPolyfill-icons-container.title .tool-icon .the-icon {\n  height: 24px;\n}\n.shareAPIPolyfill-icons-container .hidden {\n  display: none !important;\n}\n"));var w,b,P,k=document.createElement("div"),x=document.createElement("div");function C(e){27===e.keyCode&&f()}k.id="shareAPIPolyfill-backdrop",x.id="shareAPIPolyfill-container",x.setAttribute("tabindex","0"),x.innerHTML='\n<div class="shareAPIPolyfill-header">\n <div class="shareAPIPolyfill-header-title" tabindex="0">'.concat(c.share," ").concat(v.shareTitle,'</div>\n <div class="shareAPIPolyfill-icons-container title">\n  <button class="').concat(u.copy?"":"hidden",' tool-icon copy" data-tool="copy">\n   ').concat(c.copy,'\n   <span class="the-icon-title">').concat(v.copy,'</span>\n  </button>\n  <button class="').concat(u.print?"":"hidden",' tool-icon print" data-tool="print">\n   ').concat(c.print,'\n   <span class="the-icon-title">').concat(v.print,'</span>\n  </button>\n  <button class="').concat(u.email?"":"hidden",' tool-icon email" data-tool="email">\n   ').concat(c.email,'\n   <span class="the-icon-title">').concat(v.email,'</span>\n  </button>\n  <button class="').concat(u.sms?"":"hidden",' tool-icon sms" data-tool="sms">\n   ').concat(c.sms,'\n   <span class="the-icon-title">').concat(v.sms,'</span>\n  </button>\n </div>\n</div>\n<div class="shareAPIPolyfill-body">\n <div class="shareAPIPolyfill-icons-container body">\n  ').concat(h?'\n   <button class="tool-icon messenger '.concat(u.messenger?"":"hidden",'" data-tool="messenger">\n    ').concat(c.messenger,'\n    <span class="the-icon-title">').concat(v.messenger,"</span>\n   </button>\n  "):"",'\n  <button class="').concat(u.facebook?"":"hidden",' tool-icon facebook" data-tool="facebook">\n   ').concat(c.facebook,'\n   <span class="the-icon-title">').concat(v.facebook,'</span>\n  </button>\n  <button class="').concat(u.whatsapp?"":"hidden",' tool-icon whatsapp" data-tool="whatsapp">\n   ').concat(c.whatsapp,'\n   <span class="the-icon-title">').concat(v.whatsapp,'</span>\n  </button>\n  <button class="').concat(u.twitter?"":"hidden",' tool-icon twitter" data-tool="twitter">\n   ').concat(c.twitter,'\n   <span class="the-icon-title">').concat(v.twitter,'</span>\n  </button>\n  <button class="').concat(u.linkedin?"":"hidden",' tool-icon linkedin" data-tool="linkedin">\n   ').concat(c.linkedin,'\n   <span class="the-icon-title">').concat(v.linkedin,'</span>\n  </button>\n  <button class="').concat(u.telegram?"":"hidden",' tool-icon telegram" data-tool="telegram">\n   ').concat(c.telegram,'\n   <span class="the-icon-title">').concat(v.telegram,'</span>\n  </button>\n  <button class="').concat(u.skype?"":"hidden",' tool-icon skype skype-share" data-tool="skype" data-href="').concat(d,'" data-text="').concat(p+": "+d,'">\n   ').concat(c.skype,'\n   <span class="the-icon-title">').concat(v.skype,'</span>\n  </button>\n  <button class="').concat(u.pinterest?"":"hidden",' tool-icon pinterest" data-tool="pinterest">\n   ').concat(c.pinterest,'\n   <span class="the-icon-title">').concat(v.pinterest,'</span>\n  </button>\n </div>\n <button class="shareAPIPolyfill-footer">\n  ').concat(v.cancel,"\n </button>\n</div>\n"),k.addEventListener("click",(function(){f()})),!1!==u.skype&&(w=window,b=document,P="script",w.loadSkypeWebSdkAsync=w.loadSkypeWebSdkAsync||function(e){var n,t=b.getElementsByTagName(P)[0];b.getElementById(e.id)||((n=b.createElement(P)).id=e.id,n.src=e.scriptToLoad,n.onload=e.callback,t.parentNode.insertBefore(n,t))},w.loadSkypeWebSdkAsync({scriptToLoad:"https://swx.cdn.skype.com/shared/v/latest/skypewebsdk.js",id:"skype_web_sdk"})),requestAnimationFrame((function(e){document.body.appendChild(k),document.body.appendChild(x),document.addEventListener("keyup",C),Array.from(x.querySelectorAll(".tool-icon")).forEach((function(e){e.addEventListener("click",(function(n){var t=g+": "+d;switch(e.dataset.tool){case"copy":navigator.clipboard.writeText(d);break;case"print":setTimeout((function(e){self.print()}),500);break;case"email":window.open("mailto:?subject="+p+"&body="+d);break;case"sms":location.href="sms:".concat(v.selectSms,"?&body=").concat(p,": ").concat(d);break;case"messenger":window.open("http://www.facebook.com/dialog/send?app_id="+h+"&display=popup&href="+encodeURIComponent(d)+"&link="+encodeURIComponent(d)+"&redirect_uri="+encodeURIComponent(d)+"&quote="+encodeURIComponent(g));break;case"facebook":window.open("https://www.facebook.com/sharer/sharer.php?u="+encodeURIComponent(d)+"&quote="+encodeURIComponent(g));break;case"whatsapp":window.open((i?"https://api.whatsapp.com/send?text=":"whatsapp://send?text=")+encodeURIComponent(g+"\n"+d));break;case"twitter":window.open("https://twitter.com/intent/tweet?text=".concat(g,"&url=").concat(d,"&hashtags=").concat(m||""));break;case"linkedin":window.open("https://www.linkedin.com/shareArticle?mini=true&url=".concat(d,"&title=").concat(p,"&summary=").concat(g,"&source=LinkedIn"));break;case"telegram":window.open(i?"https://telegram.me/share/msg?url="+d+"&text="+g:"tg://msg?text="+t);break;case"pinterest":window.open("https://pinterest.com/pin/create/button/?url="+d+"&description="+g+"&media="+y)}s(),f()}))})),x.querySelector(".shareAPIPolyfill-footer").addEventListener("click",f),requestAnimationFrame((function(){k.classList.add("visible"),x.classList.add("visible")})),document.getElementById("shareAPIPolyfill-container").focus()}))}))}}()}]);