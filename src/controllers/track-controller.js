import { db } from "../models/db.js";
import { TrackSpec } from "../models/joi-schemas.js";
import { imageStore } from "../models/mongo/image-store.js";

export const trackController = {
  index: {
    handler: async function (request, h) {
      const playlist = await db.playlistStore.getPlaylistById(request.params.id);
      const viewData = {
        title: "Playlist",
        playlist: playlist,
      };
      return h.view("playlist-view", viewData);
    },
  },
  uploadImage: {
    handler: async function (request, h) {
      try {
        const playlist = await db.playlistStore.getPlaylistById(request.params.id);
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          const url = await imageStore.uploadImage(request.payload.imagefile);
          playlist.img = url;
          await db.playlistStore.updatePlaylist(playlist);
        }
        return h.redirect(`/playlist/${playlist._id}`);
      } catch (err) {
        console.log(err);
        return h.redirect(`/playlist/${playlist._id}`);
      }
    },
    payload: {
      multipart: true,
      output: "data",
      maxBytes: 209715200,
      parse: true,
    },
  },

};
