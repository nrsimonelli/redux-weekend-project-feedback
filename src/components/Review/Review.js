import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Review extends Component {

  // state = {
  //   feeling: '',
  //   understanding: '',
  //   support: '',
  //   comments: '',
  // }

  componentDidMount(){
    console.log('review did mount');
    console.log('redux state:', this.props.reduxState);
    
  }

  submitClicked = (event) =>{
    event.preventDefault();
    // takes you to thank you page
    console.log('submit was clicked');
    this.props.history.push('/thanks');
  } // end submitClicked

  render() {
    return (
      <div className='theme'>
          <header className='header' id='secondary'>
            <h1 className='title'>Feedback</h1>
            <h4><i>Part v</i></h4>
          </header>
        <div className='left' id='highlight'>
          <h1 className='leftTitle'>Review</h1>
          <h3 className='leftSub'>"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a monstrous vermin"</h3>
          <h4 className='leftSub'>&mdash; Franz Kafka</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Let's Review Your Feedback</h1>
            <br></br>
            <div className='inReview'>
              <p>Feeling: {this.props.reduxState.feedbackReducer[0]}</p>
              <p>Understanding: {this.props.reduxState.feedbackReducer[1]}</p>
              <p>Support: {this.props.reduxState.feedbackReducer[2]}</p>
              <p>Comments: {this.props.reduxState.feedbackReducer[3]}</p>
            </div>
          </div>
          <div className='nextPath'>
            <button onClick={this.submitClicked} id='submitInReview' className='cont'>Submit</button>
          </div>
        </div>
      </div>
    ); // end return
  } // end render
} // end class

const putReduxStateOnProps =(reduxState)=>({
  reduxState
})

export default connect(putReduxStateOnProps)(Review);