export {domStuff}

class domStuff
{
    constructor(projectItem)
    {
        for( let project of projectItem.projects)
        {
            this.displayNewProject(project);

        }
        this.displayProject(projectItem.projects[0]);
        

    }
    getProjectTitle()
    {
        const inputElement=document.querySelector('input#projectTitle');
        let value=inputElement.value; 
        inputElement.value="";
        return value;
    }

    
    showDialog()
    {

        const projectDialog=document.querySelector('dialog#newProject');
        projectDialog.showModal();
    }
    displayNewProject(project)
    {
        const projectCard=document.createElement('div');
        projectCard.textContent=project.title;
        projectsDiv.appendChild(projectCard)
    }
    
    displayProject(project)
    {
        const newTaskBtn=document.createElement('button');
        newTaskBtn.setAttribute('id',project.id);
        newTaskBtn.textContent="Add Task";
        newTaskBtn.classList.add('taskBtn');
        tasksDiv.appendChild(newTaskBtn);
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