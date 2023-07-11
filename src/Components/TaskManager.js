import React from "react";

const TaskManager = () => {
    const [taskName, setTaskName] = React.useState("");
    const [taskDeadline, setTaskDeadline] = React.useState("");
    const [taskNote, setTaskNote] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };

    const handleTaskDeadlineChange = (e) => {
        setTaskDeadline(e.target.value);
    };

    const handleTaskNotesChange = (e) => {
        setTaskNote(e.target.value);
    };

    const handleSaveButtonClick = () => {
        if (!taskName) {
            alert("Please enter a name for your task");
            return;
        }

        setTasks((prevTasks) => [...prevTasks, { name: taskName, deadline: taskDeadline, note: taskNote }]);

        setTaskName("");
        setTaskDeadline("");
        setTaskNote("");
    };

    return (
        <div className="container" style={{ marginTop: "75px" }}>
            <div className="container-fluid d-flex justify-content-between">
                <h3>Tasks:</h3>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#taskModal">
                    Enter your Todo
                </button>
            </div>
            <div className="modal fade" id="taskModal" tabIndex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="taskModalLabel">New task.</h1>
                            <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row row-cols-2">
                                <div className="col mb-3 w-50 p-3">
                                    <label htmlFor="taskName" className="form-label">Name</label>
                                    <input type="text" value={taskName} onChange={handleTaskNameChange} className="form-control" id="taskName" placeholder="Enter the name of your to do" />
                                </div>
                                <div className="col mb-3 w-50 p-3">
                                    <label htmlFor="taskDeadline" className="form-label">Deadline</label>
                                    <input type="date" value={taskDeadline} onChange={handleTaskDeadlineChange} className="form-control" id="taskDeadline" placeholder="Insert a deadline" />
                                </div>
                                <div className="col mb-3 p-3 w-100">
                                    <label htmlFor="taskNotes" className="form-label">Notes</label>
                                    <input type="text" value={taskNote} onChange={handleTaskNotesChange} className="form-control" id="taskNotes" placeholder="Leave a note" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="button" onClick={handleSaveButtonClick} className="btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion mt-3" id="outputContainer">
                {tasks.map((task, index) => (
                    <div className="card" key={index}>
                        <div className="card-header" id={`heading${index}`}>
                            <h2 className="mb-0">
                                <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded="true" aria-controls={`collapse${index}`}>
                                    {task.name} - {task.deadline}
                                </button>
                            </h2>
                        </div>
                        <div id={`collapse${index}`} className="collapse" aria-labelledby={`heading${index}`} data-parent="#outputContainer">
                            <div className="card-body">
                                {task.note}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default TaskManager;