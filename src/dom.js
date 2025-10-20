export {domStuff}

class domStuff
{
    currentProjectId;
    constructor(projectItem)
    {
        for( let project of projectItem.projects)
        {
            this.displayNewProject(project);

        }
        // this.displayProject(projectItem.projects[0]);
        

    }
    getTaskDetail()
    {
        const taskTitleElement =document.querySelector('input#taskTitle');
        const taskDescriptionElement =document.querySelector('input#taskDescription');
        const taskDateElement =document.querySelector('input#Duedate');
        const taskPriorityElement =document.querySelector('input#priority');
        const taskTitle=taskTitleElement .value;
        const taskDescription=taskDescriptionElement.value;
        const taskDate=taskDateElement.value;
        const taskPriority=taskPriorityElement.value;
        return {taskTitle,taskDescription,taskDate,taskPriority};
    }
    remove(element)
    {
        element.remove();
    }
    getcurrentProjectId()
    {
        return this.currentProjectId;
    }
    getProjectTitle()
    {
        const inputElement=document.querySelector('input#projectTitle');
        let value=inputElement.value; 
        inputElement.value="";
        return value;
    }
    showTaskDialog()
    {
        const taskDialog=document.querySelector('dialog#newTask');
        taskDialog.showModal();
    }
    
    showProjectDialog()
    {

        const projectDialog=document.querySelector('dialog#newProject');
        projectDialog.showModal();
    }
    displayNewProject(project)
    {
        const projectCard=document.createElement('div');
        const projectName=document.createElement('div');
        const deleteBtn=document.createElement('button');
        projectName.classList.add('projectCard');
        deleteBtn.classList.add('deleteProject');
        projectCard.classList.add('projectCardUp');
        projectName.textContent=project.title;
        deleteBtn.textContent="Delete";
        projectCard.appendChild(projectName);
        projectCard.appendChild(deleteBtn);
        projectsDiv.appendChild(projectCard);
    }
    displayNewTask(task)
    {
        const taskCard=document.createElement('div');
        const detailCard=document.createElement('div');
        const taskName=document.createElement('div');
        const taskDescription=document.createElement('div');
        const taskDate=document.createElement('div');
        const taskPriority=document.createElement('div');
        const deleteBtn=document.createElement('button');
        detailCard.classList.add('taskCard');
        deleteBtn.classList.add('deleteTask');
        taskCard.classList.add('taskCardUp');
        deleteBtn.textContent="DONE";
        taskName.textContent="Title: "+task.title;
        taskDescription.textContent="Description: "+task.description;
        taskDate.textContent="Duedate: "+task.dueDate;
        taskPriority.textContent="Priority: "+task.priority;
        detailCard.appendChild(taskName);
        detailCard.appendChild(taskDescription);
        detailCard.appendChild(taskDate);
        detailCard.appendChild(taskPriority);
        taskCard.appendChild(detailCard);
        taskCard.appendChild(deleteBtn);
        tasksDiv.appendChild(taskCard);
    }
    cleanTaskDiv()
    {
        tasksDiv.innerHTML="";
        this.currentProjectId=-1;
    }
    
    displayProject(project)
    {
        tasksDiv.innerHTML="";
        this.currentProjectId=project.id;
        const newTaskBtn=document.createElement('button');
        newTaskBtn.textContent="Add Task";
        newTaskBtn.classList.add('taskBtn');
        tasksDiv.appendChild(newTaskBtn);
        if(project.taskList.length===0)
        {
            // tasksDiv.textContent+="NO Tasks";
        }
        else
        {
            for(let task of project.taskList)
            {
                this.displayNewTask(task);
            }
        }
    }
}

const projectsDiv=document.querySelector('div.projects');
const tasksDiv=document.querySelector('div.tasks');