const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// console.log('jsonString', jsonString);
let list = [];
const data = JSON.parse(jsonString);
// console.log('data', data);
const array = Array.from(data.list); 
const person = data.list;
// console.log('array', array);

array.forEach(item => {
 const newPerson = {
      name: item.name,
      age: Number(item.age),
      prof: item.prof,
    }
    list.push(newPerson); 
});

console.log('list', list);