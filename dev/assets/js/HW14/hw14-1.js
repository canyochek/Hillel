const images = [
  'https://media.istockphoto.com/id/517188688/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B0%D0%BD%D0%B4%D1%88%D0%B0%D1%84%D1%82.jpg?s=612x612&w=0&k=20&c=6Qfb5YCLIkiq_hYxRmTj8t2FWwr4Yrdq2CRGVwj5Ymk=',
  'https://media.istockphoto.com/id/517188688/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B0%D0%BD%D0%B4%D1%88%D0%B0%D1%84%D1%82.jpg?s=612x612&w=0&k=20&c=6Qfb5YCLIkiq_hYxRmTj8t2FWwr4Yrdq2CRGVwj5Ymk=',
  'https://media.istockphoto.com/id/517188688/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B3%D0%BE%D1%80%D0%BD%D1%8B%D0%B9-%D0%BB%D0%B0%D0%BD%D0%B4%D1%88%D0%B0%D1%84%D1%82.jpg?s=612x612&w=0&k=20&c=6Qfb5YCLIkiq_hYxRmTj8t2FWwr4Yrdq2CRGVwj5Ymk='
];

let currentIndex = 0;

const sliderImage = document.getElementById('sliderImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');

function showSlide(index) {
  sliderImage.src = images[index];

  prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = index === images.length - 1 ? 'none' : 'inline-block';

  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');
}

function createDots() {
  images.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === currentIndex) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentIndex = i;
      showSlide(currentIndex);
    });
    dotsContainer.appendChild(dot);
  });
}

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    showSlide(currentIndex);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    showSlide(currentIndex);
  }
});


createDots();
showSlide(currentIndex);