import { createContext, useContext, useReducer, useState } from "react";
import { appReducer } from "./AppReducer";

const initialState = {
    tasks: [
        {
            id: 1,
            title: 'Task1',
            done: false
        },
        {
            id: 2,
            title: 'Task2',
            done: false
        }
    ]
}
export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [currentTask, setCurrentTask] = useState({
        id: null,
        title: '',
        done: false
    })
    const [state, dispatch] = useReducer(appReducer, initialState)
    const addTask = (task) => {
        dispatch({
            type: 'ADD_TASK',
            payload: task
        })
    }
    const deleteTask = (id) => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }
    const editTask = (task) => {
        dispatch({
            type: 'EDIT_TASK',
            payload: task
        })
    }
    return (
        <GlobalContext.Provider value={{
            tasks: state.tasks,
            addTask,
            deleteTask,
            setCurrentTask,
            currentTask,
            editTask
        }}>
            {children}
        </GlobalContext.Provider>
    )

}
export const useGlobalContext = () => useContext(GlobalContext)