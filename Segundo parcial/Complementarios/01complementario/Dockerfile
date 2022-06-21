FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_USER=root
ENV MONGO_PASS=pass
ENV MONGO_DATABASE=DockerTS
ENV PORT=3000

EXPOSE 3000

CMD ["node", "dist/index.js"]


