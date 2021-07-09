import express from 'express';

const app = express();

app.listen(3000, () => {
    console.log('aplicação rodando na porta 3000');
})