import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Feeling extends Component {

  state = {
    feeling: ''
   
  }

  continueClicked = (event) => {
    event.preventDefault();
    console.log('continue was clicked');
    // pushes form info up to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state
    });
    // takes you to next page (understanding)
    this.props.history.push('/understanding');
  } // end continueClicked

  radioNow = (event) => {
    console.log('in radioNow with value: ', event.target.value);
    this.setState({
      feeling: event.target.value
    })
  } // end radioNow

  render() {
    return (
      <div>
        
        <div className='left'>
          <h1 className='leftTitle'>Feeling</h1>
          <h3 className='leftSub'>emotions play an important role in the learning process</h3>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>How energized do you feel about today's material?</h1>
            <br></br>
            <div>
            <input onChange={this.radioNow} type='radio' name='feel' id='1' value='1'/>
            <label for='1'>No Energy</label>
            <input onChange={this.radioNow} type='radio' name='feel' id='2' value='2'/>
            <input onChange={this.radioNow} type='radio' name='feel' id='3' value='3'/>
            <input onChange={this.radioNow} type='radio' name='feel' id='4' value='4'/>
            <input onChange={this.radioNow} type='radio' name='feel' id='5' value='5'/>
            <input onChange={this.radioNow} type='radio' name='feel' id='6' value='6'/>
            <label for='6'>Electric</label>
            </div>
            <div>{JSON.stringify(this.state)}</div>

          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.continueClicked} id='continueInFeeling' disabled={this.state.feeling === ''}>Continue</button>
          </div>
          </div>
      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Feeling);