/* eslint-disable */
const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

exports.handler = async (event, context) => {
  const refreshToken = process.env.VITE_SPOTIFY_REFRESH_TOKEN

  const auth = Buffer.from(
    `${process.env.VITE_SPOTIFY_CLIENT_ID}:${process.env.VITE_SPOTIFY_CLIENT_SECRET}`
  ).toString('base64')

  const tokenEndpoint = `https://accounts.spotify.com/api/token`

  const options = {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `grant_type=refresh_token&refresh_token=${refreshToken}&redirect_uri=${encodeURI(
      'https://localhost:8888',
      +'/.netlify/functions/spotifyCallback&scope=user-read-currently-playing'
    )}`,
  }

  const accessToken = await fetch(tokenEndpoint, options)
    .then((res) => res.json())
    .then((json) => {
      return json.access_token
    })
    .catch((err) => {
      console.error(err)
    })

  const currentlyPlayingEndpoint = `https://api.spotify.com/v1/me/player/currently-playing?market=DE&additional_types=episode`
  return fetch(`${currentlyPlayingEndpoint}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then((res) => res.json())
    .then((json) => {
      return json
    })
    .then((json) => {
      return {
        statusCode: 200,
        body: JSON.stringify(json),
      }
    })
}
