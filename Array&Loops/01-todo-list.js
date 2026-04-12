const todoList = [{
    name: 'make dinner', 
    dueDate: '2022-12-22',
    name: 'wash dishes',
    },
   {
    name: 'wash dishes',
    dueDate: '2022-12-22'
   }
];

renderTodoList();
function renderTodoList(){

    let todoListHTML = '';
    for(let i=0; i<todoList.length; i++){
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject; //destructing
        const html = `
        <div>${name} </div> 
        <div>${dueDate} </div>
        <div> <button onclick="
         todoList.splice(${i},1); 
         renderTodoList();
        " class="delete-todo-btn">Delete</button></div>

        `; /*this is the button to delete using .splice arr method .splice(index no, value)*/
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}
 
function addTodo(){
   const inputElement =  document.querySelector('.js-name-input');
   
   const name = inputElement.value;
   const dateInputElement = document.querySelector('.js-date-input');
   const dueDate = dateInputElement.value;
   todoList.push({
//    name: name,
//    dueDate: dueDate
     name,
     dueDate 
     /*this is used when if the property and varaible name is same we can just type once 
       It is shorthand property syntax
     */
   }); // it add the value in arr
//    console.log(todoList); //it print entire arr in console

   inputElement.value = ''; //it does make empty string value(Reset) when use click add btn
   renderTodoList();
}