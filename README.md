# TS-katas

Exercises taken from: ["Typescript: The Complete Developer's Guide [2020]"](https://www.udemy.com/course/understanding-typescript/)

## server
Use Typescript with Express to create typed annotations that can be used as routes with middlewares

## Sort
Use Typescript to create a generic sorter interface to be able to plug-in different sortable types and sort them

## Stats
Read a CSV file and analyze it to figure out how many times a specific team won regardless if it played at home or outside. Generate the output to different views using a generic interface (print to console, HTML etc)

## Template
A template project with concurrently & nodemon (see package.json) which also provides basic build/run scripts

## Web
A simple web-ui framework to load/modify & save user's data

```bash
npm init -y # init a new project (generate package.json)
tsc --init # generate tsconfig.json (assuming TS is installed, generate tsconfig.json file
# axios is an http-client
# nodemon - automatically restarting the node application when file changes
# concurrently - run multiple commands in one line (syntactic sugar to `cmd1 && cmd2`)
npm install typescript axios parcel-bundler json-server nodemon concurrently
npm install @types/node # to get definition files of existing JS libraries which were not written in TS
npm start

# to continually test
json-server -w db.json # to serve a hard-coded json - great for testing during development
parcel index.html # hot module replacement - great for testing during development
```
