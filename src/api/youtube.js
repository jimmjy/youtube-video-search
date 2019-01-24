import axios from "axios";

const KEY = "AIzaSyDki2-6vbLaW0LOj4TkcZ8OM0oJjeJkX7o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 10,
    key: KEY
  }
});
