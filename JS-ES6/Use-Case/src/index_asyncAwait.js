class ProfileService {
  constructor() {
    //this.id = 100;
    this.url = "http://localhost:3000/posts";
    this.findAll().then(res => {
        this.id = res.length > 0 ? res[res.length - 1].id : 0})
  }

  async save(name, city) {
    try {
      let profile = {
        name: name,
        city: city,
        id: ++this.id
      };
      let addId = await fetch(this.url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(profile), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      });
      return addId.json();
    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      let result = await fetch(this.url);
      return result.json();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      let result = await fetch(this.url + `/${id}`);
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
      let result = await fetch(this.url + `/${id}`, {
        method: "PATCH", // or 'PUT'
        body: JSON.stringify(profile), // data can be `string` or {object}!
        headers: {
          "Content-Type": "application/json"
        }
      });
      return result.json();
    } catch (error) {
      throw error;
    }
  }

  async remove(id) {
    try {
      let res = await fetch(this.url + `/${id}`, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json"
        }
      });
      return res.json();
    } catch (error) {
      throw error;
    }
  }
}

class serviceTest {
  constructor(pservice = new profileService()) {
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
