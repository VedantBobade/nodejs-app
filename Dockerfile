# Use the official Node.js image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies inside the container
RUN npm install

# Copy the application code into the container
COPY . .

# Expose the port the app will run on
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "start"]
