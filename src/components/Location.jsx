import React from 'react'
import { useParams } from 'react-router-dom';

const Location = (props) => {
   const { base, color1, color2 } = useParams();

   return (
      <div>
         { (isNaN(+base) && color1 && color2) && <div className="container ps-4 py-2" style={{backgroundColor: color1}}><span style={{color: color2}}><h1 className="display-6">The word is: { base }</h1></span></div> }
         { (isNaN(+base) && !color1 && !color2) && <div className="container ps-4 pt-2"><h1 className="display-6">The word is: { base }</h1></div> }
         { (!isNaN(+base) && !color1 && !color2) && <div className="container ps-4 pt-2"><h1 className="display-6">The number is: { base }</h1></div> }
      </div>
   )
}

export default Location