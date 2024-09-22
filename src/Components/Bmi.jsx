import React, { useState } from 'react';

const Bmi = () => {
  // state
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    //prevent submitting to the server
    event.preventDefault();

    if (weight === '' || height === '') {
      alert('Please enter a valid weight and height');
    } else {
      let weightKg = parseFloat(weight);
      let heightM = parseFloat(height) / 100; // Convert cm to m
      
      if (isNaN(weightKg) || isNaN(heightM) || weightKg <= 0 || heightM <= 0) {
        alert('Please enter valid positive numbers for weight and height');
        return;
      }

      let bmi = weightKg / (heightM * heightM);
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 18.5) {
        setMessage('and You are underweight');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('and You are a healthy weight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('and You are overweight');
      } else {
        setMessage('and You are obese');
      }
    }
  };

  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div >
      <div className='container BMI'>
        <h2 className='bmicalculator '>Let’s Calculate Your BMI</h2>
        <p className='curious'>Curious about your fitness progress? Use our BMI calculator to get instant insights into your body health. Start tracking today and stay on top of your fitness goals!</p>
        <form onSubmit={calcBmi}>
          <div className="bmiflex">
            <div>
              <label>Weight (Kg) &nbsp; </label>
              <input className='bmiinput' value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div>
              <label>Height (cm) &nbsp;  </label>
              <input className='bmiinput' value={height} onChange={(event) => setHeight(event.target.value)}  />
            </div>
          </div>
          <div className='bmibtns'>
            <button className='btn  bmibtnsubmit' type='submit'>Submit</button>

            <button className='btn bmibtnsubmit' onClick={reload} type='button'>Reload</button>
          </div>
        </form>
        <div className='centerbmi'>
          <h5>Your BMI is: {bmi}  {message}</h5>
        </div>
      </div>
    </div>
  );
};

export default Bmi;