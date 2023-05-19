
function calculateDifferenteBetweenTwoDates (dateIn, dateOut) {
  
  let seconds = Math.floor((dateOut - (dateIn))/1000)
  let minutes = Math.floor(seconds/60)
  let hours = Math.floor(minutes/60)
  let days = Math.floor(hours/24)
  
  hours = hours - (days * 24)
  minutes = minutes - (days * 24 * 60) - (hours * 60)
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60)
    
  return { hours, minutes, seconds }
}

function addZeroToTime (time) {
  return time < 10
  ? `0${time}`
  :  `${time}`
}

function formatTime ({ hours, minutes, seconds}) {

  const hoursFormated = addZeroToTime(hours)
  const minutesFormated = addZeroToTime(minutes)
  const secondsFormated = addZeroToTime(seconds)
  
  return `${hoursFormated}:${minutesFormated}:${secondsFormated}`
}

export { calculateDifferenteBetweenTwoDates, formatTime }
