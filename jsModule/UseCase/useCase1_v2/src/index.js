import ServiceTest from "./serviceTest";

const inst = new ServiceTest();


//inst.findByIdTest(instance.id);
//inst.updateTest(instance.id, 'Batman', 'Gowtham');
inst.findAllTest();

inst.saveTest("Superman", "Metropolis").then(instance => {
    inst.findByIdTest(instance.id);
    inst.updateTest(instance.id, "Batman", "Gowtham");
    inst.removeTest(instance.id);
  });
