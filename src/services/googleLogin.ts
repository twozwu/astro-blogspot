import { google } from "googleapis";

// Each API may support multiple versions. With this sample, we're getting
// v3 of the blogger API, and using an API key to authenticate.
const blogger = google.blogger({
  version: "v3",
  auth: import.meta.env.API_KEY,
});

const params = {
  blogId: "865432666597080328",
};

// get the blog details
blogger.blogs.get(params, (err, res) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log(`The blog url is ${res.data.url}`);
});

const oauth2Client = new google.auth.OAuth2(
  import.meta.env.CLIENT_ID,
  import.meta.env.CLIENT_SECRET,
  import.meta.env.REDIRECT_URI
);

// set auth as a global default
google.options({
  auth: oauth2Client,
});

// generate a url that asks permissions for Blogger and Google Calendar scopes
const scopes = [
  "https://www.googleapis.com/auth/blogger",
  "https://www.googleapis.com/auth/userinfo.profile",
  "https://www.googleapis.com/auth/userinfo.email",
  "https://www.googleapis.com/auth/user.gender.read",
  "https://www.googleapis.com/auth/user.birthday.read",
];

const loginUrl = oauth2Client.generateAuthUrl({
  // 'online' (default) or 'offline' (gets refresh_token)
  access_type: "offline",
  // If you only need one scope you can pass it as a string
  scope: scopes,
});

export { loginUrl };