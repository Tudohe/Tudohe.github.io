let rotateSlides; 

function previous(e) {
  e.preventDefault();
  
  const slides = Array.prototype.slice.call(document.getElementsByClassName('slides')[0].children);
  const selectedSlide = slides.find(slide => slide.classList.contains('selected-slide'));
  const indicators = Array.prototype.slice.call(document.getElementsByClassName('indicators')[0].children);
  const selectedIndicator = indicators.find(indicator => indicator.classList.contains('selected'));

  let previousSlideIndex = Number(selectedSlide.id.substring(5)) - 1;

  let previousSlide = document.getElementById('slide' + previousSlideIndex);
  
  if (!previousSlide) {
    previousSlideIndex = slides[slides.length - 1].id.substring(5);
    previousSlide = document.getElementById('slide' + previousSlideIndex);
  }

  const previousIndicator = document.getElementsByClassName('indicator' + previousSlideIndex)[0];
  
  selectedSlide.classList.remove('selected-slide');
  selectedSlide.style.display = 'none';
  
  previousSlide.classList.add('selected-slide');
  previousSlide.style.display = 'initial';

  selectedIndicator.classList.remove('selected');
  previousIndicator.classList.add('selected');
}

function next(e) {
  e.preventDefault();
  
  const slides = Array.prototype.slice.call(document.getElementsByClassName('slides')[0].children);
  const selectedSlide = slides.find(slide => slide.classList.contains('selected-slide'));
  const indicators = Array.prototype.slice.call(document.getElementsByClassName('indicators')[0].children);
  const selectedIndicator = indicators.find(indicator => indicator.classList.contains('selected'));

  let nextSlideIndex = 1 + Number(selectedSlide.id.substring(5));

  let nextSlide = document.getElementById('slide' + nextSlideIndex);
  
  if (!nextSlide) {
    nextSlideIndex = slides[0].id.substring(5);
    nextSlide = document.getElementById('slide' + nextSlideIndex);
  }

  const nextIndicator = document.getElementsByClassName('indicator' + nextSlideIndex)[0];
  
  selectedSlide.classList.remove('selected-slide');
  selectedSlide.style.display = 'none';
  
  nextSlide.classList.add('selected-slide');
  nextSlide.style.display = 'initial';

  selectedIndicator.classList.remove('selected');
  nextIndicator.classList.add('selected');
}

function Timer(fn, timer) {
  var currentTimer = setInterval(fn, timer);

  this.stop = function() {
    if (currentTimer) {
      clearInterval(currentTimer);
      currentTimer = null;
    }
    return this;
  }

  this.start = function() {
    if (!currentTimer) {
      this.stop();
      currentTimer = setInterval(fn, timer);
    }
    return this;
  }

  this.reset = function(newTimer = timer) {
    timer = newTimer;
    return this.stop().start();
  }
}

document.getElementById('previous').addEventListener('click', function(e) {
  rotateSlides.reset(5000);
  previous(e);
});

document.getElementById('next').addEventListener('click', function(e) {
  rotateSlides.reset(5000);
  next(e);
});

window.onload = function() {   
  rotateSlides = new Timer(function() {
    document.getElementById('next').click();
  }, 5000);
}