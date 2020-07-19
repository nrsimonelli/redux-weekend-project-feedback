import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'


class Understanding extends Component {

  state = {
    understanding: ''
  }

  backClicked = (event) => {
    event.preventDefault();
    console.log('back was clicked');
    // takes you to previous page
    this.props.history.push('/feeling');
  }

  continueClicked = (event) => {
    event.preventDefault();
    console.log('continue was clicked');
    // pushes understanding value up to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state.understanding
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
      <div className='theme'>
          <header className='header' id='secondary'>
            <h1 className='title'>Feedback</h1>
            <h4><i>Part ii</i></h4>
          </header>
        <div className='left' id='primary'>
          <h1 className='leftTitle'>Understanding</h1>
          <h3 className='leftSub'>"When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about."</h3>
          <h4 className='leftSub'>&mdash; Haruki Murakami</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>How well did you comprehend today's material?</h1>
            <br></br>
            <div>
              <label>Lost</label>
              <input onChange={this.radioNow} type='radio' name='und' id='1' value='1'/>
              <input onChange={this.radioNow} type='radio' name='und' id='2' value='2'/>
              <input onChange={this.radioNow} type='radio' name='und' id='3' value='3'/>
              <input onChange={this.radioNow} type='radio' name='und' id='4' value='4'/>
              <input onChange={this.radioNow} type='radio' name='und' id='5' value='5'/>
              <input onChange={this.radioNow} type='radio' name='und' id='6' value='6'/>
              <label>On point</label>
            </div>
          </div>
          <div className='prevPath'>
            <button className='contDark' onClick={this.backClicked}>Back</button>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.continueClicked} id='continueInUnderstanding' hidden={this.state.understanding === ''} disabled={this.state.understanding === ''}>Continue</button>
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