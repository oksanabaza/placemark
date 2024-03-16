import Mongoose from "mongoose";

const { Schema } = Mongoose;

const trackSchema = new Schema({
  title: String,
  artist: String,
  duration: Number,
  lat: Number,
  description: String,
  img: String,
  playlistid: {
    type: Schema.Types.ObjectId,
    ref: "Playlist",
  },
});

export const Track = Mongoose.model("Track", trackSchema);