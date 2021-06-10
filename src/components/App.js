 import '../App.css';
import React,{Component} from 'react'
import {connect} from 'react-redux'
import handleIntialData from '../actions/shared'
import QNavbar from '../components/navbar'



class App extends Component {
  
  componentDidMount(){
    this.props.dispatch(handleIntialData())
  }

  render(){ 
  return (
    <div className="App">
     <QNavbar />
    </div>
  );
}
}

 

export default connect ( ) (App);
