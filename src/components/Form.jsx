import React,{useRef} from 'react'

const Form = ({fetchWeather}) => {
  const searchKey = useRef('');


  return (
    <div className='w-100 d-flex justify-content-center mt-4'>
        <input type="text" ref={searchKey} className='form-control ms-5' placeholder='Enter country...'/>
        <input type="button" onClick={()=> fetchWeather(searchKey.current.value)} value="Search" className='btn ms-2 me-5 bg-dark text-white'/>
    </div>
  )
}

export default Form