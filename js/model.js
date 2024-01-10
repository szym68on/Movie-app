import { Movie } from "./Movie";
import { getActor, getData } from "./helper";
import { getDataVideo } from "./helper";
import { Video } from "./Video";
import { Actor } from "./Actor";
export const state = {
  movies: [],
  moviesUpComing: [],
  videos: [],
  actors: [],
};

const createMovieObj = function (el) {
  const movieObj = new Movie(
    el.id,
    el.title,
    el.poster_path,
    el.vote_average,
    el.overview,
    el.release_date,
    el.genre_ids
  );
  return movieObj;
};

export const takeMoviesFromApi = async function (url, url2) {
  try {
    const [res, resUpComing] = await Promise.all([getData(url), getData(url2)]);
    const data = res.results;
    const dataUpComing = resUpComing.results;

    data.forEach((el, index) => {
      const movieObj = createMovieObj(el);
      const movieUpComing = createMovieObj(dataUpComing[index]);
      state.movies.push(movieObj);
      state.moviesUpComing.push(movieUpComing);
    });
  } catch (err) {
    console.log(err);
  }
};

export const takeVideoFromApi = async function (url) {
  const objectMovies = state.movies.slice(0, 3);
  const res = await Promise.all([
    getDataVideo(url, objectMovies[0].id),
    getDataVideo(url, objectMovies[1].id),
    getDataVideo(url, objectMovies[2].id),
  ]);

  res.forEach((el) => {
    const videoObj = new Video(
      el.id,
      el.original_title,
      el.videos.results[0].key,
      el.backdrop_path
    );
    state.videos.push(videoObj);
  });
};
export const takeActorFromApi = async function (url) {
  const res = await Promise.all([
    getActor(url, 200),
    getActor(url, 210),
    getActor(url, 220),
    getActor(url, 230),
  ]);

  res.forEach((el) => {
    const objActor = new Actor(el.id, el.name, el.profile_path);
    state.actors.push(objActor);
  });
};
