import {  useContext } from "react";
import { AudioContext } from "./audio-context";
import { BeatContext } from "./beatName-context";
const ControlsContainer=()=>{

    const {volume,handleVolumeChange,isChecked,handleCheckedState}=useContext(AudioContext);
    const {beatName}=useContext(BeatContext);

    function handleChangeOfAudio(e){
        const newVolume=e.target.value;
        handleVolumeChange(newVolume);
    }

    function handleToggle(){
        handleCheckedState();
    }

    return(
        <div className="controls-container">
            <div className="power-div" onClick={handleToggle}>
                <input type="checkbox" checked={isChecked} />
                <span className="slider"></span>
            </div>
            <div id="display"><span>{beatName}</span></div>
            <input type='range' min='0' max='1' step='0.01' value={volume} onChange={handleChangeOfAudio} />
            <p><span>{Math.round(volume*100)}%</span></p>
        </div>
    )
}
export default ControlsContainer;