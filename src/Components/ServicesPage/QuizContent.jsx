import React, { useState } from 'react';
import './QuizContent.css';
import QuizData from './QuizData';

const QuizContent = ({QuizOpen, setQuizOpen, setDetails}) => {
  const [FormData, setFormData] = useState({
    'price': 0,
    'processor': '',
    'category': ''
  });

  const [currentQues, setCurrentQues] = useState (0);
  const changeQues = () =>{
    if (currentQues < QuizData.length-1){
      setCurrentQues (currentQues + 1);

    }else {
      setQuizOpen(!QuizOpen);
      setDetails(FormData);
    }
  }

  return (
    <>
    <div className='container-lg my-5'>
    <div className='row my-5'>
    <div id='quiz' className='col-8 mx-auto'>
    <p id='details'>Hello Customer, Let us know your product choice.</p>
    <div className='question'>
    {QuizData[currentQues].Ques}
    </div>
    <div className='ans my-3'>
    {
      QuizData[currentQues].Value.map((Value, i) => {
        return (
          <div className="form-check" key={Value}>
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={() => {setFormData({...FormData, [QuizData[currentQues].Name]:Value })}} />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                {Value}
              </label>
          </div>
        )

      } )
    }
    </div>
    <input type='button' value='Next' id='next-btn' onClick={changeQues} />
    </div>
    </div>
    </div>

    </>
  );
}

export default QuizContent;