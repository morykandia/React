import React from "react";
import ToDoList from "./ToDoList";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import AddTask from "./AddTask";
import initialData from "../initialData";

class App extends React.Component{
   
     render(){
        
        return (
            <section id="todo">
                <Router>
                    <Switch>
                        <Route path="/add-task" component={AddTask}/>
                        <Route path="/:filter?" render ={(props) => <ToDoList {...props} tasks= {initialData}/>}/>
                    </Switch>
                    <NavBar/>
                </Router>
            
               
                
            </section>

        );
    }
}

export default App;