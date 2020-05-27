const API_PATH = "https://5e7d0266a917d70016684219.mockapi.io/api/v1/";

const getUsers = async (search = null) => {
  let url = API_PATH + `users` + (search != null ? `?search=${search}` : "");

  return getData(url);
};

const getUserPost = async (id) => {
  let url = API_PATH + `users/${id}/posts`;
  return getData(url);
};

const getStories = async (id) => {
  let url = API_PATH + `stories`;
  return getData(url);
};

const getData = async (url) => {
  try {
    const jsonData = await fetch(url);
    const data = await jsonData.json();

    return data ? data : [];
  } catch (error) {
    alert(error);
  }
};

export { getUsers, getUserPost, getStories };
