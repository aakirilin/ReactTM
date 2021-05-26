import { combineReducers, createStore } from 'redux'
import { NewTaskReduser } from './NewTask/reducer'


/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
    newTask: NewTaskReduser,
})

const store = createStore(
    rootReducer
)

export default store
