1. npm init
2.  npm install express dotenv
3. npm install -D nodemon
4. Then at package.json 
   ` "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    }`
For dev environment , run `npm run dev` and on production , run `npm start`
