import './App.css';
import React , {useState} from "react";


function App() {
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [msg,setMsg] = useState('');
  const [bmi,setBmi] = useState('');

  // logic

  let calcBmi = (event) => { // arrow function
    event.preventDefault();

    if(weight===0 || height===0){
      alert('Enter Valid Weight and Height')
    }

    else{
      let bmi = (weight/(height*weight)*703)
      setBmi(bmi.toFixed(1))

      if(bmi<25){
        setMsg('You are underweight')
      }

      else if(bmi>=25 && bmi<30){
        setMsg('You are a healthy person')
      }

      else{
        setMsg('You are overweight')
      }
    }
  }

  // reload
  let reload = () =>
  {
    window.location.reload()
  }
  return (
    
    <div className="App">
      <div className='container'>
        <h2>BMI Calculation</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (ibs)</label>
            <input className ="firstInput" type="text" placeholder="Enter Your Weight" value={weight} 
            onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div  className='height'>
            <label>Height (cm)</label>
            <input className ="secondInput" type="text" placeholder="Enter Your Height" value={height} 
            onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className='sumbit' type='submit'>Submit</button>
            <button className='reload' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is : {bmi}</h3>
            <p>{msg}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;