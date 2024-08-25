# Use Node.js official image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the React app
RUN npm run build

# Install serve to serve the built files
RUN npm install -g serve

# Expose the port
EXPOSE 3000

# Start the frontend app
CMD ["serve", "-s", "build"]
