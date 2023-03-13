import React from 'react'
import {Box,styled } from '@mui/material'
import { useState } from 'react';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';


import { Controlled as ControlledEditor } from 'react-codemirror2';
import '../App.css'
const Heading=styled(Box)`
display:flex;
background:#1d1e22;
padding:9px 12px;
`;

const Header=styled(Box)`
background:#060606;
color:#AAAEBC;
display:flex;
justify-content:space-between;
font-weight:700;
`

const Container=styled(Box)`
  flex-grow:1;
  flex-basic:0;
  display:flex;
  flex-direction:column;
  padding:0 8px 8px;
`;

function Editor({heading,icon,color, value,onChange}) {
  const handleChange=(Editor,data,value)=>{
    onChange(value)
  }

  const [open,setOpen]=useState(true);
  return (
     <Container style={open ? null : {flexGrow:0}}>
        <Header>
            <Heading>
              <Box component="span" 
              style={{
                background:color,
                height:"20px",
                width:"20px",
                display:"flex",
                placeContent:"center",
                borderRadius:"5px",
                marginRight:"2px",
                paddingBottom:"2px",
                color:"#000"
              }}>
                  {icon}
              </Box>
              {heading}
            </Heading>
            <CloseFullscreenIcon
            fontSize='small'
            style={{alignSelf:'center'}}
            onClick={()=>setOpen(prevState=>!prevState)}/>
        </Header>
        <ControlledEditor className='controlled-editor'
        value={value}
        onBeforeChange={handleChange}
        options={{
          theme:"material",
          lineNumbers:true,
        }
        }/>
     </Container>
  )
}

export default Editor
