# Final stage

FROM node:16-alpine


# Set node environment to production
ENV NODE_ENV production

# Update the system
RUN apk --no-cache -U upgrade

# Prepare destination directory and ensure user node owns it
RUN mkdir -p /home/node/app

RUN touch /logs/app.log

# Set CWD
WORKDIR /home/node/app

# Install PM2
RUN npm i -g pm2

# Copy package.json, package-lock.json and process.yml
COPY package*.json process.yml ./

# Switch to user node
#USER node

# Install libraries as user node
#RUN npm i --only=production
RUN npm ci

# Copy js files and change ownership to user node
#COPY --chown=node:node . .
COPY  . .
# Open desired port

# Use PM2 to run the application as stated in config file
ENTRYPOINT ["pm2-runtime", "./process.yml"] 