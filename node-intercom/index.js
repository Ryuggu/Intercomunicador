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
    client.conversations.list().then(data => {
        nextConversations(data, response);
    }).catch(error => {
        response.json(error.body);
    });
});

// Fetch all the remaining conversation pages
function nextConversations(data, response) {
    Promise.all(nextPages(data)).then(pages => {
        pages.forEach(page => {
            data.body.conversations.push(...page.body.conversations);
        });
        response.json(data.body.conversations);
    });
}

// Returns a list of promises for fetching each of the remaining pages
function nextPages(data) {
    let pages = data.body.pages;
    let pageObjs = [];
    for (let index = pages.page; index < pages.total_pages; index++) {
        pageObjs.push(client.nextPage({
            type: "pages",
            next: `https://api.intercom.io/conversations?per_page=${pages.per_page}&page=${index + 1}`,
            page: index,
            per_page: pages.per_page,
            total_pages: pages.total_pages
        }));
    }
    return pageObjs;
}

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
