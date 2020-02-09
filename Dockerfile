FROM buttonswap3ds/build-env:latest

RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - \
 && apt-get install -y nodejs \
 && rm -rf /var/lib/apt/lists/*

RUN git clone -b builder https://github.com/mikahjc/buttonswap3ds.git /usr/src/buttonswap3ds
ENV BUTTONSWAP_SRC_LOCATION /usr/src/buttonswap3ds
ENV PORT 80
EXPOSE 80

COPY server/package*.json /srv/
RUN cd /srv && npm install
COPY server/dist/server /srv

ENTRYPOINT ["node", "/srv/server.js"]
