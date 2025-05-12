# 1.  build the docker image: docker build -t myapp .
# 2. then see the images: docker images 
#  or: docker image ls
# 3. run the image: docker run myapp

FROM node:alpine 
COPY . /app
WORKDIR /app
CMD node app.js