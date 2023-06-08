import React from 'react';
import icon2 from '.././assets/images/illustration-thank-you.svg';
import Card from './card/Card';
const Result = ({ rating }) => {
  return (
    <div>
         <Card>
      <div id="card2" className="card d-hidden">
                <div className="container">
                    <div className="thanksimg mt"><img src={icon2} alt="thank-you" className="mt-1"/></div>
                    <div className="mb mt-1 thanksmsg">
                        <p id="displayRating" className="select mb text-center mt">You selected {rating} out of 5</p>
                        <h1 className="request2 text-center mt white "> Thank you!</h1>
                    </div>
                    <div className="flex-container mb">
                          <p className="text-center request  grey text1">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                    </div>
                    
                </div>
             </div>
      </Card>
    </div>
  )
}

export default Result