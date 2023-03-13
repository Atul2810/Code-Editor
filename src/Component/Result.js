import React, { useContext, useState,useEffect } from 'react'
import { Box } from '@mui/material';
import { DataContext } from '../Context/DataProvider'
function Result() {
    const {html,css,js}=useContext(DataContext);
    const [src,setSrc]=useState('');

    const srcCode=`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}<script>
    </html>

    `;
    useEffect(()=>{
        const timer=setTimeout(()=>{
          setSrc(srcCode)
        },1000)
        return ()=>clearTimeout(timer)
     },[html,css,js])
    
  return (
     <Box style={{height:"41vh"}}>
      <iframe 
      srcDoc={src}
      sandbox='allow-scripts'
      title="Output"
      width="100%"
      height="100%"
      />
     </Box>
  )
}

export default Result
