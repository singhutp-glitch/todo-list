import "./styles.css";
import { projectList } from "./project";
import { domStuff} from "./dom.js"
//main

const projectItem=new projectList();
projectItem.addProject("NO PROJECT");
projectItem.projects[0].addTask("test prep","maths test","1-1-25",1)
projectItem.projects[0].taskList[0].showTask();

const domItem=new domStuff(projectItem);
const tasksDiv=document.querySelector('div.tasks');
const projectBtn=document.querySelector('.projectBtn');
projectBtn.addEventListener("click",(event)=>{

    console.log("add project");
    domItem.showDialog();
})
const inputBtnElement=document.querySelector('.inputProject');
inputBtnElement.addEventListener('click',()=>{
    let value=domItem.getProjectTitle();
    projectItem.addProject(value);
    domItem.displayNewProject(projectItem.projects[projectItem.projects.length-1]);
})
tasksDiv.addEventListener("click",(event)=>{
    if(event.target.classList.value==="taskBtn")
    {
        const taskDialog=document.querySelector('dialog#newTask');
        taskDialog.showModal();
    }
})