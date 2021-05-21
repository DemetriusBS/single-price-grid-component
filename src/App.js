import React from 'react'
import './App.css'

function App() {
  return (
    <div className='project'>
      <div className='firstText'>
        <p className='join'>
          Join our community
        </p>

        <p className='day30'>
          30-day, hassle-free money back guarantee
        </p>

        <p className='gainAndPerfect'>
          Gain access to our full library of tutorials along with expert code reviews.
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>

      <div className='twoComponents'>
        <div className='secondText'>
          <p className='price'>
            Monthly Subscription
          </p>

          <p className='price'>
            $29 per month
          </p>

          <p className='price'>
            Full access for less than $1 a day
          </p>

          <p>
            <button className='btnSignUp'>
              Sign Up
           </button>
          </p>
        </div>

        <div className='thirdText'>
          <p className='whyUs'>
            Why Us
          </p>

          <p className='content'>
            Tutorials by industry experts
          </p>

          <p className='content'>
            Peer &amp; expert code review
          </p>

          <p className='content'>
            Coding exercises
          </p>

          <p className='content'>
            Access to our GitHub repos
          </p>

          <p className='content'>
            Community forum
          </p>

          <p className='content'>
            Flashcard decks
          </p>

          <p className='content'>
            New videos every week
          </p>
        </div>
      </div>


    </div>
  );
}

export default App;
