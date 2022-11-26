import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }
  // armazena toda regra de negocio referente a cada processo.
  public execute({ title, value, type }: Transaction) {
    // TODO
    if (type !== 'income' && type !== 'outcome') {
      throw new Error('invalid type!');
    }

    const balance = this.transactionsRepository.getBalance();

    if (type === 'outcome') {
      if (balance.total < value) {
        throw new Error('not enough balance!');
      }
    }

    /*
    const transaction = new Transaction({
      title,
      value,
      type,
    });
    */

    const newTransaction = this.transactionsRepository.create({ title, value, type });

    return newTransaction;
  }
}

export default CreateTransactionService;
