let slider = document.getElementById("mySlider");
let discountResult = document.querySelector(".discount");
let views = document.getElementById("number-pageviews");
let price = document.getElementById("price");

views.innerHTML = 100 + "K";

slider.oninput = function () {
  switch (parseInt(this.value)) {
    case 0:
      views.innerHTML = 10 + 'K';
      break;
    case 1:
      views.innerHTML = 100 + "K";
      break;
    case 2:
      views.innerHTML = 500 + 'K';
      break;

      case 3:
      views.innerHTML = 1 + 'M';
      break;

  }
};

slider.addEventListener('mousemove', function(){
    let value = slider.value;
    let colorSlide = `linear-gradient(to right, var(--full-Slider-Bar))` + value + `%, var(--full-Slider-Bar)` + x + `%, var(--empty-slider-bar)` + value `%,var(--empty-slider-bar)`;
    slider.style.backgroun = colorSlide;
})



// window.onload = function() {
//     sliderChange();
// };

// discountSwitch.onclick = function () {
//     this.classList.toggle('switch-active')
//     if (this.classList.contains('switch-active')) {
//         discount = true
//     }else {
//         discount = false
//     }
//     sliderChange();
// }

// slider.oninput = function () {
//     sliderChange();
// }

// const sliderChange = ()=> {
//     let percent = (slider.value-slider.min)/(slider.max-slider.min)*100;
//     let value = slider.value;
//     slider.style.background = `linear-gradient(to right, var(--sliderBg) 0%, var(--sliderBg) ${percent}%, var(--sliderBgAfterThumb) ${percent}%, var(--sliderBgAfterThumb) 100%)`;
//     switch (value) {
//         case '0':
//             views.innerText = '10k';
//             price.innerText =`$${(8 * (discount ? 0.75 : 1)).toFixed(2)}`
//             break;
//         case '1':
//             views.innerText = '50k';
//             price.innerText =`$${(12 * (discount ? 0.75 : 1)).toFixed(2)}`
//             break;
//         case '2':
//             views.innerText = '100k';
//             price.innerText = `$${(16 * (discount ? 0.75 : 1)).toFixed(2)}`
//             break;
//         case '3':
//             views.innerText = '500k';
//             price.innerText = `$${(24 * (discount ? 0.75 : 1)).toFixed(2)}`
//             break;
//         case '4':
//             views.innerText = '1m';
//             price.innerText = `$${(36 * (discount ? 0.75 : 1)).toFixed(2)}`
//             break;
//     }
// }
