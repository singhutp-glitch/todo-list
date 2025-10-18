import "./styles.css";
import { projectList } from "./project";
import { domStuff} from "./dom.js"
//main

const projectItem=new projectList();
projectItem.addProject("NO PROJECT");
projectItem.projects[0].addTask("test prep","maths test","1-1-25",1)
projectItem.projects[0].taskList[0].showTask();

const domItem=new domStuff(projectItem);