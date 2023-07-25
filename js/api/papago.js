const axios = require('axios');

// 파파고 API 요청을 위한 클라이언트 ID와 클라이언트 시크릿
const clientId = 'm_oLETDzY8QjOoC1umee';
const clientSecret = 'lVr31ylqhV';

// 번역 함수
async function translateText(text, sourceLang, targetLang) {
  try {
    const response = await axios.post(
      'https://openapi.naver.com/v1/papago/n2mt',
      {
        source: sourceLang,
        target: targetLang,
        text: text,
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientSecret,
        },
      }
    );

    // 응답 데이터에서 번역 결과 추출
    const translatedText = response.data.message.result.translatedText;
    return translatedText;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// 번역 함수 사용 예시
const sourceText = '번역할 만한 괜찮은 말 없어?'; // 번역할 텍스트
const sourceLang = 'ko'; // 원본 언어 코드 (Korean)
const targetLang = 'en'; // 번역할 언어 코드 (English)

translateText(sourceText, sourceLang, targetLang)
  .then(translatedText => {
    console.log(translatedText,', digital painting');
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
