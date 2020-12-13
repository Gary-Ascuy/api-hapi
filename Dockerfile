FROM node:12
LABEL MAINTAINER="Gary Ascuy <gary.ascuy@gmail.com>"

ENV NODE_ENV=production
WORKDIR /usr/app
EXPOSE 3666

ADD . .
RUN yarn install

CMD yarn start:production
