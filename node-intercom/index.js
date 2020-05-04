const express = require("express");
const Intercom = require('intercom-client');
const cors = require('cors');

const port = 3000;
const app = express();
const accessToken = "dG9rOjJkZjI4NzI0XzE0ZWZfNDY1Ml9iMDQ3X2FjNDliOWYzZWU0NDoxOjA=";
const client = new Intercom.Client({ token: accessToken });

app.use(cors());

app.listen(port, () => console.log(`Server running on port ${port}`));

app.get("/", (_request, response) => {
    response.send("Rastreador de Estadísticas para Entradas de Intercomunicador")
});

// List all admins
app.get("/admins", (_request, response) => {
    client.admins.list().then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});

// Find admin by ID
app.get("/admins/:id", (request, response) => {
    client.admins.find(request.params.id).then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});

// List all conversations
app.get("/conversations", (_request, response) => {
    client.conversations.list({
        "per_page": 60 // Max of 60 conversations can be fetched per request
    }).then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});

// Find conversation by ID
app.get("/conversations/:id", (request, response) => {
    client.conversations.find({ id: request.params.id }).then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});

// List all contacts
app.get("/contacts", (_request, response) => {
    client.contacts.list().then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});

// Find contact by ID
app.get("/contacts/:id", (request, response) => {
    client.contacts.find({ id: request.params.id }).then(data => {
        response.json(data.body);
    }).catch(error => {
        response.json(error.body);
    });
});
