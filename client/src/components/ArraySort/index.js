import {useState, useEffect} from 'react'
// importing MUI library to create the slider
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './style.css'

function RenderArray() {
    const [heightArrays, setHeightArrays] = useState([])
    const [sizeArray, setSizeArray] = useState(50)

    // generating one array as the page render
    useEffect(() =>{
        for (let i = 0; i < sizeArray; i++){
            let number = Math.floor(Math.random() * 300)
            setHeightArrays(oldValue => [...oldValue, number])
        }
    }, [sizeArray]) 
    
    // handling values changes on the slider
    const handleChange = (event, newValue) => {
        // sometimes on 130 I was receiving one bug, so I added this line of code to make sure that will render array bars
        if(newValue === 130){
            setSizeArray(129)
        }
        setSizeArray(newValue);
        setHeightArrays('')
    };

    return (
        <>
            <Box width={100}>
                <Slider min={10} max={130} aria-label="Default" valueLabelDisplay="auto" value={sizeArray} onChange={handleChange}/>
            </Box>
            <div className="container">
            {heightArrays.length && heightArrays.map((arrayBar) =>{
                return(
                    <div style={{"height" : `${arrayBar}px`}} className="array_bar"></div>       
                )
            })}
            </div>
        </>
    );
}

export default RenderArray;