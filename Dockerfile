# Use official Node.js image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy rest of the app files
COPY . .

# Expose port 3000 for the app
EXPOSE 3000

# Command to start the app
CMD ["node", "app.js"]
