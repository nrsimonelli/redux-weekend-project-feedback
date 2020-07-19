import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Support extends Component {

  state = {
    support: ''
   
  }

  continueClicked = (event) =>{
    event.preventDefault();
    console.log('continue was clicked');
    // pushes support value up to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state.support
    });
    // takes you to comments
    this.props.history.push('/add_comment');
  } // end continueClicked

  radioNow = (event) => {
    console.log('in radioNow with value: ', event.target.value);
    this.setState({
      support: event.target.value
    })
  } // end radioNow

  render() {
    return (
      <div>
        <div className='left'>
          <h1 className='leftTitle'>Support</h1>
          <h3 className='leftSub'>The strength of the team is each individual member. The strength of each member is the team</h3>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Do you feel supported?</h1>
            <br></br>
            <div>
              <input onChange={this.radioNow} type='radio' name='support' id='1' value='1'/>
              <label for='1'>All Alone</label>
              <input onChange={this.radioNow} type='radio' name='support' id='2' value='2'/>
              <input onChange={this.radioNow} type='radio' name='support' id='3' value='3'/>
              <input onChange={this.radioNow} type='radio' name='support' id='4' value='4'/>
              <input onChange={this.radioNow} type='radio' name='support' id='5' value='5'/>
              <input onChange={this.radioNow} type='radio' name='support' id='6' value='6'/>
              <label for='6'>Wonderfully So</label>
            </div>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.continueClicked} id='continueInSupport' disabled={this.state.support === ''}>Continue</button>
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Support);