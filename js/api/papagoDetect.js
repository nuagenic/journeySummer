const axios = require('axios');

// 파파고 API 요청을 위한 클라이언트 ID와 클라이언트 시크릿
const clientId = 'm_oLETDzY8QjOoC1umee';
const clientSecret = 'lVr31ylqhV';

// 언어 감지 함수
async function detectLanguage(text) {
  try {
    const response = await axios.post(
      'https://openapi.naver.com/v1/papago/detectLangs',
      {
        query: text,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-Naver-Client-Id': clientId,
          'X-Naver-Client-Secret': clientSecret,
        },
      }
    );

    // 응답 데이터에서 감지된 언어 추출
    const detectedLanguage = response.data.langCode;
    return detectedLanguage;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

// 언어 감지 함수 사용 예시
const textToDetect = '빠져버리는 daydream'; // 언어를 감지할 텍스트
detectLanguage(textToDetect)
  .then(detectedLanguage => {
    console.log('Detected Language:', detectedLanguage);
    
    if(detectedLanguage == "ko"){
      var transSource  = textToDetect;
    }
    console.log('번역할 한국어 :', transSource)
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  
