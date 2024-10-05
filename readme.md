1. npm init
2.  npm install express dotenv
3. npm install -D nodemon
4. Then at package.json 
   ` "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js"
    }`
For dev environment , run `npm run dev` and on production , run `npm start`


--------
In Express, there are five main types of middleware:

1. **Application-level middleware**: Defined at the app level using `app.use()`, it applies to all routes or specific ones.
   ```js
   app.use((req, res, next) => { /* logic */ });
   ```

2. **Router-level middleware**: Similar to application-level, but applied specifically to router instances.
   ```js
   const router = express.Router();
   router.use((req, res, next) => { /* logic */ });
   ```

3. **Error-handling middleware**: Specifically handles errors, with four arguments: `err`, `req`, `res`, and `next`.
   ```js
   app.use((err, req, res, next) => { /* handle error */ });
   ```

4. **Built-in middleware**: Provided by Express, such as `express.static()` for serving static files or `express.json()` for parsing JSON bodies.

5. **Third-party middleware**: External middleware modules like `morgan` for logging, `cors` for handling cross-origin requests, etc.
   ```js
   const cors = require('cors');
   app.use(cors());
   ```
