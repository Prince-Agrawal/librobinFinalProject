const fs = require("fs");
const readline = require("readline");
const { google } = require("googleapis");
require("dotenv").config();

//Drive API, v3
//https://www.googleapis.com/auth/drive	See, edit, create, and delete all of your Google Drive files
//https://www.googleapis.com/auth/drive.file View and manage Google Drive files and folders that you have opened or created with this app
//https://www.googleapis.com/auth/drive.metadata.readonly View metadata for files in your Google Drive
//https://www.googleapis.com/auth/drive.photos.readonly View the photos, videos and albums in your Google Photos
//https://www.googleapis.com/auth/drive.readonly See and download all your Google Drive files
// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/drive"];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.

// console.log("ffffffffffff" , process.env.CLIENT_ID)
const TOKEN_PATH = "token.json";


const uploadBookDrive = (fileName) => {
  return new Promise((resolve, reject) => {
    // Load client secrets from a local file.
    // fs.readFile("credentials.json", (err, content) => {
    //   if (err) {
    //     console.log("Error loading client secret file:", err);
    //     return reject(err.message);
    //   }
      // Authorize a client with credentials, then call the Google Drive API.
      // authorize(JSON.parse(content), listFiles);
      // return resolve(authorize(fileName, getFile));
      return resolve(authorize(fileName, uploadFile));
    // });
  });
};

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(fileName,callback) {
  return new Promise((resolve, reject) => {
    // const { client_secret, client_id, redirect_uris } = credentials.installed;
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const redirect_uri =process.env.REDIRECT_URI;

    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uri
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      // console.log('ccccccccccc' ,JSON.parse(token))
      if (err) {
        return resolve(getAccessToken(oAuth2Client, callback, fileName));
      }
      oAuth2Client.setCredentials(JSON.parse(token));
      return resolve(callback(oAuth2Client, fileName)); //list files and upload file
      // return resolve(callback(oAuth2Client, fileName));//get file
    });
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getAccessToken(oAuth2Client, callback, fileName) {
  return new Promise((resolve, reject) => {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });
    console.log("Authorize this app by visiting this url:", authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Enter the code from that page here: ", (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) {
          console.error("Error retrieving access token", err);
          return reject(err.message);
        }
        oAuth2Client.setCredentials(token);
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) {
            console.error(err);
            return reject(err.message);
          }
          console.log("Token stored to", TOKEN_PATH);
        });
        return resolve(callback(oAuth2Client, fileName));
      });
    });
  });
}

/**
 * Lists the names and IDs of up to 10 files.
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
  const drive = google.drive({ version: "v3", auth });
  getList(drive, "");
}
function getList(drive, pageToken) {
  drive.files.list(
    {
      corpora: "user",
      pageSize: 10,
      //q: "name='elvis233424234'",
      pageToken: pageToken ? pageToken : "",
      fields: "nextPageToken, files(*)",
    },
    (err, res) => {
      if (err) return console.log("The API returned an error: " + err);
      const files = res.data.files;
      if (files.length) {
        console.log("Files:");
        processList(files);
        if (res.data.nextPageToken) {
          getList(drive, res.data.nextPageToken);
        }

        // files.map((file) => {
        //     console.log(`${file.name} (${file.id})`);
        // });
      } else {
        console.log("No files found.");
      }
    }
  );
}
function processList(files) {
  console.log("Processing....");
  files.forEach((file) => {
    // console.log(file.name + '|' + file.size + '|' + file.createdTime + '|' + file.modifiedTime);
    console.log(file);
  });
}
function uploadFile(auth, fileName) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth });
    var fileMetadata = {
      
      name: fileName.myFile.name,
      parents:["1mDaP4hn9YbjUxTpPl1NS1-BRjGbOX0DV"]
    };
    var media = {
      mimeType: fileName.myFile.type,
      body: fs.createReadStream(fileName.myFile.path),
    };
    drive.files.create(
      {
        resource: fileMetadata,
        media: media,
        fields: "id",
      },
      function (err, res) {
        if (err) {
          // Handle error
          console.log(err);
          return reject(err.message);
        } else {
          console.log("File Id: ", res.data.id); // get id of uploaded by ( res.data.id )
          return resolve(res.data.id);
        }
      }
    );
  });
}
function getFile(auth, fileId) {
  return new Promise((resolve, reject) => {
    const drive = google.drive({ version: "v3", auth });
    drive.files.get({ fileId: fileId, fields: "*" }, (err, res) => {
      if (err){ console.log("The API returned an error: " + err) ; return reject(err.message)}
      else{
      console.log(res.data);
      return resolve(res.data.webViewLink);
      }
    });
  })
  
}

module.exports = uploadBookDrive;
