import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Add_Comment extends Component {

  state = {
    comments: ''
   
  }

  reviewClicked = (event) =>{
    event.preventDefault();
    console.log('continue was clicked');
    // dispatch value to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state
    });
    // takes you to the review page
    this.props.history.push('/review');
  } // end reviewClicked

  render() {
    return (
      <div>
        <h1>Comment</h1>
        <main>
          <section className='formInfo'>
            <h3>any comments?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.reviewClicked} id='reviewInComment'>Review</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Add_Comment;