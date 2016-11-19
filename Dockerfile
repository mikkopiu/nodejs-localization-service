FROM alpine:3.4
MAINTAINER Mikko Piuhola <mikko.piuhola@gmail.com>

RUN apk update && apk add nodejs

WORKDIR /app
ADD package.json ./

RUN npm install --production

# Add application files after npm install
# to prevent slow npm installs every time application changes.
ADD . ./

EXPOSE 3000
CMD ["node", "./bin/www"]
