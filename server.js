'use strict';

// set constants
const express = require('express'),
    app = express(),
    _ = require('lodash'),
    winston = require('winston'),
    port = 2020,
    dataPathName = './data/',
    users = require(`${dataPathName}users`).users;


/**
* Method getting the results for home route
* @param   {Object}    req     The request
* @param   {Object}    res     The response
*/
app.get('/home', (req, res) => {
    res.json(users);
});

/**
 * Method getting the results for users route
 * @param   {Object}    req     The request
 * @param   {Object}    res     The response
 */
app.get('/users', (req, res) => {
    res.json(users);
});

/**
 * Function logging the port the app is listening to
 */
app.listen(port, () => {
    winston.log('info', `listening to port ${port}`);
});