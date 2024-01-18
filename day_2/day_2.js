function humanReadable(seconds) {

    const time = new Time(seconds)
    
    return `${time.outputAdjustment(time.hours)}:${time.outputAdjustment(time.minutes)}:${time.outputAdjustment(time.seconds)}`
}

class Time {
    constructor(seconds) {
        this.hours = Math.trunc(seconds / 3600)
        this.minutes = Math.trunc((seconds - this.hours * 3600) / 60)
        this.seconds = (seconds - this.hours * 3600) - this.minutes * 60
    }

    outputAdjustment(parameter) {
        return ('00' + parameter).slice(-2)
    }
}

