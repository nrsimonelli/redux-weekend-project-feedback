import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Feeling extends Component {

  state = {
    feeling: ''
   
  }

  backClicked = (event) => {
    event.preventDefault();
    console.log('back was clicked');
    // takes you to previous page
    this.props.history.push('/');
  }

  continueClicked = (event) => {
    event.preventDefault();
    console.log('continue was clicked');
    // pushes form info up to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state.feeling
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
      <div className='theme'>
          <header className='header' id='highlight'>
            <h1 className='title'>Feedback</h1>
            <h4><i>Part i</i></h4>
          </header>
        <div className='left' id='secondary'>
          <h1 className='leftTitle'>Feeling</h1>
          <h3 className='leftSub'>"Emotions make us human. Denying them makes us beasts"</h3>
          <h4 className='leftSub'>&mdash; Victoria Klein</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>How energized do you feel about today's material?</h1>
            <br></br>
            <div>
              <label >No Energy</label>
              <input onChange={this.radioNow} type='radio' name='feel' id='1' value='1'/>
              <input onChange={this.radioNow} type='radio' name='feel' id='2' value='2'/>
              <input onChange={this.radioNow} type='radio' name='feel' id='3' value='3'/>
              <input onChange={this.radioNow} type='radio' name='feel' id='4' value='4'/>
              <input onChange={this.radioNow} type='radio' name='feel' id='5' value='5'/>
              <input onChange={this.radioNow} type='radio' name='feel' id='6' value='6'/>
              <label >Electric</label>
            </div>
          </div>
          <div className='prevPath'>
            <button className='contDark' onClick={this.backClicked}>Back</button>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.continueClicked} id='continueInFeeling' hidden={this.state.feeling === ''} disabled={this.state.feeling === ''}>Continue</button>
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