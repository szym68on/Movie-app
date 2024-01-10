import movieView from "./movieView";

class Slider {
  _arrows = document.querySelectorAll(".arrow");
  _parentElement = [...document.querySelectorAll(".card-movie")];
  indexSlider = 0;

  _clearCard() {
    this._parentElement.forEach((el) => {
      el.innerHTML = "";
    });
  }

  addHandlerRender(handler) {
    this._arrows.forEach((el) => {
      el.addEventListener("click", function () {
        handler(el);
      });
    });
  }

  rightSlider(movies, arrow) {
    movieView.hideCard();

    if (arrow.classList.contains("arrow-right")) {
      this.indexSlider++;
    } else {
      this.indexSlider--;
    }
    this._clearCard();
    if (this.indexSlider === movies.length) this.indexSlider = 0;
    else if (this.indexSlider === -1) this.indexSlider = movies.length - 4;
    movieView.render(movies.slice(this.indexSlider, this.indexSlider + 4));
  }
}
export default new Slider();
