FROM node:20.5.1-alpine3.17 as builder

ARG REACT_APP_API_BASE_URL
ARG REACT_APP_BASE_SHORT_URL
ARG REACT_APP_RECAPTCHA_PUBLIC_KEY

# Set the working directory to /app inside the container
WORKDIR /app
# Copy app files
COPY public public/
COPY src src/
COPY package.json .
COPY package-lock.json .
COPY postcss.config.js .
COPY tailwind.config.js .
# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm ci
# Build the app
RUN REACT_APP_API_BASE_URL=${REACT_APP_API_BASE_URL} \
  REACT_APP_BASE_SHORT_URL=${REACT_APP_BASE_SHORT_URL} \
  REACT_APP_RECAPTCHA_PUBLIC_KEY=${REACT_APP_RECAPTCHA_PUBLIC_KEY} \
  npm run build

# Bundle static assets with nginx
FROM nginx:1.25.1-alpine as production
ENV NODE_ENV production

# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
