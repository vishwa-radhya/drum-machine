import { createContext, useState } from "react"
import PropTypes from 'prop-types';
export const AudioContext = createContext();

export const AudioProvider=({children})=>{
    
    const [volume,setVolume]=useState(0.5);
    const [isChecked,setIsChecked]=useState(true);
    const handleVolumeChange=(newVolume)=>{
        setVolume(newVolume);
    };
    const handleCheckedState=()=>{
        setIsChecked(!isChecked);
    }
    return(
        <AudioContext.Provider value={{volume,handleVolumeChange,isChecked,handleCheckedState}}>
            {children}
        </AudioContext.Provider>
    )
}
AudioProvider.propTypes={
    children:PropTypes.node,
}
// export const useAudio=()=>{
//     const context = useContext(AudioContext);
//     if(!context){
//         throw new Error('useAudio must be used within an AudioProvider')
//     }
//     return context;
// }