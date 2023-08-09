const Genius = require("genius-api");
const genius = new Genius(
  "glUAKQfjq81QqmqX6SCaq3OiUcavY7q1doNvfaLBD469fDKh8WtLIoYyq34r--pF"
);
const axios = require("axios");
const cheerio = require("cheerio");

const API_BASE_URL = "https://genius.com";
const searchTerm = "hype boy"; // 검색할 노래 제목

// Function to fetch lyrics for a given song title
async function fetchSongPath(searchTerm) {
  try {
    const response = await genius.search(searchTerm);
    const hits = response.hits;

    if (hits.length > 0) {
      const songPath = hits[1].result.path;
      console.log(songPath);
      return songPath;
    } else {
      throw new Error("No songs found.");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

async function extractLyrics(searchTerm) {
  try {
    const songPath = await fetchSongPath(searchTerm);
    const url = API_BASE_URL + songPath;
    // console.log(url);

    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const lyricsContainer = $('[data-lyrics-container="true"]');

    // Replace <br> with newline
    $("br", lyricsContainer).replaceWith("\n");

    // Replace the elements with their text contents
    $("a", lyricsContainer).replaceWith((_i, el) => $(el).text());

    // Remove all child elements, leaving only top-level text content
    lyricsContainer.children().remove();

    console.log(lyricsContainer.text());

    return lyricsContainer.text();
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = {
  fetchSongPath,
  extractLyrics,
};

fetchSongPath(searchTerm);
extractLyrics(searchTerm);
