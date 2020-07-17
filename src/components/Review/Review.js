import React, { Component } from 'react';
import axios from 'axios';


class Review extends Component {

  submitClicked = () =>{
    // takes you to thank you page
    console.log('submit was clicked');
    this.props.history.push('/thanks');
  } // end submitClicked

  render() {
    return (
      <div>
        <h1>Review</h1>
        <main>
          <section className='formInfo'>
            <h3>all set?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.submitClicked} id='submitInReview'>Submit</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Review;