import { View } from "./View";

class ActorView extends View {
  _parentElement = [...document.querySelectorAll(".actor-card")];

  _makeMarkup(actor) {
    const markup = `
         <img src="http://image.tmdb.org/t/p/w500/${actor.path}" alt="" class=" overflow-hidden duration-200 md:hover:scale-105 " />
         
          <h5 class="text-[18px] font-bold mt-1">${actor.name}</h5>
           `;
    return markup;
  }
}

export default new ActorView();
