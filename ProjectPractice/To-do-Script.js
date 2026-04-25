const TodoList = [{
    id: 0,
    name: 'Default',
    PhoneNo: 0,
    Course: 'Default'
}
];
renderTodoList();
// function renderTodoList(){
    
//     let todoListHtml = '';
//     for(let i =0; i<TodoList.length; i++){
//         const TodoObject = TodoList[i];
//         const {id,name,PhoneNo,Course} = TodoObject;
//         const matchName = name.toLowerCase().includes(searchValue);

//         const matchCourse = searchCourse === "all" || searchCourse === Course;

//         const Html = `
//            <div>${id}</div>
//            <div>${name}</div>
//            <div>${PhoneNo}</div>
//            <div>${Course}</div>
//            <div><button onclick='deleteTodo(${i})'>Delete</button></div>
//         `;
//          todoListHtml += Html;
//     }

//     document.querySelector('.js-todo-list').innerHTML = todoListHtml;

// }
function renderTodoList(){

    const searchValue = document.querySelector("#search").value.toLowerCase();
    const searchCourse = document.querySelector("#filterCourse").value;
    
    let todoListHtml = '';
    for(let i =0; i<TodoList.length; i++){
        const TodoObject = TodoList[i];
        const {id,name,PhoneNo,Course} = TodoObject;
        const matchName = name.toLowerCase().includes(searchValue);

        const matchCourse = searchCourse === "all" || searchCourse === Course;

      if(matchName && matchCourse){
            const Html = `
               <div>${id}</div>
               <div>${name}</div>
               <div>${PhoneNo}</div>
               <div>${Course}</div>
               <div><button onclick='deleteTodo(${i})'>Delete</button></div>
            `;
            todoListHtml += Html;
        }
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHtml;

}
function deleteTodo(index){
    TodoList.splice(index, 1);
    renderTodoList();
}
function addTodo (){
    const InputId = document.querySelector('#Id');
    const Id = Number(InputId.value);

    const InputName = document.querySelector('#name');
    const Name = InputName.value;

    const InputPhone = document.querySelector('#Contact');
    const Phone = Number(InputPhone.value);

    const InputCourse = document.querySelector('#Course');
    const Course = InputCourse.value;

    TodoList.push({
       id: Id,
       name: Name,
       PhoneNo: Phone,
       Course: Course
    });
    
    InputId.value = '';
    InputName.value = '';
    InputPhone.value = '';
    InputCourse.value = '';
    renderTodoList();

}