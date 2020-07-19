import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';


class Review extends Component {

  componentDidMount(){
    console.log('review did mount');
    console.log('redux state:', this.props.reduxState.feedbackReducer);
    
  }

  postFeedback = () => {
    axios.post('/feedback', this.props.reduxState.feedbackReducer)
      .then( response => {
        console.log('feedback made it to DB: ', response);
      })
      .catch( err => {
        console.log('post request err in review: ', err);
      }) // end axios POST
  } // end postFeedback

  backClicked = (event) => {
    event.preventDefault();
    console.log('back was clicked');
    // takes you to previous page
    this.props.history.push('/add_comment');
  }

  submitClicked = (event) =>{
    event.preventDefault();
    console.log('submit was clicked');

    // fires POST
    this.postFeedback();


    // takes you to thankYou page
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
          <div className='prevPath'>
            <button className='contDark' onClick={this.backClicked}>Back</button>
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