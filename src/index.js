import "./styles.css";
console.log('hello');

class task
{
    constructor(title)
    {
        this.title=title;
    }
    showTask()
    {
        console.log(this.title);
    }
}

//main
const task1=new task("test prep");
task1.showTask();