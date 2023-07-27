const sqlite3 = require('sqlite3');
const express = require('express');
const { timeStamp } = require('console');
const axios = require('axios');
const querystring = require('querystring');
const app = express();

function connect() {
    let db = new sqlite3.Database('./newsletter.db', (err) => {
        if (err) {
          console.error(err.message);
        }
        else {
            console.log("Connected to Database at " + Date(Date.now()))
        }
      })
      return db;
}

function runInsert(query) {
    let db = connect();
    db.all(query);
    db.close();
}

app.get('/register/newsletter', function(req, res) {
    let ipAddress = req.socket.remoteAddress;
    let emailAddress = req.query.email;
    console.log(ipAddress);
    runInsert(`insert into signups select '${ipAddress}', '${emailAddress}'`);
    res.send(`'${ipAddress}', '${emailAddress}' has been logged to database.`);
    
});

app.get('/auth/discord', async function(req, res) {
    let code = req.query.code;
    const clientId = '1119456207128768665';
    const clientSecret = 'cIjbFtNYd_urhwREyCOxa8FzNvDnaD_l';
    const redirectUri = 'http://localhost:3000/auth/discord';
    const tokenEndpoint = 'https://discord.com/api/oauth2/token';
    const apiEndpoint = 'https://discord.com/api/v10';
    
    const params = querystring.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri,
        scope: 'identify',
      });
    
      try {
        const tokenResponse = await axios.post(tokenEndpoint, params, {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });
    
        const accessToken = tokenResponse.data.access_token;
        const refreshToken = tokenResponse.data.refresh_token;

        const { data: userData } = await axios.get(`${apiEndpoint}/users/@me`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        res.send(userData);
    }
    catch (error) {
            console.error('Error exchanging authorization code for access token:', error);
            res.status(500).send('Internal Server Error');
          }
});

app.listen(3000, () => console.log(`Server is listening on port 3000`))