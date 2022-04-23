const express = require('express');
var cors = require('cors')
const { process_params } = require('express/lib/router');

const app = express();
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000;
const users = [
    { id: 0, name: 'Hboib', email: 'abc@gmail.com', phone: '01789989798' },
    { id: 1, name: 'Hasan', email: 'abc@gmail.com', phone: '01789989798' },
    { id: 2, name: 'Jamal', email: 'cbd@gmail.com', phone: '013389798' },
    { id: 3, name: 'Rasel', email: 'bbc@gmail.com', phone: '08989989798' },
    { id: 4, name: 'Kamal', email: 'abc@gmail.com', phone: '01689989798' },
    { id: 5, name: 'Shahin', email: 'dvc@gmail.com', phone: '017454989798' },
    { id: 6, name: 'Alom', email: 'dds@gmail.com', phone: '017834989798' },
    { id: 7, name: 'Khaled', email: 'aas@gmail.com', phone: '017849989798' },
]


app.get('/', (req, res) => {
    res.send('Hellow world Hello  ')
});
app.get('/users', (req, res) => {

    // const q = req.query;
    // console.log(q)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter((user) => user.name.toLowerCase().includes(search));
        res.send(matched)
    }
    else {
        res.send(users)
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    // const user = users[id];
    res.send(user)

})
app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana'])
})
app.listen(port, () => {
    console.log('Project is running', port)
})