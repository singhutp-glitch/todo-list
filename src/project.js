export {projectList}

class idCount
{
    constructor()
    {
        this.count=0;
    }
    getCount()
    {
        this.count++;
        return this.count;
    }

}
class project
{
    constructor(title,projectIdCount)
    {
        this.title=title;
        this.id=projectIdCount.getCount();

    }
    taskList=[];
    addTask(title,description, dueDate ,priority)
    {
        this.taskList.push(new task(title,description, dueDate ,priority));
    }
    deleteTask(num)
    {
        this.taskList.splice(num,1);
        console.log(this.taskList.length);
    }
    
}
class task
{
    constructor(title,description, dueDate ,priority)
    {
        this.title=title;
        this.description=description;
        this.dueDate=dueDate;
        this.priority=priority;
    }
    showTask()
    {
        console.log(this.title);
        console.log(this.description);
        console.log(this.dueDate);
        console.log(this.priority);
    }
}
class projectList
{
    constructor()
    {
        this.projectIdCount=new idCount();   
        if (storageAvailable("localStorage")) 
        {
            console.log('// Yippee! We can use localStorage awesomeness')
            if (!localStorage.getItem("active")) {
                this.populateStorage();
            } else {
                this.loadData();
            }
            
        }
        else 
        {
            console.log('// Too bad, no localStorage for us');
        }   
    }
    projects=[];
    populateStorage() 
    {
        localStorage.setItem("projects", JSON.stringify(this.projects));
        localStorage.setItem("active", "true");

        this.loadData();
    }
    loadData() 
    {
        this.projects = JSON.parse(localStorage.getItem("projects"));
        for(let projectElement of this.projects)
        {
            Object.setPrototypeOf(projectElement,project.prototype);
            for(let taskElement of projectElement.taskList)
            {

            Object.setPrototypeOf(taskElement,task.prototype);
            }
        }

        console.log(this.projects);

    }
    addProject(title)
    {
        console.log(this.projectIdCount.getCount());
        this.projects.push(new project(title,(this.projectIdCount)));
    }
    deleteProject(num)
    {
        this.projects.splice(num,1);
        console.log(this.projects.length);
    }
}
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name === "QuotaExceededError" &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}