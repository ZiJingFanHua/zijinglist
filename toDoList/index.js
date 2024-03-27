const memorandumBtn = document.querySelector("#memorandum-button");
//新增任务
const addTaskBtn =  document.querySelector("#add-task-btn");
//取消添加任务
const cacelTaskBtn = document.querySelector("#add-cancel-btn");
//确认添加任务
const confirmTaskBtn = document.querySelector("#add-confirm-btn");
const tasks = [];
addTaskBtn.addEventListener('click',()=>{
  const card = document.querySelector('#card-inner');
  const addBtn = document.querySelector('#add-task-btn');
  const cancelBtn = document.querySelector('#add-cancel-btn');
  const confirmBtn = document.querySelector('#add-confirm-btn');
  card.classList.add('card-inner-active');
  addBtn.classList.remove('btn-show');
  addBtn.classList.add('btn-hidden');
  addBtn.classList.remove('btn-show');
  cancelBtn.classList.remove('btn-hidden');
  confirmBtn.classList.remove('btn-hidden');
  cancelBtn.classList.add('btn-show');
  confirmBtn.classList.add('btn-show');
})

cacelTaskBtn.addEventListener('click',()=>{
  const card = document.querySelector('#card-inner');
  const addBtn = document.querySelector('#add-task-btn');
  const cancelBtn = document.querySelector('#add-cancel-btn');
  const confirmBtn = document.querySelector('#add-confirm-btn');
  const inputValue = document.querySelector('#new-task-message');
  //清空输入框
  inputValue.value = '';
  card.classList.remove('card-inner-active');
  addBtn.classList.remove('btn-hidden');
  addBtn.classList.add('btn-show');
  cancelBtn.classList.add('btn-hidden');
  confirmBtn.classList.add('btn-hidden');
  cancelBtn.classList.remove('btn-show');
  confirmBtn.classList.remove('btn-show');
 
})


confirmTaskBtn.addEventListener('click',()=>{
  const card = document.querySelector('#card-inner');
  const addBtn = document.querySelector('#add-task-btn');
  const cancelBtn = document.querySelector('#add-cancel-btn');
  const confirmBtn = document.querySelector('#add-confirm-btn');
  const inputValue = document.querySelector('#new-task-message');
  //获取任务并清空输入框
  const taskValue = inputValue.value;
  tasks.push(taskValue);
  inputValue.value = '';
  card.classList.remove('card-inner-active');
  addBtn.classList.remove('btn-hidden');
  addBtn.classList.add('btn-show');
  cancelBtn.classList.add('btn-hidden');
  confirmBtn.classList.add('btn-hidden');
  cancelBtn.classList.remove('btn-show');
  confirmBtn.classList.remove('btn-show');
 
})
memorandumBtn.addEventListener('click',()=>{
  alert("sd")
})