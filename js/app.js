import { Game } from "./game.js";
import { fetchImageURL } from "./api/image.js";

// //openai 이미지 생성 함수. 테스트 필요할 시에만 주석 풀고 진행하기
// (async () => {
//   const imageUrl = await fetchImageURL();
//   if (imageUrl) {
//     console.log(imageUrl);
//     // Further processing or displaying of the image URL can be done here
//   }
// })();

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
