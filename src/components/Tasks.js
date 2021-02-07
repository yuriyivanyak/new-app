import React from "react";
import Task from "./Task";

function Tasks({tasks, deleteTask}) {
    return(
        <>
            {tasks.map((task) => (<Task
                                        key={task.id}
                                        deleteTask={deleteTask}
                                        task={task}
            />))}
        </>
    )
}

export default Tasks