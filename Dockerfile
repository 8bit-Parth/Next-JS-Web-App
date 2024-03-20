FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN npm run build

EXPOSE 3000

ENV HOSTNAME "0.0.0.0"

CMD [ "npm", "start" ]

ENV MONGO_URI mongodb+srv://Parth:KIUhC72QgLcQVpE0@cluster0.myfff6y.mongodb.net/web-app?retryWrites=true&w=majority&appName=Cluster0
