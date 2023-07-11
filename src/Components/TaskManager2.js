import { useState } from "react";

function TaskManager2() {

    let [Input, setInput] = useState('');
    let [Tasks, setTasks] = useState([]);

    function onInputChange(event) {
        setInput(event.target.value)

    }

    function saveBtn() {
        if (Input === "") {
            alert("Please insert a name for your task");
            return;
        }

        setTasks(oldTasks => oldTasks)




    }

    return (
        <div className="container">
            <div className="form-group my-3">
                <label> Enter a task please </label>
                <input onChange={onInputChange} className="form-control my-3" placeholder="Enter a name" />
                <button onClick={saveBtn} className="btn btn-primary my-1">Save</button>
            </div>
            <hr />
            <div>
                <h3>Tasks List:</h3>
                {/* <ul>{Tasks.map((item, index => <li key={item}> {item}</li>)}</ul> */}
            </div>
        </div>
    );
}

export default TaskManager2

