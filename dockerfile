FROM node:24.14.0

WORKDIR /clientesb
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "index.js"]