import { Game } from "./game.js";
import { fetchImageURL } from "./api/image.js";
import { fetchSongPath, extractLyrics } from "./api/genius.js";

const geniusModule = require("./api/genius.js");
//openai 이미지 생성 함수. 테스트 필요할 시에만 주석 풀고 진행하기
(async () => {
  const imageUrl = await fetchImageURL();
  if (imageUrl) {
    console.log(imageUrl);
    // Further processing or displaying of the image URL can be done here
  }
})();

document.addEventListener("DOMContentLoaded", async () => {
  const lyricsContainer = document.getElementById("lyrics-container");
  const searchTerm = "Hype Boy";

  // Add an event listener to a button or trigger the process in some way
  const getLyricsBtn = document.getElementById("get-lyrics-btn");
  if (getLyricsBtn) {
    getLyricsBtn.addEventListener("click", async () => {
      console.log("Button clicked"); // Check if the button click event is firing
      const lyrics = await extractLyrics(searchTerm);
      if (lyrics) {
        console.log(lyrics); // Check if lyrics are extracted correctly
        lyricsContainer.innerText = lyrics;
      } else {
        console.log("Lyrics not found");
        lyricsContainer.innerText = "Lyrics not found.";
      }
    });
  } else {
    console.log("Button not found");
  }
});

console.log("hello");

// 새로운 Game 인스턴스 생성
const game = new Game();

// 'guess' 버튼 클릭하거나 'Enter' 키 입력 시 numGuess 1 증가 및 checkGuess 실행
game.guessBtn.addEventListener("click", handleGuess);
game.guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    handleGuess();
  }
});

function handleGuess() {
  game.incrementGuesses();
  game.checkGuess();
}
