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
    domItem.showProjectDialog();
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
        domItem.showTaskDialog();
    }   
})
const taskInputBtn=document.querySelector('.inputTask');
taskInputBtn.addEventListener('click',(event)=>{
    console.log('add task');
   
    const project=projectItem.projects.find((element)=>{return (element.id===domItem.getcurrentProjectId())});
    const taskDetail=domItem.getTaskDetail();
    project.addTask(taskDetail.taskTitle,taskDetail.taskDescription,taskDetail.taskDate,taskDetail.taskPriority);
    domItem.displayNewTask(project.taskList[project.taskList.length-1]);
})
const projectsDiv=document.querySelector('div.projects');
projectsDiv.addEventListener('click',(event)=>{
    console.log(event.target.parentElement.firstElementChild);
    if(event.target.classList.value==="projectCard")
    {
        const project=projectItem.projects.find((element)=>{return(element.title===event.target.textContent)})
        domItem.displayProject(project);
    }
    else if(event.target.classList.value==="deleteProject")
    {
        const nameElement=event.target.parentElement.firstElementChild;
        const projectIndex=projectItem.projects.findIndex((element)=>{return(element.title===nameElement.textContent)});
        if(projectItem.projects[projectIndex].id===domItem.getcurrentProjectId())
        {
            domItem.cleanTaskDiv();       
        }
        console.log(projectIndex);
        projectItem.deleteProject(projectIndex)
        domItem.remove(event.target.parentElement);
       

    }
})
