import React, { useState } from 'react'
import Card from '../card/Card'
import  '../card/card.css'
import  './rating.css'
import icon from '../../assets/images/icon-star.svg'
import Button from '../button/Button'
import Result from '../Result'

const Rating = () => {
  const[rating, setRating] = useState(0)
  const[submitted, setSubmitted] = useState(false)
  const handleClick = (e) =>{
    e.preventDefault();
    const val = e.target.value;
    setRating(val); 
    console.log(rating)
  }

  const handleSubmit = () =>{
        setSubmitted(!false)
  }
  return (
    <div>
      { submitted && submitted ? <Result  rating={rating}/> :  
           <Card className='card'>
       
           <div className="container">
                      <div className="iconstar rounded1 mb mt-0">
                      <img src={icon} alt="starIcon" />
                      </div>
                      <div className="thanksmsg" role="form">
                          <div className="mb ">
                              <p className="ask mb ">How did we do?</p>
                              <p className="request grey"> Please let us know how we did with your support request. All feedback is appreciated to help us improve our offerings!</p>
                          </div>
                          <div id="buttons"  className="flex-container mb">
                              <Button value={1} className="rounded btn"  handleClick={handleClick}/>
                              <Button value={2} className="rounded btn"  handleClick={handleClick}/>
                              <Button value={3} className="rounded btn"  handleClick={handleClick}/>
                              <Button value={4} className="rounded btn"  handleClick={handleClick}/>
                              <Button value={5} className="rounded btn"  handleClick={handleClick}/>
                              
                              
                          </div>
                          <div className="submit">
                              <Button  value="SUBMIT"  className="submitbtn" handleClick={handleSubmit}/>
                          </div>
                      </div>
                  </div>
                  <div>
                    
                  </div>
  
        </Card>
      }
     
     
    </div>
  )
}

export default Rating
