# syntax=docker/dockerfile:1

FROM node:14.16.0

ENV NODE_ENV=production

COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production

COPY build ./
COPY docker-entrypoint.sh /usr/local/bin/xfs
CMD ["bash"]