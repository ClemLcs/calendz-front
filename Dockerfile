# # Step 1: Build Vue Project with latest Node LTS 12.18.2 with alpine
# (a lightweight distribution)
FROM node:12.18.2-alpine as build-stage
LABEL maintainer="Calendz. <https://calendz.locascio.fr/>"

# creates a directory for the app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install the app
COPY package*.json ./
RUN npm install

# bundle all source code
COPY . .

# build for production
RUN npm run build

# Step 2: Create Nginx Server
FROM harbor.locascio.fr:4443/library/nginx:stable-alpine as production-stage
COPY docker/nginx.conf /etc/nginx/nginx.conf

COPY --from=build-stage /usr/src/app /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
