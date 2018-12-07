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