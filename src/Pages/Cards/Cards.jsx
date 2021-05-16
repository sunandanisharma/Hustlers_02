import React from 'react';
import Recruiter from '../../Assets/Recruiter.svg';
import Designer from '../../Assets/Designer.svg';
import Developer from '../../Assets/Developer.svg';
import other from '../../Assets/other.svg';
import './Cards.css'

function Cards() {
  return (
      <div className='card'>
          <div className="cardsection">
              <h1 className="H1">Are you a designer, developer or recruiter?</h1>
              <div className="maincard">
                  <div>
                  <div className="cardone">
                      <img className='pic' src={Designer} alt="ab" />
                      <h6 className='piccontent'>Designer</h6>
                  </div>
                  </div>
                  <div>
                  <div className="cardone">
                      <img className='pic' src={Developer} alt="ab" />
                      <h6 className='piccontent'>Developer</h6>
                  </div>
                  </div>
              </div>
         {/* <div> */}
              <div className="maincard">
                  <div className="cardone">
                      <img className='pic' src={Recruiter} alt="ab" />
                      <h6 className='piccontent'>Recruiter</h6>
                  </div>
            <div>
                  <div className="cardone">
                      <img className='pic' src={other} alt="ab" />
                      <h6 className='piccontent'>Other</h6>
                  </div>
              </div>
            </div>
          {/* </div> */}
          </div>

      </div>
  )
}

export default Cards