export function appReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id == action.payload.id ? action.payload : task)
            }
        default:
            return state
    }
}