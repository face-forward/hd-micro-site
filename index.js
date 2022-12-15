const express = require('express')
const next = require('next')
const morgan = require('morgan');
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        // Morgan
        server.use(morgan('tiny'))
        server.use(express.json())
        server.use(express.urlencoded({ extended: true }))
        server.use(require('./routes/index.routes'))
// First route
        server.get('*', (req, res) => {
            return handle(req, res)
        });
        /*server.get('*', (req, res) => {
            return handle(req, res)
        });*/

        /*server.get('*', (req, res) => {
            return handle(req, res)
        });*/
        // First route
        /*server.get('/home', (req, res) => {
            res.json({ message: 'Hello world' })
        });*/

        server.listen(3000, (err) => {
            if (err) throw err
            console.log('> Ready on http://localhost:3000')
        });

        /*server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            server.render(req, res, actualPage, queryParams)
        });*/


    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })
