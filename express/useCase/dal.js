const mockData = require('./mockData');


class DataAccessLayer{
    constructor(data = new mockData()) {
        this.dbConnection = data;
        this.profiles = this.dbConnection.profiles;
    }

    async getAll() {
        try {
            return await  this.profiles;
            
        } catch (error) {
            throw {text : "some error occured", error : error};
        }
    }

    async getByID(id) {
        try {
            //console.log(JSON.stringify(this.profiles.filter(profile => profile.id === id)));
            return await this.profiles.find(profile => +profile.id === +id);
        } catch (error) {
            throw {text : "some error occured", error : error};
        }
        
    }

    async saveProfile (profile) {
        try {
            profile.id = this.profiles[this.profiles.length - 1].id + 1;
            this.profiles.push(profile);
            return await this.profiles.length;  
        } catch (error) {
            throw {text : "some error occured", error : error};
        }
    }

    async updateProfile(profile) {
        this.profiles.forEach(element => {
            if(element.id === profile.id) {
                element.name = profile.name;
                element.city = profile.city;
            }
        });

        return await profile;
    }

    async removeProfile(id) {
        let index;
         this.profiles.forEach((profile, indx) => {
            if(+profile.id === +id) {
                index = indx;
            }
        });

        return await  index ? this.profiles.splice(index, 1) : index;

    }
}
module.exports = DataAccessLayer;