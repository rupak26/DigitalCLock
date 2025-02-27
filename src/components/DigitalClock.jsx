import {useState , useEffect} from 'react'

function DigitalClock() {
    const [time , setTime] = useState(new Date()) 
    
    useEffect(() => {
       const interval = setInterval(() => {
          setTime(new Date()) ;
       }, 1000);
    })
    function getTimeFormat() {
        let hour = time.getHours() ;
        const minutes = time.getMinutes() ;
        const seconds = time.getSeconds() ;
        const meridium = hour >= 12 ? 'PM' : 'AM' ;
        hour = hour % 12 || 12 
        return `${padZero(hour)}: ${padZero(minutes)} : ${padZero(seconds)} : ${meridium}` ;
    }
    
    function padZero(number) {
        return (number  < 10 ? "0" : "") + number ;
    }

    return (
        <div className='clock-counter'>
            <div className='clock'>
               <span>{getTimeFormat()}</span>    
            </div> 
        </div>
    );
}
export default DigitalClock ;