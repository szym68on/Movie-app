import img from "../images/Play.png";
import { View } from "./View";
class VideoView extends View {
  _parentElement = [...document.querySelectorAll(".video-card")];
  _makeMarkup(movie) {
    const markup = `
        <div class="relative flex items-center justify-center w-full">
        <img src="http://image.tmdb.org/t/p/w500/${movie.path}" alt="" class=" overflow-hidden duration-200 md:hover:scale-105 " />
        <img src="${img}" alt="" class="absolute cursor-pointer z-50">
      </div>
  
    <h5 class="text-[18px] font-bold mt-1">${movie.name}</h5>`;
    return markup;
  }
}
export default new VideoView();
