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

/**
 * Function getting the results for a post get request or a comment post request.
 * @param   {Objet[]}   records         All available records
 * @param   {String}    paramName       The name of the param to filter on
 * @param   {Number}    [paramId]       The id of the param to filter the records by
 * @return  {Object[]}  the filtered records or all of them if no id is passed   
 */
function getPostsOrComments(records = [], paramName, paramId) {
    let recordsToReturn = [];
    //if no id is passed, return all records
    if (_.isEmpty(paramId)) {
        return records;
    }
    //ensure param id is a number
    paramId = parseInt(paramId, 10);

    recordsToReturn = _.filter(records, (record) => {
        return record[paramName] === paramId;
    });
    return recordsToReturn;
}


/**
 * Function returning the data for the posts of a user
 * @param   {Object}    req     The request
 * @param   {Object}    res     The response
 */
app.get('/posts/:user_id', (req, res) => {
    const posts = require(`${dataPathName}posts`).posts || [];
    let userPosts = [],
        user = req.params.user_id;
    winston.log('info', `returning posts for user id: ${user}...`);
    userPosts = getPostsOrComments(posts, 'user_id', user);
    res.json(userPosts);
});

/**
 * Function returning the data for the comments of a post
 * @param   {Object}    req     The request
 * @param   {Object}    res     The response
 */
app.get('/comments/:post_id', (req, res) => {
    const comments = require(`${dataPathName}comments`).comments || [];
    let post = req.params.post_id,
        postComments = [];
    winston.log('info', `returning comments for post id: ${post}...`)
    postComments = getPostsOrComments(comments, 'post', post);
    res.json(postComments);
});