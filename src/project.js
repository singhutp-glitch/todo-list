export {projectList}
class project
{
    constructor(title)
    {
        this.title=title;
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
    {}
    projList=[];
    addProject(title)
    {
        this.projList.push(new project(title));
    }
    deleteProject(num)
    {
        this.projList.splice(num,1);
        console.log(this.projList.length);
    }
}