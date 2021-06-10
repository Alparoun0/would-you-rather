import {getInitialData} from '../utils/api'
import {receiveQuestions} from  './questions'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'


const AUTHED_ID ='sarahedo'

export default function  handleIntialData(){

    return (dispatch)=> {
        return getInitialData().then(({questions,users})=>{

            dispatch(receiveQuestions(questions))
            dispatch(receiveUsers(users))
            dispatch(setAuthedUser(AUTHED_ID))
        })
    }

}