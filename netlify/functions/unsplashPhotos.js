/* eslint-disable */
const fetch = require('node-fetch')
const dotenv = require('dotenv')
dotenv.config()

exports.handler = async function (event, context) {
  const headers = {
    Accept: 'application/json',
    Authorization: `Client-ID ${process.env.VITE_UNSPLASH_API_KEY}`,
  }
  try {
    const response = await fetch(
      `${process.env.VITE_UNSPLASH_API_URL_PHOTOS}?per_page=12&stats=true`,
      {
        headers,
      }
    )
    if (!response.ok) {
      return { statusCode: response.status, body: response.statusText }
    }
    const data = await response.json()

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: error.message }),
    }
  }
}
