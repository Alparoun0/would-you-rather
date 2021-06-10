import{
    _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer,

} from './_DATA'


export function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
        _getUsers
       ]).then(([users, questions,authedUser]) => ({
        users,
        questions,
        authedUser
      }))
    }
 

