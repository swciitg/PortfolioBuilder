FROM node:18-alpine  AS builder
WORKDIR /code
COPY ./frontend .
RUN npm install --legacy-peer-deps && npm run build
RUN ls

FROM node:18-alpine  AS server
COPY --from=builder /code/build /build
WORKDIR /code
COPY ./backend .
RUN mv /build .
RUN npm install
RUN mkdir -p ./backend/logs/
RUN touch ./backend/logs/app.log
CMD ["node", "app.js"]