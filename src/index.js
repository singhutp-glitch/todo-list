import "./styles.css";
import { projectList } from "./project";
import { domStuff} from "./dom.js"
//main

const projectItem=new projectList();
projectItem.addProject("NO PROJECT");
projectItem.projects[0].addTask("test prep","maths test","1-1-25",1)
projectItem.projects[0].taskList[0].showTask();

const domItem=new domStuff(projectItem);
const projectBtn=document.querySelector('.projectBtn');
projectBtn.addEventListener("click",(event)=>{

    console.log("add project");
    const projectDialog=document.querySelector('dialog#newProject');
    projectDialog.showModal();
})
const inputBtnElement=document.querySelector('.inputProject');
inputBtnElement.addEventListener('click',()=>{
    const inputElement=document.querySelector('input#projectTitle');
    projectItem.addProject(inputElement.value); 
    domItem.displayNewProject(projectItem.projects[projectItem.projects.length-1]);
    console.log("added "+inputElement.value);
    inputElement.value="";
})