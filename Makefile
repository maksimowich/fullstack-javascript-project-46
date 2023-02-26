run-tests:
	NODE_OPTIONS=--experimental-vm-modules npx jest

install:
	npm ci

lint:
	npx eslint .