all: install

compile:
	npm build --prefix client
	npm build --prefix server

serv-up:
	npm test --prefix server

client-up:
	npm start --prefix client

install: client server

client:
	cd client && npm install

server:
	cd server && npm install

clean:
	rm -rf client/node_modules
	rm -rf client/build
	rm -rf server/node_modules

.PHONY: all install client server clean