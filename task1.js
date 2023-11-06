const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

let list = [];
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let nodeList = xmlDOM.querySelectorAll('student'); 
const array = Array.from(nodeList); 

nodeList.forEach(item => {
  let nameNode = item.querySelector("name");
  let firstNode = nameNode.querySelector("first").textContent;
  let secondNode = nameNode.querySelector("second").textContent;
  let studentName = firstNode + " " + secondNode;

  let langAttr = nameNode.getAttribute('lang');
    newStudent = {
      name: studentName,
      lang: langAttr,
      prof: item.querySelector('prof').textContent,
      age: item.querySelector('age').textContent,
    }
    list.push(newStudent); 
});
console.log('list', list);