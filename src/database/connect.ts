import { createConnection } from 'typeorm';

createConnection().then(() => console.log('Conectou com o banco'));
