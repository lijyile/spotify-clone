export const authEndoint = "https://accounts.spotify.com./authorize";
const redirectURi = "http://localhost:3000/";
const clientid = "2351581c1b0a4e7e96052b9c066a8d18";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
export const loginURL = `${authEndoint}?client_id=${clientid}&redirect_uri=${redirectURi}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
