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

        <h1>Understanding</h1>
        <main>
          <section className='formInfo'>
            <h3>How well do you understand today's material?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.continueClicked} id='continueInUnderstanding'>Continue</button>
          </section>
        </main>

      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Understanding);