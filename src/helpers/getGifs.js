export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=3a0NN6asX2Q73tG8u61nZ9At0wvu3LGr&q=${category}&limit=10`;
  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  return gifs;
};
