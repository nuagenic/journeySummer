export class Game {
  constructor() {
    // game 상태 초기화
    this.numGuesses = 0;
    this.answerSong = "Attention";
    this.answerArtist = "Newjeans";

    // HTML elements 불러오기
    this.hintContainer = document.getElementById("hint-container");
    this.hintImage = document.getElementById("hint-image");
    this.guessInput = document.getElementById("guess-input");
    this.guessBtn = document.getElementById("guess-btn");
    this.guessedContainer = document.getElementById("guessed-container");
    this.resultContainer = document.getElementById("result-container");

    // hintArray 생성. Array에 <img> tag의 src 저장
    this.hintArray = [];
    for (var i = 1; i <= 6; i++) {
      var hintSrc = `./assets/hint${i}.png`;
      this.hintArray.push(hintSrc);
    }

    // hintImage src 초기화
    this.hintImage.src = this.hintArray[this.numGuesses];
  }

  showResult(resultText) {
    const answerImage = document.createElement("img");
    answerImage.src = "./assets/answer.jpg";
    answerImage.id = "answer-image";

    const successDiv = document.createElement("div");
    successDiv.innerText = resultText;

    this.hintContainer.style.display = "none";
    this.guessInput.style.display = "none";
    this.guessBtn.style.display = "none";
    this.guessedContainer.style.display = "none";

    this.resultContainer.appendChild(answerImage);
    this.resultContainer.appendChild(successDiv);
  }

  switchHint(guess) {
    const guessedDiv = document.createElement("div");
    guessedDiv.classList.add("guessed-song");

    guessedDiv.innerText = guess;
    this.guessedContainer.appendChild(guessedDiv);

    this.hintImage.src = this.hintArray[this.numGuesses];
  }

  checkGuess() {
    const guess = this.guessInput.value.toLowerCase();
    this.guessInput.value = "";

    if (guess === this.answerSong.toLowerCase()) {
      // 정답일 경우
      this.showResult(
        `Congratulations! Answer: ${this.answerArtist}-${this.answerSong}.`
      );
    } else if (this.numGuesses === 6) {
      // numGuesses 6회까지 정답 못 맞혔을 경우
      this.showResult(`Answer: ${this.answerArtist}-${this.answerSong}.`);
    } else {
      // 힌트 스위치
      this.switchHint(guess);
    }
  }

  incrementGuesses() {
    this.numGuesses++;
  }
}
