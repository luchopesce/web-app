import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: String,
    image: String,
    likes: Number,
    tags: [String],
    text: String,
    publishDate: Date,
    owner: {
        id: String,
        title: String,
        firstName: String,
        lastName: String,
        picture: String
    }
});

const postModel = mongoose.model("posts", postSchema);
export default postModel;