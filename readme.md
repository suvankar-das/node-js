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


------ 
- If face problem while connecting mongo , first check in services.msc , whether mongo is running or not.
- OR , run in command prompt via admin mode , `net start MongoDB`


--- 
before applying toObject , response getting 
```
{
    "status": 200,
    "message": "Product created successfully",
    "body": {
        "name": "Puma shoe",
        "price": 100,
        "brand": "Puma",
        "_id": "6700ff2e78ab268323a17fc9",
        "createdAt": "2024-10-05T08:56:14.347Z",
        "updatedAt": "2024-10-05T08:56:14.347Z",
        "__v": 0
    }
}
```

After applying toObject() , 

```
{
    "status": 200,
    "message": "Product created successfully",
    "body": {
        "name": "Adidas Tshirt",
        "price": 100,
        "brand": "Adidas",
        "createdAt": "2024-10-05T13:37:15.838Z",
        "updatedAt": "2024-10-05T13:37:15.838Z",
        "id": "6701410ba5ce22fa1295149b"
    }
}
```
