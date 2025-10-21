FROM node:20-alpine

RUN addgroup app && adduser -S -G app app
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Switch to non-root only for running
USER app
# Create a directory for data
# RUN mkdir data


ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
