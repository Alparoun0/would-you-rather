import React, { Component } from 'react'
import {Button ,Nav,Navbar } from 'react-bootstrap';
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


class QNavbar extends Component{

 
  
    
    
      render(){
        const {loginuser ,users} = this.props
    
        return(
            <Navbar   bg="light" variant="outline-success" className='d-flex" m-2   '>
         
            

          <Nav fill variant="tabs" defaultActiveKey="/" >
         <Nav.Item>
         <Nav.Link href="/" className='m-3' >Home</Nav.Link>
            </Nav.Item>
             <Nav.Item>
         <Nav.Link eventKey="add" className='m-3'>New Question</Nav.Link>
           </Nav.Item>
               <Nav.Item>
             <Nav.Link eventKey="leader" className='m-3'>LeaderBoard</Nav.Link>
                     </Nav.Item>
                                </Nav>
                                <Nav>
                                <Navbar.Text>Welcome hamada</Navbar.Text>
                                 
                                <Button variant="outline-success" onClick ={this.LogOutBtn}>LogOut</Button>
                    
                      
                              </Nav>
                      
                             
                   
                   

       </Navbar>
        )
      }  

}
function mapStateToProps({loginuser,users}) {
    return{
      loginuser,
      users
  
    }}

export default connect(mapStateToProps)(QNavbar)