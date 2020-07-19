import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Add_Comment extends Component {

  state = {
    comments: ''
   
  }

  backClicked = (event) => {
    event.preventDefault();
    console.log('back was clicked');
    // takes you to previous page
    this.props.history.push('/support');
  }

  reviewClicked = (event) =>{
    event.preventDefault();
    console.log('review was clicked');
    // dispatch value to redux
    this.props.dispatch({
      type: 'SET_FEEDBACK',
      payload: this.state.comments
    });
    // takes you to the review page
    this.props.history.push('/review');
  } // end reviewClicked

  commentNow = (event) => {
    console.log('in commentNow string is: ', event.target.value);
    this.setState({
      comments: event.target.value
    })
  }

  render() {
    return (
      <div className='theme'>
          <header className='header' id='dark'>
            <h1 className='title'>Feedback</h1>
            <h4><i>Part iv</i></h4>
          </header>
        <div className='left' id='secondary'>
          <h1 className='leftTitle'>Comments</h1>
          <h3 className='leftSub'>"If I had 53 minutes to spend as I liked I'd walk very slowly toward a water fountain"</h3>
          <h4 className='leftSub'>&mdash; Antoine de Saint-Exupéry</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Anything on your mind?</h1>
            <br></br>
            <div>
              <textarea className='commentBox' onChange={this.commentNow} name='comment' id='comment' type='text'></textarea>
             
            </div>
          </div>
          <div className='prevPath'>
            <button className='contDark' onClick={this.backClicked}>Back</button>
          </div>
          <div className='nextPath'>

            {this.state.comments === '' 
              ? 
                <button className='contDark' onClick={this.reviewClicked} id='continueInAdd_Comment'>Negative</button>
              :
                <button className='contLight' onClick={this.reviewClicked} id='continueInAdd_Comment'>Yes!</button>
            }
            
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Add_Comment);