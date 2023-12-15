import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const pageCollection = 'pages';

const pageSchema = new mongoose.Schema({
    projectName: { type: String, required: true },
    type: { type: String, required: true },
    city: { type: String },
    state: { type: String },
    publicEmail: { type: String },
    phonePublic: { type: Number },
    weAre: { type: String },
    videoOk: { type: String },
    video1: { type: String },
    video2: { type: String },
    userId: { type: String },
    img: [
        {
            imgName: { type: String },
            imgUrl: { type: String }
        }
    ]
});

pageSchema.plugin(mongoosePaginate);

export const pageModel = mongoose.model(pageCollection, pageSchema);