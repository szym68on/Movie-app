const API_KEY = "8720e91bc2904bada215f1fc174b4a56";

export const getData = async function (url) {
  try {
    const data = await fetch(`${url}?api_key=${API_KEY}`);
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getDataVideo = async function (url, id) {
  try {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`
    );
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};

export const getActor = async function (url, id) {
  try {
    const data = await fetch(`${url}/${id}?api_key=${API_KEY}`);
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
