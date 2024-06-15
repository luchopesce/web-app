import postService from "../services/post.service.js";

const getPostController = async (req, res) => {
  try {
    const result = await postService.getPosts();
    res.status(200).send({ status: "ok", payload: result });
  } catch (err) {
    res.status(400).send({ status: "error", payload: err.message });
  }
};

export default {
    getPostController
  };