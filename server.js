'use strict';

// set constants
const express = require('express'),
    app = express(),
    _ = require('lodash'),
    winston = require('winston'),
    port = 2020,
    dataPathName = './data/',
    users = require(`${dataPathName}users`).users;