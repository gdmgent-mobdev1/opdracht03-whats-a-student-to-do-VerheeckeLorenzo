export const convertTime = (time: number): string => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - (hours * 3600)) / 60);
    let seconds = time - (hours * 3600) - (minutes * 60);
    let timeString = "";
    timeString += (hours < 10) ? "0" + hours : hours;
    timeString += ":";
    timeString += (minutes < 10) ? "0" + minutes : minutes;
    timeString += ":";
    timeString += (seconds < 10) ? "0" + seconds : seconds;
    return timeString;
}