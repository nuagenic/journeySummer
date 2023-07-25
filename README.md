# journeySummer

코드 수정 후, 실행시키고 싶을 때:
(터미널) npx webpack -> bundle.js 업데이트하는 코드
(터미널) npm run start -> localhost 실행하는 코드

openai api key는 노션에 공유함. 프로젝트 main 폴더에 .env 만들고, OPENAI_API_KEY="api key" 적으면 작동될 것.

## things to install:

npm install openai
npm install @babel/core @babel/preset-env babel-loader --save-dev
npm install dotenv-webpack --save-dev
