# FOR FRONT-END DEPLOYMENT... (REACT)
FROM node:16-alpine
WORKDIR /workdir
ENV PATH /workdir/app/node_modules/.bin:$PATH
COPY package.json ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY tsconfig.json ./
COPY next.config.js ./
COPY app ./app
WORKDIR /workdir/app
RUN npm install --force
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]