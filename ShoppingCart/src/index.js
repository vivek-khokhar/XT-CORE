// let template = ('./templateGenerator');
// let dal = require('./data');

import TemplateGeneratorFactory from "./templateGenerator";
import DataAccessLayer from "./data";

class ShoppingCart {
  constructor(template, dal) {
    this.template = template;
    this.dal = dal;
    this.dal
      .getData()
      // .then(data => data.json())
      .then(result => {
        this.merchandise = result;
        document.querySelector("#total_itms").innerHTML =
          result.length + result.length > 1 ? " items" : " item";
        let editIds = [];
        let rowContents = "";
        result.forEach(item => {
          rowContents += this.template.merchandiseRowGenerator(item);
          editIds.push("#editButton" + item.id);
        });
        document.querySelector("#merchandise-list").innerHTML = rowContents;
        editIds.forEach(editId => {
          document.querySelector(editId).onclick = event => {
            this.openEditModal(event.target.attributes.value.nodeValue);
          };
        });

        document.querySelectorAll('input[name="qty"]').forEach(item => {
          item.addEventListener("focusout", event => {
            let id = event.target.attributes["data-Id"].value;
            let priceElm = document.querySelector(`#price${id}`);
            this.dal.saveData(id, { qty: event.target.value }).then(item => {
              priceElm.innerHTML = `<strong>$${parseFloat(item.price) *
                parseFloat(event.target.value)}</strong>`;
            });
          });
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  openEditModal(id) {
    var item = this.merchandise.find(item => item.id === +id);
    var container = document.querySelector("#editModal");
    let updatedValues = {};
    let clickHandler = event => {
      if (event.target == container.childNodes[0]) {
        container.innerHTML = "";
      }
    };
    let closeHandler = () => {
      container.innerHTML = "";
      window.removeEventListener("click", clickHandler);
    }
    container.innerHTML = this.template.editModalGenerator(item);
    let qtySelect = container.querySelector("#qtySelect");
    let sizeSelect = container.querySelector("#sizeSelect");
    qtySelect.addEventListener('change', (event)=> {
      container.querySelector(`#modelqty${item.id}`).innerHTML = `<strong>$${parseFloat(item.price) * parseInt(qtySelect.value)}</strong>`;
    })

    container
      .querySelector("#close_button")
      .addEventListener("click", closeHandler);

    container.querySelectorAll('span[name="color-swatch"]').forEach(item => {
      item.addEventListener("click", event => {
        container
          .querySelectorAll('span[name="color-swatch"]')
          .forEach(swatches => {
            swatches.classList.remove("color__selected");
          });
        updatedValues["color"] =
          event.target.attributes["data-color-value"].value;
        event.target.classList.add("color__selected");
        
      });
    });
    container.querySelector("#modalEdit").addEventListener('click', (event)=> {
      updatedValues.size = container.querySelector("#sizeSelect").value;
      updatedValues.qty = container.querySelector("#qtySelect").value
      this.dal.saveData(id, updatedValues).then(item => {
        let rowContent = document.querySelector(`#itemrow${item.id}`);
        rowContent.innerHTML = this.template.merchandiseRowGenerator(item,true);
        rowContent.querySelector("#editButton" + item.id).onclick = event => {
          this.openEditModal(event.target.attributes.value.nodeValue);
        };
        closeHandler();
      });
    })

    window.addEventListener("click", clickHandler);
  }
}

// var

// function editModalGenerator(details) {
//   return `<div class="modal"><div class="modal-content">
// <span id="close_button" class="modal-close">X</span>
// <div class="col-12">
//     <div class="col-6 text-center">
//         <ul>
//             <li id="modal__title">${details.title}</li>
//             <li class="modal__price">$ ${details.price}</span></li>
//             <li>
//                 Color <br>
//                 <span class="square__black"></span>
//                 <span class="square__blue"></span>
//             </li>
//             <li>
//                 <select>
//                     <option value="" selected>Size</option>
//                     <option value="S">S</option>
//                     <option value="M">M</option>
//                     <option value="L">L</option>
//                 </select>
//                 <select>
//                     <option value="1" selected>QTY:1</option>
//                     <option value="2">QTY:2</option>
//                     <option value="3">QTY:3</option>
//                     <option value="4">QTY:4</option>
//                 </select>
//             </li>
//             <li>
//                 <button>Edit</button>
//             </li>
//             <li>
//                 <a href="javascript:void(0);"> See product details</a>
//             </li>
//         </ul>
//     </div>
//     <div class="col-6" >
//     <img id="${"modal_image" + details.id}" src='${details.img}' alt="${
//     details.title
//   } image" />
//     </div>
// </div>
// <div class="clearfix"></div>
// </div>
// </div>`;
// }

// function merchandiseRowGenerator(result) {
//   return `
//     <div class="box">
//                 <div class="col-3 col-sm-6">
//                     <img src="${result.img}" class="img" alt="Black tshirt">
//                 </div>
//                 <div class="col-6">
//                     <h5>${result.title}</h5>
//                     <p>Style #: ${result.style}</p>
//                     <p role="contentinfo" >Color: ${result.color}</p>
//                 </div>
//                 <div class="desktop-view">
//                     <div class="col-1">
//                         <p>${result.size}</p>
//                     </div>
//                     <div class="col-1">
//                         <input type="text" name="qty" value="${result.qty}">
//                     </div>
//                     <div class="col-1">
//                         <p>$${result.price}</p>
//                     </div>
//                 </div>
//                 <div class="mobile-view">
//                     <div class="col-sm-12">
//                         <p>Size: ${result.size}</p>
//                     </div>
//                     <div class="col-sm-12">
//                         <p>QTY: <input type="text" name="qty" value="${
//                           result.qty
//                         }"></p>
//                     </div>
//                     <div class="col-sm-12">
//                         <p><strong>$${result.price}</strong></p>
//                     </div>
//                 </div>
//                 <div class="col-6 col-sm-12 action-section">
//                     <div id="${"editButton" + result.id}" value=${result.id}
//                      tabindex="0" role="button" aria-pressed="false">Edit</div>
//                     <div  tabindex="0" role="button" aria-pressed="false">
//                         <span aria-hidden=true>x</span> Remove
//                         </div>
//                     <div tabindex="0" role="button" aria-pressed="false">Save For Later</div>
//                 </div>
//             </div>`;
// }

// init();

// function openModal(id) {
//   var item = ProductList.find(item => item.id === id);
//   var container = document.querySelector("#editModal");
//   container.innerHTML = editModalGenerator(item);

//   container.querySelector("#close_button").addEventListener("click", event => {
//     container.innerHTML = "";
//   });

//   window.onclick = event => {
//     if (event.target == container.childNodes[0]) {
//       container.innerHTML = "";
//     }
//   };
// }
let template = new TemplateGeneratorFactory();
let dal = new DataAccessLayer();
new ShoppingCart(template, dal);
