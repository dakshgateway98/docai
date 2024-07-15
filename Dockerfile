# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Vite project
RUN npm run build

# Expose the port the app runs on
EXPOSE 4173

# Serve the built app with a static server
RUN npm install -g serve

# Command to run the built app
CMD ["serve", "-s", "dist"]
