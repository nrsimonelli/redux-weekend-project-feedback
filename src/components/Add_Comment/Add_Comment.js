import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Add_Comment extends Component {

  state = {
    comments: ''
   
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
      <div>
        <div className='left'>
          <h1 className='leftTitle'>Comments</h1>
          <h3 className='leftSub'>"If I had 53 minutes to spend as I liked I'd walk very slowly toward a water fountain"</h3>
          <h4 className='leftSub'>- Antoine de Saint-Exupéry</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Anything on your mind?</h1>
            <br></br>
            <div>
              <input onChange={this.commentNow} name='comment' id='comment' type='text'/>
              <label for='comment'>Comment Box</label>
            </div>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.reviewClicked} id='continueInAdd_Comment'>Continue</button>
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