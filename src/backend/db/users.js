import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have likes (Likes are set to 0 by default), History Array, Playlists Array (added Watch Later Playlist in it by default) by default
 * */

export const users = [
  {
    _id: "41c8585c-5fab-4748-83c2-fb07bde54b86",
    firstName: "Niket",
    lastName: "Mishra",
    email: "niketmishra@gmail.com",
    password: "niketmishra@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
