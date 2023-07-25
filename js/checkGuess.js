// guess의 정답을 판단하고 처리하는 함수 선언
export function checkGuess(
  numGuesses,
  guessInput,
  answerSong,
  guessedContainer,
  hintContainer,
  guessBtn,
  resultContainer,
  hintImage,
  hintArray
) {
  // input 창에 있는 값을 guess로 가져옴
  const guess = guessInput.value.toLowerCase();

  // input field 초기화
  guessInput.value = "";

  if (guess === answerSong.toLowerCase()) {
    // 정답일 경우 result-container 안에 answerImg 및 successDiv 생성
    const answerImage = document.createElement("img");
    answerImage.id = "answer-image";
    answerImage.src = "./assets/answer.jpg";

    const successDiv = document.createElement("div");
    successDiv.innerText = `Congratulations! Answer: ${answerArtist}-${answerSong}.`;

    hintContainer.style.display = "none";
    guessInput.style.display = "none";
    guessBtn.style.display = "none";
    guessedContainer.style.display = "none";

    resultContainer.appendChild(answerImage);
    resultContainer.appendChild(successDiv);
  } else if (numGuesses === 6) {
    // guess 횟수가 6일 경우 정답 알려주는 화면 (정답 맞혔을 때와 ui 차이 있어야 할 것)
    const answerImage = document.createElement("img");
    answerImage.src = "./assets/answer.jpg";
    answerImage.id = "answer-image";

    const successDiv = document.createElement("div");
    successDiv.innerText = `Answer: ${answerArtist}-${answerSong}.`;

    hintContainer.style.display = "none";
    guessInput.style.display = "none";
    guessBtn.style.display = "none";
    guessedContainer.style.display = "none";

    resultContainer.appendChild(answerImage);
    resultContainer.appendChild(successDiv);
  } else {
    // 오답 입력했을 경우 다음 그림으로 바뀌기
    const guessedDiv = document.createElement("div");
    guessedDiv.classList.add("guessed-song");

    guessedDiv.innerText = guess;
    guessedContainer.appendChild(guessedDiv);

    hintImage.src = hintArray[numGuesses];
  }
  console.log(numGuesses);
}
