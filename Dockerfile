FROM node:18

WORKDIR /project/qrcode-generator

COPY package*.json ./
# RUN npm install
RUN npm install

COPY . .
EXPOSE 5000
CMD ["npm", "start"]