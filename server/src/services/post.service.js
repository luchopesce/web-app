import postModel from "../models/post.model.js";
import { options } from "../constants/options.js";
import { fetchData } from '../utils/fetchData.js'; 

const fetchPost = async () => {
  const { urlApi, appId } = options.api;
  try {
    const url = `${urlApi}/post`
    console.log("estpo viene ", url);
    const headers = { 'app-id': appId};
    const data = await fetchData(url, headers);
    const posts = data.data.map((item) => ({
      id: item.id,
      image: item.image,
      likes: item.likes,
      tags: item.tags,
      text: item.text,
      publishDate: new Date(item.publishDate),
      owner: {
        id: item.owner.id,
        firstName: item.owner.firstName,
        lastName: item.owner.lastName,
        picture: item.owner.picture,
      },
    }));

    await postModel.insertMany(posts);
    return await postModel.find();
  } catch (err) {
    console.error('Error en el fetch o en el modal:', err.message);
    throw new Error(err.message);
  }
};


const checkExistData = async () => {
  try {
    const existingPost = await postModel.find().exec();
    if (existingPost.length > 0) {
      return existingPost;
    }
    return null;
  } catch (err) {
    console.error('Error al chequear los datos:', err.message);
    throw new Error(err.message);
  }
};

const getPosts = async () => {
  try {
    const postData = await checkExistData();
    if (postData) {
      return postData;
    }
    const getData = await fetchPost();
    return getData;
  } catch (err) {
    console.error('Error al mostrar los posts:', err.message);
    throw new Error(err.message);
  }
};

export default {
  getPosts,
};
