FROM node:20-alpine as builder

WORKDIR src/app

COPY package*.json ./

RUN npm install
 
COPY . .

RUN npm run build

EXPOSE 3000

ENV HOSTNAME "0.0.0.0"

CMD [ "npm", "run", "start" ]

ENV MONGO_URI ${{ secrets.MONGO_URI }}
