FROM node:14.17-alpine3.14

WORKDIR /app
COPY . .
RUN ["npm", "install"]

ENTRYPOINT ["npm", "start"]