 export default class TemplateGeneratorFactory {
    selectedColor(color) {
        switch (color) {
            case "green":
                return "color__selected";
            case "black":
                return "color__selected";
            case "pink":
                return "color__selected";
            case "blue":
                return "color__selected";
        }
    }
  editModalGenerator(details) {
    return `<div class="modal"><div class="modal-content">
      <span id="close_button" class="modal-close">X</span>
      <div class="col-12">
          <div class="col-6 text-center">
              <ul>
                  <li id="modal__title">${details.title}</li>
                  <li  class="modal__price" id ="modelqty${details.id}"><strong>$${parseFloat(details.price) * parseInt(details.qty)}</strong></li>
                  <li>
                      Color <br>
                      <span name="color-swatch" data-color-value="black" class="color__square square__black ${details.color === "black" ? "color__selected" : ""}"></span>
                      <span name="color-swatch" data-color-value="blue" class="color__square square__blue ${details.color === "blue" ? "color__selected" : ""}"></span>
                      <span name="color-swatch" data-color-value="pink" class="color__square square__pink ${details.color === "pink" ? "color__selected" : ""}"></span>
                      <span name="color-swatch" data-color-value="green" class="color__square square__green ${details.color === "green" ? "color__selected" : ""}"></span>
                  </li>
                  <li>
                      <select id ="sizeSelect">
                          <option value="" selected>Size</option>
                          <option value="S" ${details.size === "S" ? "selected" : ""}>S</option>
                          <option value="M" ${details.size === "M" ? "selected" : ""}>M</option>
                          <option value="L" ${details.size === "L" ? "selected" : ""}>L</option>
                      </select>
                      <select id ="qtySelect">
                          <option value="1" ${+details.qty === 1 ? "selected" : ""}>QTY:1</option>
                          <option value="2" ${+details.qty === 2 ? "selected" : ""}>QTY:2</option>
                          <option value="3" ${+details.qty === 3 ? "selected" : ""}>QTY:3</option>
                          <option value="4" ${+details.qty === 4 ? "selected" : ""}>QTY:4</option>
                      </select>
                  </li>
                  <li>
                      <button role="button" id="modalEdit">Edit</button>
                  </li>
                  <li>
                      <a href="javascript:void(0);"> See product details</a>
                  </li>
              </ul>
          </div>
          <div class="col-6" >
          <img id="${"modal_image" + details.id}" src='${details.img}' alt="${
      details.title
    } image" />
          </div>
      </div>
      <div class="clearfix"></div>
      </div>
      </div>`;
  }
  merchandiseRowGenerator(result, withOutWrapper) {
      let content = `<div class="col-3 col-sm-6">
      <img src="${
        result.img
      }" class="img" alt="Black tshirt">
  </div>
  <div class="col-6">
      <h5>${result.title}</h5>
      <p>Style #: ${result.style}</p>
      <p role="contentinfo" >Color: ${result.color}</p>
  </div>
  <div class="desktop-view">
      <div class="col-1">
          <p>${result.size}</p>
      </div>
      <div class="col-1">
          <input type="text" data-Id="${result.id}" name="qty" readonly value="${
            result.qty
          }">
      </div>
      <div class="col-1">
          <p id="price${result.id}" data-price="${result.price}"><strong>$${parseFloat(result.price) * parseFloat(result.qty)}</strong></p>
      </div>
  </div>
  <div class="mobile-view">
      <div class="col-sm-12">
          <p>Size: ${result.size}</p>
      </div>
      <div class="col-sm-12">
          <p>QTY: <input type="text"data-Id="${result.id}" name="qty"  value="${
            result.qty
          }"></p>
      </div>
      <div class="col-sm-12">
          <p id="price${result.id}" data-price="${result.price}"><strong>$${parseFloat(result.price) * parseFloat(result.qty)}</strong></p>
      </div>
  </div>
  <div class="col-6 col-sm-12 action-section">
      <div id="${"editButton" + result.id}" value=${
result.id
} 
       tabindex="0" role="button" aria-pressed="false">Edit</div>
      <div  tabindex="0" role="button" aria-pressed="false">
          <span aria-hidden=true>x</span> Remove
          </div>
      <div tabindex="0" role="button" aria-pressed="false">Save For Later</div>
  </div>`
    return  !withOutWrapper ? `
          <div id="itemrow${result.id}" class="box">
                     ${content} 
                  </div>`:
                  content;
  }
}
