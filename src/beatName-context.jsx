import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const BeatContext =createContext();

export const BeatProvider=({children})=>{
    const [beatName,setBeatName]=useState('');

    const beatNameHandler=(newBeatName)=>{
        setBeatName(newBeatName);
    }

    return(
        <BeatContext.Provider value={{
            beatName,beatNameHandler
        }}>
            {children}
        </BeatContext.Provider>
    )
}
BeatProvider.propTypes={
    children:PropTypes.node,
}