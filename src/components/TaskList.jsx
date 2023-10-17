import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/GobalContext"
import './TaskList.css'
const TaskList = () => {
    const { tasks, deleteTask, setCurrentTask } = useGlobalContext()

    return (
        <main className="main">

            {tasks.length > 0 && (
                <div className="main__cards">
                    {tasks.map(task => (
                        <div key={task.id} className="main__card">
                            <div className="main__cardLeft">
                                <button className="main__cardLeft--button btn btn__primary">Done</button>
                                <span>{task.id}</span>
                                <span>{task.title}</span>
                            </div>
                            <div className="main__cardRigth">
                                <Link to={`edit/:${task.id}`}>
                                    <button className="main__cardRigt--button btn btn__warning" onClick={() => setCurrentTask(task)} >Edit</button>
                                </Link>
                                <button className="main__cardRigt--button btn btn__danger" onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}
export default TaskList