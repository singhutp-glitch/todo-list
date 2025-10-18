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
    const inputBtnElement=projectDialog.querySelector('.inputProject');
    inputBtnElement.addEventListener('click',()=>{
        const inputElement=projectDialog.querySelector('input');
        projectItem.addProject(inputElement.value); 
        console.log("added "+inputElement.value);
    })

})