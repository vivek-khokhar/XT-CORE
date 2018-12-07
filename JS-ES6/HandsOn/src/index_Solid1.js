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

class ProfileService {
  constructor(DataAccessLayer) {
    //this.id = 100;
    this.url = "http://localhost:3000/posts";
    this.findAll().then(res => {
        this.id = res.length > 0 ? res[res.length - 1].id : 0});
    this.dal = new DataAccessLayer();

  }

  async save(name, city) {
    try {
      let profile = {
        name: name,
        city: city,
        id: ++this.id
      };
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

class serviceTest {
  constructor(pservice = new this.profileService(new DataAccessLayer())) {
    this.profileService = pservice;
  }
  async saveTest(name, city) {
    console.log(await this.profileService.save(name, city));
  }

  async findAllTest() {
     console.log(await this.profileService.findAll());
  }

  async findByIdTest(id) {
      console.log(await this.profileService.findById(id));
  }

  async updateTest(id) {
      console.log(await this.profileService.update(id));
  }

  async removeTest(id) {
      console.log(await this.profileService.remove(id));
  }
}
//new serviceTest(new ProfileService())
