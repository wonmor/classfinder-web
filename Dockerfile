# FOR FRONT-END DEPLOYMENT... (REACT)
FROM node:16-alpine

WORKDIR /workdir/app

# Copy everything in the current directory to /workdir/app in the image
COPY . .

# Since you've copied everything already, you don't need to individually copy specific files anymore
RUN npm install --force
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
