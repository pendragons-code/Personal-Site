FROM node:bookworm-slim
WORKDIR /app
RUN apk update && apk add git ca-certificates

COPY ["package.json", "./"]
RUN npm install
RUN npm install pm2 -g
COPY . .
CMD ["npm", "run", "start"]
