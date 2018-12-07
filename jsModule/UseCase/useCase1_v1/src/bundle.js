(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class DataAccessLayer {
    constructor () {

    }

    getWrapper(url) {
        return fetch(url);
    }

    postWrapper(url, profile) {
        return fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(profile), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }
          });
    }

    patchWrapper(url, profile){
        return fetch(url, {
            method: "PATCH", // or 'PUT'
            body: JSON.stringify(profile), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json"
            }
          });
    }

    deleteWrapper(url) {
        return fetch(url, {
            method: "DELETE", // or 'PUT'
            headers: {
              "Content-Type": "application/json"
            }
          });
    }
}

module.exports = DataAccessLayer;
},{}],2:[function(require,module,exports){
const ServiceTest = require('./serviceTest');

const inst = new ServiceTest();


//inst.findByIdTest(instance.id);
//inst.updateTest(instance.id, 'Batman', 'Gowtham');
inst.findAllTest();
inst.saveTest("Superman", "Metropolis").then(instance => {
  inst.findByIdTest(instance.id);
  inst.updateTest(instance.id, "Batman", "Gowtham");
  inst.removeTest(instance.id);
});
},{"./serviceTest":5}],3:[function(require,module,exports){
class Profile {
    constructor(name, city, id) {
        this.name = name;
        this.city = city;
        this.id = id;
    }
}

module.exports = Profile;
},{}],4:[function(require,module,exports){
const Profile = require('./profile');
const DataAccessLayer = require('./dal');

class ProfileService {
     constructor(dataAccessLayer = new DataAccessLayer()) {
      //this.id = 100;
      this.dal = dataAccessLayer;
      this.url = "http://localhost:3000/posts";
  
    }
  
    async save(name, city) {
      try {
        let res = await this.findAll();
        this.id = res.length > 0 ? res[res.length - 1].id : 0;
        let profile = new Profile(name, city, ++this.id);
        let addId = await this.dal.postWrapper(this.url, profile);
        return addId.json();
      } catch (error) {
        throw error;
      }
    }
  
    async findAll() {
      try {
        let result = await this.dal.getWrapper(this.url);
        return result.json();
      } catch (error) {
        throw error;
      }
    }
  
    async findById(id) {
      try {
        let result = await this.dal.getWrapper(this.url + `/${id}`);
        return result.json();
      } catch (error) {
        throw error;
      }
    }
  
    async update(id, name, city) {
      try {
        let profile = {
          name: name,
          city: city,
          id: id
        };
        let result = await this.dal.patchWrapper(this.url + `/${id}`, profile);
        return result.json();
      } catch (error) {
        throw error;
      }
    }
  
    async remove(id) {
      try {
        let res = await this.dal.deleteWrapper(this.url + `/${id}`);
        return res.json();
      } catch (error) {
        throw error;
      }
    }
  }

  module.exports = ProfileService;
},{"./dal":1,"./profile":3}],5:[function(require,module,exports){

const ProfileService= require('./profileService');




class ServiceTest {
  constructor(pservice = new ProfileService()) {
    this.profileService = pservice;
  }
  async saveTest(name, city) {
    return await this.profileService.save(name, city);
  }

  async findAllTest() {
     console.log(await this.profileService.findAll());
  }

  async findByIdTest(id) {
      console.log(await this.profileService.findById(id));
  }

  async updateTest(id, name, city) {
      console.log(await this.profileService.update(id, name, city));
  }

  async removeTest(id) {
      console.log(await this.profileService.remove(id));
  }
}
//new serviceTest(new ProfileService())
module.exports = ServiceTest;

},{"./profileService":4}]},{},[2]);
