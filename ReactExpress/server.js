const express = require("express");

const app = express();

app.get('/api/customers', (res, req) => {
    const customers = [
        {id: 1, firstName: 'Xi', lastName: 'jinping'},
        {id: 2, firstName: 'Tony', lastName: 'Bhai'},
        {id: 3, firstName: 'Happy', lastName: 'Potter'}
    ];

    req.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));