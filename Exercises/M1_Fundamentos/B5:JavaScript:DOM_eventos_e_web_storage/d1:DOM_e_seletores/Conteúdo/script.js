document.getElementById('header-container').style.backgroundColor = 'lightgreen';

let emergency = document.getElementsByClassName('emergency-tasks');
for (let i = 0; i < emergency.length; i += 1) {
  emergency[i].style.backgroundColor = 'pink'
}

let emergencyTitles = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < emergencyTitles.length; i += 1) {
  emergencyTitles[i].style.backgroundColor = 'purple'
}

let noEmergency = document.getElementsByClassName('no-emergency-tasks');
for (let i = 0; i < noEmergency.length; i += 1) {
  noEmergency[i].style.backgroundColor = 'gold'
}

let noEmergencyTitles = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < noEmergencyTitles.length; i += 1) {
  noEmergencyTitles[i].style.backgroundColor = 'black'
}

document.getElementById('footer-container').style.backgroundColor = 'darkgreen';
