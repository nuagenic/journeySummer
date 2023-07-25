import { Configuration, OpenAIApi } from "openai";

// OpenAI API 환경 변수 설정
const apiKey = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);
// console.log(openai);
// console.log(process.env.OPENAI_API_KEY);

export async function fetchImageURL() {
  try {
    const response = await openai.createImage({
      prompt: "attention",
      n: 1,
      size: "256x256",
    });
    const imageUrl = response.data.data[0].url;
    return imageUrl;
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
    return null;
  }
}
