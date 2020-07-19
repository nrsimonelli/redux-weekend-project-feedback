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
      payload: this.state
    });
    // takes you to comments
    
    this.props.history.push('/add_comment');
  } // end continueClicked

  render() {
    return (
      <div>
        <h1>Support</h1>
        <main>
          <section className='formInfo'>
            <h3>how supported do you feel?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.continueClicked} id='continueInSupport'>Continue</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Support;