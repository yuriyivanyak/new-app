function Task({task, deleteTask, onToggle}) {
    return(
        <div className={`task ${task.reminder ? 'reminder' : ''}`}>
            <h3>{task.text} <span onClick={() => deleteTask(task.id)} style={{color: 'red', cursor: 'pointer'}}>x</span></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task