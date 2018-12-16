 class TemplateGeneratorFactory {
  editModalGenerator(details) {
    return `<div class="modal"><div class="modal-content">
      <span id="close_button" class="modal-close">X</span>
      <div class="col-12">
          <div class="col-6 text-center">
              <ul>
                  <li id="modal__title">${details.title}</li>
                  <li class="modal__price">$ ${details.price}</span></li>
                  <li>
                      Color <br>
                      <span class="square__black color_hover"></span>
                      <span class="square__blue color_hover"></span>
                      <span class="square__pink color_hover"></span>
                  </li>
                  <li>
                      <select>
                          <option value="" selected>Size</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                      </select>
                      <select>
                          <option value="1" selected>QTY:1</option>
                          <option value="2">QTY:2</option>
                          <option value="3">QTY:3</option>
                          <option value="4">QTY:4</option>
                      </select>
                  </li>
                  <li>
                      <button>Edit</button>
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
  merchandiseRowGenerator(result) {
    return `
          <div class="box">
                      <div class="col-3 col-sm-6">
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
                              <input type="text" name="qty" value="${
                                result.qty
                              }">
                          </div>
                          <div class="col-1">
                              <p>$${result.price}</p>
                          </div>
                      </div>
                      <div class="mobile-view">
                          <div class="col-sm-12">
                              <p>Size: ${result.size}</p>
                          </div>
                          <div class="col-sm-12">
                              <p>QTY: <input type="text" name="qty" value="${
                                result.qty
                              }"></p>
                          </div>
                          <div class="col-sm-12">
                              <p><strong>$${result.price}</strong></p>
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
                      </div>
                  </div>`;
  }
}

module.exports = TemplateGeneratorFactory;
