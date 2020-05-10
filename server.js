'use strict';

import async, {forEach} from 'async';
import app from "./app";
import {mongooseInitializer} from './mongodb/mongoose'
import config from './config'
import http from 'http'
import socketIo from 'socket.io';

const initMongoose = (next) => {
    console.log('------- Initializing Mongoose ------- ');
    mongooseInitializer.init(config.database, (err, mongoConn) => {
        next(err, mongoConn);
    });
};

const initServer = (err, mongoConn) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('------- Initializing Server ------- ');
    const server = http.createServer(app);
    const port = process.env.PORT || config.port;
    server.listen(port);
    console.log('server started, listening port: ' + port);
    const io = socketIo(server)
    io.on('connection', (socket) => {
        console.log('socket connect...');
        // for(let i = 0; i< 10; i++){
        //     io.emit('recvmsg', '...nice to meet you'+i);
        // }
        // socket.on('sendmsg', (data)=>{
        //     console.log(data)
        //     io.emit('recvmsg',data+'...nice to meet you')
        // });
        socket.emit('news', 'world.....');
        // socket.on('my other event', (data) => {
        //     console.log(data);
        // });
        // socket.on('disconnect', () => {
        //     io.emit('socket disconnected');
        // });
    });
};


async.waterfall([initMongoose], initServer);