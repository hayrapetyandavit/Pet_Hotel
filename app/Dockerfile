FROM node:16
WORKDIR /app
COPY . .

RUN npm install

CMD npm run init_db
CMD npm run init_tables
CMD npm start