import React, { Component } from 'react';
import axios from 'axios';


class Feeling extends Component {

  continueClicked = () =>{
    // takes you to understanding
    console.log('continue was clicked');
    this.props.history.push('/understanding');
  } // end continueClicked
  
  render() {
    return (
      <div>
        <h1>Feeling</h1>
        <main>
          <section className='formInfo'>
            <h3>how do you feel?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.continueClicked} id='continueInFeeling'>Continue</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Feeling;