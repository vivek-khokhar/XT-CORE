Promise.race([
  new Promise((resolve, reject) => setTimeout(_ => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(_ => reject("race error"), 100))
])
  .then(res => console.log(res))
  .catch(res => console.log(res));

const users = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" }
];
 console.log(typeof users);

 const r = JSON.stringify(users);

 console.log(typeof r);

 const product = {
     pid: 1
 }

 

 // what is type of pid's value ? => number
 // what is type of pid key ? => can be string, or symbol