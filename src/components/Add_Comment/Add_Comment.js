import React, { Component } from 'react';
import axios from 'axios';


class Add_Comment extends Component {

  reviewClicked = () =>{
    // takes you to the review page
    console.log('review was clicked');
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