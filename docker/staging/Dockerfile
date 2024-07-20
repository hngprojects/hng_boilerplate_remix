# Stage 1: Build
FROM node:20-alpine AS builder

# Install pnpm
RUN npm install -g pnpm

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

# Copy all files
COPY . .

# Build the application
RUN pnpm run build

# Stage 2: Production Image
FROM node:20-alpine AS runner

# Install pnpm
RUN npm install -g pnpm

# Set NODE_ENV to production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy only necessary files from build stage
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/build ./build
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN pnpm install --prod

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["pnpm", "start"]