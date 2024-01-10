export class View {
  _parentElement;

  _removeHideClass() {
    const targetEl = this;

    setTimeout(function () {
      targetEl._parentElement.forEach((el) => {
        el.classList.remove("hide");
      });
    }, 500);
  }
  render(movies) {
    movies.forEach((movie, index) => {
      const markup = this._makeMarkup(movie);
      this._parentElement[index].insertAdjacentHTML("afterbegin", markup);
    });
    this._removeHideClass();
  }
}
