FROM node:alpine
COPY ./ /app
WORKDIR /app
ENV NODE_ENV production
RUN npm install
RUN npm run build
CMD ["npm", "start"] 
