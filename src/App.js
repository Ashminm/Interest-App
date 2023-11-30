
import './App.css';
import { TextField,Stack } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
  const [total,setTotal]= useState(0)
  const [Principle,setPrinciple]= useState(0)
  const [rate,setRate]= useState(0)
  const [time,setTime]= useState(0)

  const [validPrinciple,setValidPrinciple]=useState(true)
  const [validRate,setValidRate]=useState(true)
  const [validTime,setValidTime]=useState(true)


  function handlesubmit (e){
    e.preventDefault()
    if(!Principle || !rate || !time){
      alert("Enter valid value")
    }else{
      let a=Principle*rate/100*time
      setTotal(a)
    }
  }

  
  function clear (){
    setTotal(0)
    setPrinciple(0)
    setRate(0)
    setTime(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidTime(true)
  }
  // console.log(Principle,rate,time)
  const validateInput=(e)=>{
    const {name,value}=e.target
    // console.log(typeof value)
    console.log(!!value.match(/^[0-9]{1,}$/))
    if(!!value.match(/^[0-9]{1,}$/)){
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(true)

      }else if(name=='rate'){
        setRate(value)
        setValidRate(true)
      }else{
        setTime(value)
        setValidTime(true)
      }
    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setValidRate(false)
      }else{
        setTime(value)
        setValidTime(false)
      }
    }
  }
 
  

  return (
    <div style={{height:'100vh'}} className="d-flex justify-content-center align-items-center bg-dark ">
      <div className="bg-white p-5 rounded">
          <h1>Simple interest App</h1>
          <hr />
          <span>Calculate your Interest easily!</span>
          <div style={{backgroundColor:'#FEE715FF'}} className="text-center rounded">
              <h4 className="pt-3">₹ {''}{total}</h4>
              <p className="pb-3">Your total interest </p>
          </div>
          <form  className='mt-5' onSubmit={(event)=>handlesubmit(event)} autoComplete='off'>
                  <div >
                      <TextField id="outlined-basic1" label="₹ Principle amount" variant="outlined" className='w-100'
                       name='principle' value={Principle || ''} onChange={(event)=>validateInput(event)} />
                      {
                    !validPrinciple &&
                    <div className="text-danger">
                      *Invalid principle amount value
                    </div>
                  }

                  </div>
                  
                  <div className='pt-3 w-100'>
                      <TextField id="outlined-basic2" label="Rate of interest (p.a)%" variant="outlined" className='w-100'
                      name='rate' value={rate || ''} onChange={(event)=>validateInput(event)}/>
                      {
                    !validRate &&
                    <div className="text-danger">
                    *Invalid Rate amount value

                    </div>
                  }
                  </div>
                  <div className='pt-3'>
                      <TextField id="outlined-basic3" label="Time period ( Yr )" variant="outlined" className='w-100'
                      name='time' value={time || ''} onChange={(event)=>validateInput(event)} />
                      {
                    !validTime &&
                    <div className="text-danger">
                      *Invalid time amount value
                    </div>
                  }
                  </div>
            
              <Stack direction="row" spacing={2} className='mt-4'>
                  <Button variant="contained" className='bg-dark ' style={{height:'50px', width:'250px'}} type='submit' disabled={validPrinciple && validRate && validTime ? false:true}>CALCULATE</Button>
                  <Button variant="outlined" className='border-dark text-dark ' style={{height:'50px', width: '250px'}} onClick={clear
                  } >RESET</Button>    
              </Stack>
            </form>
      </div>
    </div>
  );
}

export default App;
