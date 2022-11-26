import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateTransactionService from '../services/CreateTransactionService';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    /**
     * Retornar listagem com todas as transações cadastradas
     */
    const transactions = transactionsRepository.all();
    const balance = transactionsRepository.getBalance();

    return response.json({ transactions, balance });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    const { title, value, type } = request.body;
    // TODO
    /**
     * a rota deve receber title, value e type
     * type = tipo de transação (income = entrada / outcome = saidas)
     *
     * armazenada como { id: uuid, title: 'titulo', value: 3000, 'type': 'income'}
     */
    const createTransaction = new CreateTransactionService(transactionsRepository);
    const newTransaction = createTransaction.execute({ title, value, type });

    return response.json(newTransaction);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
