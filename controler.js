import * as model from "/js/model.js";
import movieView from "./js/movieView";
import movieArrivalsView from "./js/movieArrivalsView";
import VideoView from "./js/VideoView";
import ActorView from "./js/ActorView";
import Slider from "./js/Slider";
const controlStart = async function () {
  try {
    await model.takeMoviesFromApi(
      "https://api.themoviedb.org/3/movie/top_rated",
      "https://api.themoviedb.org/3/movie/upcoming"
    );
    await model.takeVideoFromApi("https://api.themoviedb.org/3/movie");
    await model.takeActorFromApi("https://api.themoviedb.org/3/person");
    movieView.render(model.state.movies.slice(0, 4));
    movieArrivalsView.render(model.state.moviesUpComing.slice(4, 8));
    VideoView.render(model.state.videos);
    ActorView.render(model.state.actors);
  } catch (err) {
    console.log(err);
  }
};

const controlSlider = function (arrow) {
  Slider.rightSlider(model.state.movies, arrow);
};

const init = function () {
  movieView.addHandlerRender(controlStart);
  Slider.addHandlerRender(controlSlider);
};

init();
