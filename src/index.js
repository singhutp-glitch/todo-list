import "./styles.css";
console.log('hello');
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

//main
const project1=new project("midsem");
project1.addTask("test prep","maths test","1-1-25",1);
project1.taskList[0].showTask();
