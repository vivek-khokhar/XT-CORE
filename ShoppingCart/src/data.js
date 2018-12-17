export default class DataAccessLayer {
  constructor() {
    this.dataList = [
      {
        id: 1,
        title: "Solid black cotton tshirt",
        style: "MS13KT1906",
        color: "black",
        size: "S",
        price: "11.00",
        qty: "1",
        img: "./images/balloon-sq1.jpg"
      },
      {
        id: 2,
        title: "Solid white cotton tshirt",
        style: "MS13KT1906",
        color: "blue",
        size: "M",
        price: "15.00",
        qty: "1",
        img: "./images/balloon-sq2.jpg"
      },
      {
        id: 3,
        title: "Solid pink cotton tshirt",
        style: "MS13KT1906",
        color: "pink",
        size: "L",
        price: "19.00",
        qty: "2",
        img: "./images/balloon-sq3.jpg"
      },
      {
        id: 4,
        title: "Solid green cotton tshirt",
        style: "MS13KT1906",
        color: "green",
        size: "L",
        price: "13.00",
        qty: "1",
        img: "./images/balloon-sq4.jpg"
      }
    ];
  }
  getData() {
    return Promise.resolve(this.dataList);
  }

  saveData(id, value) {
    this.dataList.forEach(element => {
      if(parseInt(element.id) === parseInt(id)) {

        element = Object.assign(element, value);
      }
    });
    return Promise.resolve(this.dataList.find(item => item.id === +id));
  }
}
