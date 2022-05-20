FROM cypress/included:4.1.0

WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD [ "npm","start" ]