import  {combineReducers} from 'redux'
import questions from './question'
import user from './user'
import authedUser from './autheduser'


export default combineReducers ({
    questions,
    user,
    authedUser
})