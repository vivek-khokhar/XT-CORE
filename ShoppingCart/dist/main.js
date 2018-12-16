!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);new class{constructor(e,t){this.template=e,this.dal=t,this.dal.getData().then(e=>{this.merchandise=e,document.querySelector("#total_itms").innerHTML=e.length+e.length>1?" items":" item";let t=[],n="";e.forEach(e=>{n+=this.template.merchandiseRowGenerator(e),t.push("#editButton"+e.id)}),document.querySelector("#merchandise-list").innerHTML=n,t.forEach(e=>{document.querySelector(e).onclick=(e=>{this.openEditModal(e.target.attributes.value.nodeValue)})}),document.querySelectorAll('input[name="qty"]').forEach(e=>{e.addEventListener("focusout",e=>{let t=e.target.attributes["data-Id"].value,n=document.querySelector(`#price${t}`);this.dal.saveData(t,e.target.value).then(t=>{n.innerHTML=`<strong>$${parseFloat(t.price)*parseFloat(e.target.value)}</strong>`})})})}).catch(e=>{console.log(e)})}openEditModal(e){var t=this.merchandise.find(t=>t.id===+e),n=document.querySelector("#editModal");let i=e=>{e.target==n.childNodes[0]&&(n.innerHTML="")};n.innerHTML=this.template.editModalGenerator(t),n.querySelector("#close_button").addEventListener("click",e=>{n.innerHTML="",window.removeEventListener("click",i)}),window.addEventListener("click",i)}}(new class{selectedColor(e){switch(e){case"green":case"black":case"pink":case"blue":return"color__selected"}}editModalGenerator(e){return`<div class="modal"><div class="modal-content">\n      <span id="close_button" class="modal-close">X</span>\n      <div class="col-12">\n          <div class="col-6 text-center">\n              <ul>\n                  <li id="modal__title">${e.title}</li>\n                  <li class="modal__price"><strong>$${parseFloat(e.price)*parseInt(e.qty)}</strong></span></li>\n                  <li>\n                      Color <br>\n                      <span class="color__square square__black ${"black"===e.color?"color__selected":""}"></span>\n                      <span class="color__square square__blue ${"blue"===e.color?"color__selected":""}"></span>\n                      <span class="color__square square__pink ${"pink"===e.color?"color__selected":""}"></span>\n                      <span class="color__square square__green ${"green"===e.color?"color__selected":""}"></span>\n                  </li>\n                  <li>\n                      <select>\n                          <option value="" selected>Size</option>\n                          <option value="S" ${"S"===e.size?"selected":""}>S</option>\n                          <option value="M" ${"M"===e.size?"selected":""}>M</option>\n                          <option value="L" ${"L"===e.size?"selected":""}>L</option>\n                      </select>\n                      <select>\n                          <option value="1" ${1==+e.qty?"selected":""}>QTY:1</option>\n                          <option value="2" ${2==+e.qty?"selected":""}>QTY:2</option>\n                          <option value="3" ${3==+e.qty?"selected":""}>QTY:3</option>\n                          <option value="4" ${4==+e.qty?"selected":""}>QTY:4</option>\n                      </select>\n                  </li>\n                  <li>\n                      <button>Edit</button>\n                  </li>\n                  <li>\n                      <a href="javascript:void(0);"> See product details</a>\n                  </li>\n              </ul>\n          </div>\n          <div class="col-6" >\n          <img id="${"modal_image"+e.id}" src='${e.img}' alt="${e.title} image" />\n          </div>\n      </div>\n      <div class="clearfix"></div>\n      </div>\n      </div>`}merchandiseRowGenerator(e){return`\n          <div class="box">\n                      <div class="col-3 col-sm-6">\n                          <img src="${e.img}" class="img" alt="Black tshirt">\n                      </div>\n                      <div class="col-6">\n                          <h5>${e.title}</h5>\n                          <p>Style #: ${e.style}</p>\n                          <p role="contentinfo" >Color: ${e.color}</p>\n                      </div>\n                      <div class="desktop-view">\n                          <div class="col-1">\n                              <p>${e.size}</p>\n                          </div>\n                          <div class="col-1">\n                              <input type="text" data-Id="${e.id}" name="qty" value="${e.qty}">\n                          </div>\n                          <div class="col-1">\n                              <p id="price${e.id}" data-price="${e.price}"><strong>$${parseFloat(e.price)*parseFloat(e.qty)}</strong></p>\n                          </div>\n                      </div>\n                      <div class="mobile-view">\n                          <div class="col-sm-12">\n                              <p>Size: ${e.size}</p>\n                          </div>\n                          <div class="col-sm-12">\n                              <p>QTY: <input type="text"data-Id="${e.id}" name="qty"  value="${e.qty}"></p>\n                          </div>\n                          <div class="col-sm-12">\n                              <p id="price${e.id}" data-price="${e.price}"><strong>$${parseFloat(e.price)*parseFloat(e.qty)}</strong></p>\n                          </div>\n                      </div>\n                      <div class="col-6 col-sm-12 action-section">\n                          <div id="${"editButton"+e.id}" value=${e.id} \n                           tabindex="0" role="button" aria-pressed="false">Edit</div>\n                          <div  tabindex="0" role="button" aria-pressed="false">\n                              <span aria-hidden=true>x</span> Remove\n                              </div>\n                          <div tabindex="0" role="button" aria-pressed="false">Save For Later</div>\n                      </div>\n                  </div>`}},new class{constructor(){this.dataList=[{id:1,title:"Solid black cotton tshirt",style:"MS13KT1906",color:"black",size:"S",price:"11.00",qty:"1",img:"./images/balloon-sq1.jpg"},{id:2,title:"Solid white cotton tshirt",style:"MS13KT1906",color:"blue",size:"M",price:"15.00",qty:"1",img:"./images/balloon-sq2.jpg"},{id:3,title:"Solid pink cotton tshirt",style:"MS13KT1906",color:"pink",size:"L",price:"19.00",qty:"2",img:"./images/balloon-sq3.jpg"},{id:4,title:"Solid green cotton tshirt",style:"MS13KT1906",color:"green",size:"L",price:"13.00",qty:"1",img:"./images/balloon-sq4.jpg"}]}getData(){return Promise.resolve(this.dataList)}saveData(e,t){return this.dataList.forEach(n=>{parseInt(n.id)===parseInt(e)&&(n.qty=t)}),Promise.resolve(this.dataList.find(t=>t.id===+e))}})}]);