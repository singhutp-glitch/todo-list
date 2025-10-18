import "./styles.css";
import { projectList } from "./project";

class domStuff
{
    constructor(projectItem)
    {
        for( let project of projectItem.projects)
        {
            const projectCard=document.createElement('div');
            projectCard.textContent=project.title;
            projectsDiv.appendChild(projectCard)
        }
        this.displayProject(projectItem.projects[0]);

    }
    displayProject(project)
    {
        if(project.taskList.length===0)
        {
            tasksDiv.textContent="NO Tasks";
        }
        else
        {
            for(let task of projectItem.projects[0].taskList)
            {
                const taskCard=document.createElement('div');
                taskCard.textContent=task.title;
                tasksDiv.appendChild(taskCard);
            }
        }
    }
}

//main

const projectsDiv=document.querySelector('div.projects');
const tasksDiv=document.querySelector('div.tasks');
const projectItem=new projectList();
projectItem.addProject("NO PROJECT");
projectItem.projects[0].addTask("test prep","maths test","1-1-25",1)
projectItem.projects[0].taskList[0].showTask();
const domItem=new domStuff(projectItem);
