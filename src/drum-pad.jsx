import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AudioContext } from "./audio-context";
import {BeatContext} from './beatName-context';
import PropTypes from 'prop-types';


const DrumPad=({innerText,source,name})=>{
    const {beatNameHandler}=useContext(BeatContext);
        const {volume,isChecked}=useContext(AudioContext);
        const audioRef =useRef(null);
        const [isActive,setIsActive]=useState(false);
        const playDrumMusic=useCallback(()=>{
            if(isChecked && audioRef.current){
                setIsActive(true);
                setTimeout(()=>setIsActive(false),200);
                audioRef.current.play();
                beatNameHandler(name);
            }
        },[beatNameHandler,name,isChecked]);

        useEffect(()=>{
            if(audioRef.current){
                audioRef.current.volume=volume;
            }
        },[volume]);

        useEffect(()=>{
            function handleKeyPress(event){
                if(isChecked && (event.key===innerText || event.key===innerText.toLowerCase())){
                    playDrumMusic();
                
                }
            }
            document.addEventListener('keydown',handleKeyPress);
            
            return ()=>{
                document.removeEventListener('keydown',handleKeyPress);
            }
        },[innerText,playDrumMusic,isChecked]);
        
        
    
    return(

        <button className="drum-pad"  id={innerText+`-pad`} onClick={playDrumMusic}  style={isActive ? {backgroundColor:'#6BD7EC',transform:'translateY(2px)',boxShadow:'1px 1px 1px black'} : {}}  >{innerText}
            <audio src={source} className="clip" id={innerText} ref={audioRef} ></audio>
        </button>
    )
}
DrumPad.propTypes={
    innerText:PropTypes.string,
    source:PropTypes.string,
    name:PropTypes.string,
}
export default DrumPad;