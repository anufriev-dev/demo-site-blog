FROM node:18.4.0

WORKDIR /app/

COPY ["package*.json","/app/"]

RUN npm install

COPY . .

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]
