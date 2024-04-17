
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
    document.querySelector(".countdown-container").style.display = "none";
    document.querySelector(".get-it").innerHTML = 
    `<div class="get-it flex justify-center items-center w-full -my-20 max-[992px]:scale-[0.9] max-[768px]:scale-[0.7] max-[480px]:scale-[0.5] max-[992px]:-mt-52 max-[480px]:-mt-76 max-[480px]:-mb-76">
      <a class="flex justify-between items-center w-[292px] bg-[#352CE8] px-2 py-2 rounded-[50px] hover:scale-105 duration-200" href="../lead-magnet-sales-page/index.php">
        <h3 class="text-white text-[2rem] pl-6">Get It NOW</h3>
        <img width="20%" src="./img/arrow-get.png" alt="img">
      </a>
    </div>`;
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



