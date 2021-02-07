import './App.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React from "react";
import AddTask from "./components/AddTask";

function App() {
    const [showAddTask, setShowAddTask] = React.useState(false)
    const [tasks, setTasks] = React.useState([]);

    React.useEffect(() => {
        const getTask = async () => {
            const taskFromServer = await fetchData();
            setTasks(taskFromServer)
        }

        getTask()
    }, [])

  //  Fetch tasks
    const fetchData = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
    }

  //  Delete Task 
    async function deleteTask( id ) {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTasks(tasks.filter((tasks) => tasks.id !== id ))
    }

  //  AddTask
    async function addTask(task) {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()

        setTasks([...tasks, data])

    }
  //  ToggleAddTask
    function toggleShowTask() {
        setShowAddTask(prev => !prev)
    }

  return (
    <div className="container">
      <Header toggleShowTask={toggleShowTask}
              showAddTask={showAddTask}
      />
        {showAddTask && <AddTask onAdd={addTask}/> }

      {tasks.length > 0 ? (<Tasks
                            tasks={tasks}
                            deleteTask={deleteTask}
      />) : 'No tasks' }

    </div>
  );
}

export default App;
