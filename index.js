//Clock

const clock12 = document.getElementById('clock12');

// Concatenate a zero to the left of every single digit time frame
function concatZero(timeFrame) {
  return timeFrame < 10 ? '0'.concat(timeFrame) : timeFrame;
}

function realTime() {
  let date = new Date();
  let sec = date.getSeconds();
  let mon = date.getMinutes();
  let hr = date.getHours();
  // 12 hour time
  // If the hour equals 0 or 12, the remainder equals 0, so output 12 instead. (0 || 12 = 12)
  clock12.textContent = `${concatZero(hr % 12 || 12)} : ${concatZero(
    mon,
  )} : ${concatZero(sec)} ${hr >= 12 ? 'PM' : 'AM'}`;
}

setInterval(realTime, 1000);

//Images

const images = [
  { name: 'morning', src: 'images/sleepy_dog.jpg' },
  { name: 'lunch', src: 'images/lunch.jpg' },
  { name: 'nap', src: 'images/nap.png' },
  { name: 'party', src: 'images/party_dog.jpg' },
  { name: 'default', src: 'images/Default_Picture.jpg' },
];

//Party Button

const partyButton = () => {
  let partyPic = document.getElementById('image');
  let btn = document.getElementById('button');

  if (btn.classList.contains('button-1')) {
    partyPic.src = images[3].src;
    btn.innerHTML = 'End the party';
    btn.style.backgroundColor = '#8B008B';
    btn.classList.add('button-2');
    btn.classList.remove('button-1');
  } else if (btn.classList.contains('button-2')) {
    partyPic.src = images[0].src;
    btn.innerHTML = 'Party Time';
    btn.style.backgroundColor = '#84afb4';
    btn.classList.remove('button-2');
    btn.classList.add('button-1');
  }
};

document.getElementById('button').addEventListener('click', partyButton);

//Get the right Puppy Picture

const getPuppyPicture = () => {
  let getWakeUpTime = document.getElementById('wake-up').value;
  let getLunchTime = document.getElementById('lunch').value;
  let getNapTime = document.getElementById('nap').value;
  let imageContainer = document.getElementById('image');

  const compareTime = new Date();
  const compareHours = compareTime.getHours();

  console.log(compareHours);

  if (compareHours == getWakeUpTime) {
    imageContainer.src = images[0].src;
  } else if (compareHours == getLunchTime) {
    imageContainer.src = images[1].src;
  } else if (compareHours == getNapTime) {
    imageContainer.src = images[2].src;
  } else {
    imageContainer.src = images[4].src;
  }
};

document.getElementById('wake-up').addEventListener('change', getPuppyPicture);
document.getElementById('lunch').addEventListener('change', getPuppyPicture);
document.getElementById('nap').addEventListener('change', getPuppyPicture);
