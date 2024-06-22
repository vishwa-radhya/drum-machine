import DrumPad from "./drum-pad";
const DrumPadContainer=()=>{

    return(
        <div className="drum-pad-container">
        <div className="pad-wrapper">
            <DrumPad innerText='Q' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3' name='Heater 1'  />
            <DrumPad innerText='W' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3' name='Heater 2' />
            <DrumPad innerText='E' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3' name='Heater 3' />
            <DrumPad innerText='A' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3' name='Heater 4' />
            <DrumPad innerText='S' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3' name='Clap' />
            <DrumPad innerText='D' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3' name='Open HH' />
            <DrumPad innerText='Z' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3' name="Kick n' Hat" />
            <DrumPad innerText='X' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3' name='Kick' />
            <DrumPad innerText='C' source='https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3' name='Closed HH' />
            </div>
        </div>
    )
}
export default DrumPadContainer;