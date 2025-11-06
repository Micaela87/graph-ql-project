"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const middlewares_1 = require("./src/middlewares/middlewares");
const express = require('express');
const dotenv = require("dotenv");
const cors = require('cors');
const path = require('path');
const logger = require('morgan');
const itemRouter = require("./src/routes/Item/ItemRoutes");
const userRouter = require("./src/routes/User/UserRoutes");
const app = express();
// Global Express middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/graphql/items', itemRouter);
app.use('/graphql/users', userRouter);
app.use(middlewares_1.errorHandler);
// Start the server at port
const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, () => console.log(`Running a GraphQL API server at http://localhost:${PORT}/graphql`));
