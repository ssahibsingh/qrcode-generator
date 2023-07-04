FROM node:18

WORKDIR /project/qrcode-generator

COPY package*.json ./
# RUN npm install
RUN npm install --frozen-lockfile --production

COPY . .
EXPOSE 8001
CMD ["npm", "start"]