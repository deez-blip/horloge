import Scene from "./js/canvas2d/Scene"
import Scenario1 from "./js/scenarios/Scenario1";
import GlobalContext from './js/GlobalContext';
import Debug from './js/utils/Debug';

document.addEventListener('DOMContentLoaded', () => {
    const globalContext = new GlobalContext();
    const debug = new Debug();
    if (debug.active) {
        debug.createClockControls(globalContext);
        debug.createTimeZoneUI(globalContext);
    }
});

const scene = new Scenario1()

