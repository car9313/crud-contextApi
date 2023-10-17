import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/GobalContext'
import './TaskFrom.css'
const TaskForm = () => {

    const { addTask, editTask, tasks, currentTask, setCurrentTask } = useGlobalContext()
    const navigate = useNavigate()
    const handleChange = (e) => {
        setCurrentTask({ ...currentTask, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentTask.id) {
            editTask(currentTask)
        } else {
            addTask({
                ...currentTask,
                id: tasks.length + 1,

            })
        }

        navigate('/')
    }
    const handleCancel = () => {
        setCurrentTask({
            id: null,
            title: '',
            done: false
        })
        navigate('/')
    }
    return (
        <main className="main__containerForm">
            <p className="main__containerFormTitle">{currentTask.id ? 'Edit' : 'Add'} Task</p>
            <form className="main__form" onSubmit={handleSubmit}>
                <div className="main__form--inputGroup">
                    <label htmlFor="title">Task</label>
                    <input type="text" value={currentTask.title} name="title" id="title" placeholder="Write a task" onChange={handleChange} />
                </div>
                <div className='main__formButtons'>
                    <button className="main__form--submit btn">{currentTask.id ? 'Update' : 'Save'}</button>
                    <button className="main__form--cancel btn" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </main>
    )
}
export default TaskForm