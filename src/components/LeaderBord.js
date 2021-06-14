
import React, {Component} from 'react'
import { connect } from 'react-redux'
 import "bootstrap/dist/css/bootstrap.min.css";
 
class LeaderBoard extends Component{

    render(){
        const {users}= this.props 
        return(
            <div style={{   justifyContent:'center', alignItems:'center' }}>
              {   users.map((item)=>
                (

                    <div className="gallery" key={item.id}>
                    
                   

                    <br/><div className='LeaderBoardTitle'  >{item.name } Asks :</div>
                        
                        <div className="thumbnail">  <img  src={item.avatarURL}   alt="" width="80" className="cards rounded-circle"/> 
                        <h4>Score </h4>
                        <h4>{Object.keys(item.answers).length + Object.keys(item.questions).length  }</h4>
                        <p className="tag">Answered Questions : { Object.keys(item.answers).length}</p>
                        <p className="text_column">Create Questions : { Object.keys(item.questions).length }</p>
                        
                      </div>

 </div>



                    ))}
                  
                    </div>




        )
    }
}

function mapStateToProps({users}){
  // console.log('maps staat',users)
 
     return{
       users : Object.values(users)   
    }
}

export default connect(mapStateToProps) (LeaderBoard)