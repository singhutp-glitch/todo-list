export {domStuff}

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
            for(let task of project.taskList)
            {
                const taskCard=document.createElement('div');
                taskCard.textContent=task.title;
                tasksDiv.appendChild(taskCard);
            }
        }
    }
}

const projectsDiv=document.querySelector('div.projects');
const tasksDiv=document.querySelector('div.tasks');