import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class Understanding extends Component {

  state = {
    understanding: ''
  }

  continueClicked = (event) => {
    event.preventDefault();
    console.log('continue was clicked');
    // pushes understanding value up to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state
    });
    // takes you to support component
    this.props.history.push('/support');
  } // end continueClicked

  radioNow = (event) => {
    console.log('in radioNow with value: ', event.target.value);
    this.setState({
      understanding: event.target.value
    })
  } // end radioNow

  render() {
    return (
      <div>
        <div className='left'>
          <h1 className='leftTitle'>Understanding</h1>
          <h3 className='leftSub'>the noblest pleasure is the joy of understanding</h3>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>How well did you comprehend today's material?</h1>
            <br></br>
            <div>
              <input onChange={this.radioNow} type='radio' name='und' id='1' value='1'/>
              <label for='1'>Lost</label>
              <input onChange={this.radioNow} type='radio' name='und' id='2' value='2'/>
              <input onChange={this.radioNow} type='radio' name='und' id='3' value='3'/>
              <input onChange={this.radioNow} type='radio' name='und' id='4' value='4'/>
              <input onChange={this.radioNow} type='radio' name='und' id='5' value='5'/>
              <input onChange={this.radioNow} type='radio' name='und' id='6' value='6'/>
              <label for='6'>On point</label>
            </div>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.continueClicked} id='continueInUnderstanding' disabled={this.state.understanding === ''}>Continue</button>
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Understanding);