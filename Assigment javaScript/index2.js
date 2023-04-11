//1.

let add = 5;
function print(add2){
    return function(){
        console.log(add+add2)
    }
}
let innerFunction = print(5);
innerFunction()

// 2
let arr = [64, 34, 25, 12];

function recursiveSort(data,count){
    if(count==1){
        return;
    }
   // let currentElement = 0;
    for(let i=0; i< arr.length; i++){
        if(data[i]==arr.length){
            return true
        }
        else{
            return false
        }
    }
    recursiveSort(data,count-1)
}

recursiveSort(arr, arr.length);
console.log(arr)

//3
function addPara(){
    let parag = document.getElementById('para');
    parag.innerHTML = 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.'
}

addPara();


//4 

let element =  document.getElementById('list');
let text = document.createTextNode('purple');
element.appendChild(text);

//5
function addBackground(){
    let coloradd = document.getElementById('paraTwo');
    coloradd.innerHTML = '<h1>JavaScript</h1>'
    coloradd.style.backgroundColor = '#FFC033';
    coloradd.style.color = '#fff';
}
addBackground()



//6
let local = localStorage;

const setData = ()=>{
    let data ={
        name:'aliya',
        cnic:12344,
        location:'karachi',
        email:'demo@gmail.com'
    };
    local.setItem('user-info', JSON.stringify(data))
};
setData()


// 7
const getData =()=>{
    let data = local.getItem('user-info');
    console.log(data)
}
getData()


//8 
let students = [];
function studentResult() {
  let result = {
    name: prompt("Enter Name"),
    rollNo: +prompt("Enter Roll no"),
    subject: prompt("Enter Subject Name"),
    section: prompt("Enter Your Section"),
  };
  students.push(result);
  console.log(students);
  let string = JSON.stringify(students);
  localStorage.setItem("students", string); 
}

studentResult()