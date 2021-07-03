const $car = document.querySelector('.racecar');

function turnCar(event) {
  const key = event.code;
  if (key === 'ArrowLeft') {
    $car.setAttribute('data-dir', 'west');
  } else if (key === 'ArrowRight') {
    $car.setAttribute('data-dir', 'east');
  } else if (key === 'ArrowDown') {
    $car.setAttribute('data-dir', 'south');
  } else if (key === 'ArrowUp') {
    $car.setAttribute('data-dir', 'north');
  }
}

function moveCar() {
  const carDir = $car.getAttribute('data-dir');
  let carX = $car.getAttribute('data-x');
  carX = parseFloat(carX);
  let carY = $car.getAttribute('data-y');
  carY = parseFloat(carY);
  if (carDir === 'east') {
    carX += 0.5;
    $car.setAttribute('data-x', carX);
    $car.style.left = carX + 'rem';
  } else if (carDir === 'south') {
    carY += 0.5;
    $car.setAttribute('data-y', carY);
    $car.style.top = carY + 'rem';
  }
}

document.addEventListener('keydown', turnCar);

document.addEventListener('keydown', function (event) {
  if (event.code === 'Space') {
    window.setInterval(moveCar, 16);
  }
});

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft' || event.code === 'ArrowRight' ||
    event.code === 'ArrowDown' || event.code === 'ArrowUp' || event.code === 'Space') {
    event.preventDefault();
  }
});
