
import ProfileService from './profileService';




export default class ServiceTest {
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

  async updateTest(id) {
      console.log(await this.profileService.update(id));
  }

  async removeTest(id) {
      console.log(await this.profileService.remove(id));
  }
}
//new serviceTest(new ProfileService())
