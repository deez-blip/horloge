import { GUI } from "dat.gui"

export default class Debug {
    #active

    constructor() {
        this.ui = null
        this.active = window.location.hash === '#debug'
    }

    set active(isUI) {
        this.#active = isUI
        if(this.#active && !!!this.ui) this.ui = new GUI()
    }

    get active() { return this.#active }

    createClockControls(clock) {
        if (this.ui) {
            const folder = this.ui.addFolder('Clock Settings');
            folder.add(clock.params, 'speed', 0, 4).name('Speed').onChange(value => {
                clock.updateSpeed(value);
            });
            folder.addColor(clock.params, 'color').name('Color').onChange(value => {
                clock.updateColor(value);
            });
            folder.add(clock.params, 'lineWidth', 1, 10).name('Line Width').onChange(value => {
                clock.updateLineWidth(value);
            });
            folder.add(clock.params, 'handWidth', 0.5, 5).name('Hand Width').onChange(value => {
                clock.updateHandWidth(value);
            });
        }
    }

    createTimeZoneUI(globalContext) {
        if (this.ui) {
            const folder = this.ui.addFolder('Time Zone Settings');
            const timeZones = {
                'UTC-12:00': -12, 'UTC-11:00': -11, 'UTC-10:00': -10, 'UTC-09:00': -9, 
                'UTC-08:00': -8, 'UTC-07:00': -7, 'UTC-06:00': -6, 'UTC-05:00': -5, 
                'UTC-04:00': -4, 'UTC-03:00': -3, 'UTC-02:00': -2, 'UTC-01:00': -1, 
                'UTC±00:00': 0, 'UTC+01:00': 1, 'UTC+02:00': 2, 'UTC+03:00': 3, 
                'UTC+04:00': 4, 'UTC+05:00': 5, 'UTC+06:00': 6, 'UTC+07:00': 7, 
                'UTC+08:00': 8, 'UTC+09:00': 9, 'UTC+10:00': 10, 'UTC+11:00': 11, 
                'UTC+12:00': 12, 'UTC+13:00': 13, 'UTC+14:00': 14
            };
            const timeZoneController = folder.add(globalContext, 'currentTimeZone', Object.keys(timeZones));
            timeZoneController.onChange(value => {
                globalContext.updateTimeForAllClocks(timeZones[value]);
            });
        }
    }
}