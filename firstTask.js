const parser = new DOMParser();

const xmlString = `<list>
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
</list>`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

let result = [];

const students = xmlDOM.querySelectorAll("student");

for (i = 0; i < students.length; i++) {
  const name = students[i].querySelector("name");
  const nameFirst = name.querySelector("first");
  const nameSecond = name.querySelector("second");
  const age = students[i].querySelector("age");
  const prof = students[i].querySelector("prof");
  
  const langAttr = name.getAttribute('lang');

  const subject = {
    name: nameFirst.textContent + ' ' + nameSecond.textContent,
    age: Number(age.textContent),
    prof: prof.textContent,
    lang: langAttr
  };

  result.push(subject);
}

console.log(result);

students.forEach(node=>{
  let student={
    name:'${node.querySelector("first").textContent}${node.querySelector("second").textContent}',
    age:node.querySelector("age").textContent,
    prof:node.querySelector("prof").textContent,
    lang:node.querySelector("name").getAttribute("lang")
  }

  result.push(student);
});

console.log(result);

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const nameFirstNode = nameNode.querySelector("first");
const nameSecondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");

const langAttr = nameNode.getAttribute('lang');

const result = {
    name: nameFirstNode.textContent + ' ' + nameSecondNode.textContent,
    age: Number(ageNode.textContent),
    prof: profNode.textContent,
    lang: langAttr
};
console.log('result', result);