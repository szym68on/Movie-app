const IMAGE_PATH = "http://image.tmdb.org/t/p/w500/";
import img from "../images/imdb.png";
import { View } from "./View";
class movieView extends View {
  _parentElement = [...document.querySelectorAll(".card-movie")];

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _makeMarkup(movie) {
    const markup = `
    
    <img src="http://image.tmdb.org/t/p/w500/${
      movie.path
    }" alt="Image Movie" class=" duration-200 md:hover:scale-105 img_front " />
    <p class="text-[12px] text-gray-300 mt-3 text-bold">
      Usa,${movie.date}
    </p>
    <h5 class="text-[18px] font-bold mt-1 ">${movie.title}</h5>
    <div class="flex space-x-3 items-center md:space-x-6 mt-2">
      <div>
        <img src="${img}" alt="" class="md:w-9 w-6" />
      </div>

      <p
        class="text-gray-900 text-[10px] md:text-[12px] text-center opacity-60"
      >
        ${Math.trunc(movie.voteAverage * 10)}/100
      </p>
    </div>
    <p class="text-[12px] text-gray-300 mt-3 text-bold">
      Action,Adventure
    </p>
    <div
      class="mx-auto w-full h-[1px] bg-gray-200 mt-18 md:hidden"
    ></div>
    <div class="absolute flex space-x-1 items-center justify-end top-3 right-3  ">
      <div class="bg-gray-100 w-4 h-4 rounded-full opacity-30 p-4 flex justify-center items-center hover:bg-rose-500 hover:opacity-100 arrow_left arrows">
        <div class="group">
          <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 z-40 cursor-pointer  ">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-gray-900"
            
            />
            </svg>
        </div>
      
      </div>
      <div class="bg-gray-100 w-4 h-4 rounded-full opacity-30 p-4 flex justify-center items-center hover:bg-white hover:opacity-100 arrow_right arrows">
        <div class="group">
          <svg class="w-4 h-4 z-40 cursor-pointer " viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#020202;stroke-miterlimit:10;stroke-width:1.91px;}</style></defs><line class="cls-1" x1="17.73" y1="11.05" x2="10.09" y2="11.05"/><line class="cls-1" x1="17.73" y1="14.86" x2="10.09" y2="14.86"/><line class="cls-1" x1="17.73" y1="18.68" x2="10.09" y2="18.68"/><polygon class="cls-1" points="20.59 6.27 20.59 22.5 3.41 22.5 3.41 1.5 15.82 1.5 20.59 6.27"/><polygon class="cls-1" points="20.59 6.27 20.59 7.23 14.86 7.23 14.86 1.5 15.82 1.5 20.59 6.27"/><line class="cls-1" x1="6.27" y1="11.05" x2="8.18" y2="11.05"/><line class="cls-1" x1="6.27" y1="14.86" x2="8.18" y2="14.86"/><line class="cls-1" x1="6.27" y1="18.68" x2="8.18" y2="18.68"/></svg>
        </div>
        

      </div>
    </div>
   `;
    return markup;
  }

  // .fade-out {
  //   opacity: 1;
  //   transition: opacity 0.5s ease-out;
  // }
  // .fade-out.hidden {
  //   opacity: 0;
  // }
  removeHideClass() {
    this._parentElement.forEach((el) => {
      el.classList.remove("hide");
    });
  }
  hideCard() {
    this._parentElement.forEach((el) => {
      el.classList.add("hide");
    });
  }
}

export default new movieView();
