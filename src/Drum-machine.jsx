
import DrumPadContainer from "./DrumPadContainer";
import ControlsContainer from "./Controls-container";

function DrumMachine(){

    return(
        <div id="drum-machine">
                <DrumPadContainer/>
                <ControlsContainer/>
        </div>
    )
}
export default DrumMachine;