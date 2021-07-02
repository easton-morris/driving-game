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

document.addEventListener('keydown', turnCar);

document.addEventListener('keydown', function (event) {
  if (event.code === 'ArrowLeft' || event.code === 'ArrowRight' ||
  event.code === 'ArrowDown' || event.code === 'ArrowUp') {
    event.preventDefault();
  }
});
