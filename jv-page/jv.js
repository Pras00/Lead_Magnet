
// Countdown
const targetDate = new Date('2024-04-10T09:00:00-05:00').getTime();

const countdown = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const daysString = days.toString().padStart(2, '0');
  const hoursString = hours.toString().padStart(2, '0');
  const minutesString = minutes.toString().padStart(2, '0');
  const secondsString = seconds.toString().padStart(2, '0');
  const secondsPuluhan = Math.floor(seconds / 10);
  const secondsSatuan = seconds % 10;

  document.querySelector(".days").innerHTML = daysString;
  document.querySelector(".hours").innerHTML = hoursString;
  document.querySelector(".minutes").innerHTML = minutesString;
  document.querySelector(".seconds-puluhan").innerHTML = secondsPuluhan;
  document.querySelector(".seconds-satuan").innerHTML = secondsSatuan;

  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = `
    <div class="first-item count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="days font-extrabold text-4xl">${daysString}</div>
      <div class="font-bold">Days</div>
    </div>
    <div class="count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="hours font-extrabold text-4xl">${hoursString}</div>
      <div class="font-bold">Hours</div>
    </div>
    <div class="count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="minutes font-extrabold text-4xl">${minutesString}</div>
      <div class="font-bold">Minutes</div>
    </div>
    <div class="last-item count-item flex flex-col items-center justify-center bg-gradient-to-b from-white via-gray-200 to-gray-300">
      <div class="seconds font-extrabold text-4xl">${secondsString}</div>
      <div class="font-bold">Seconds</div>
    </div>
    `;
    document.querySelector(".result-container").style.display = "flex";
  }
}, 1000);


// Collapsible
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(collapsible => {
  collapsible.addEventListener('click', () => {
    collapsible.classList.toggle('active');
    const content = collapsible.nextElementSibling;
    const pElement = document.querySelector('.p-class');
    const upDownImage = collapsible.querySelector(".up-down-image");

    if (!collapsible.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
      pElement.style.marginTop = "2.5rem";
      upDownImage.style.transform = "rotate(180deg)"; 
    } else {
      content.style.maxHeight = null;
      pElement.style.marginTop = "9rem"; 
      upDownImage.style.transform = "rotate(0deg)";
    }
  });

  // Menampilkan div content saat halaman dimuat
  const content = collapsible.nextElementSibling;
  const pElement = document.querySelector('.p-class');
  const upDownImage = collapsible.querySelector(".up-down-image");
  content.style.maxHeight = content.scrollHeight + "px";
  pElement.style.marginTop = "2.5rem";
  upDownImage.style.transform = "rotate(180deg)"; 
});


function myFunction(x) {
  x.classList.toggle("change");
  const navBurger = document.querySelector(".burger")
  navBurger.classList.toggle("show");
}

// Scroll
const smoothScrollLinks = document.querySelectorAll('.smooth-scroll');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href');

    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({
        behavior: 'smooth'
    });
}



