import "./styles.css";
import { projectList } from "./project";



//main
const listOfProjects=new projectList();
listOfProjects.addProject("midsem");
listOfProjects.projList[0].addTask("test prep","maths test","1-1-25",1)
listOfProjects.projList[0].taskList[0].showTask();
listOfProjects.projList[0].deleteTask(0);
listOfProjects.deleteProject(0);