import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
// Armazena todos os metodos para cada processo.
class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    const transactions = this.transactions;
    //const balance = this.getBalance();

    return transactions;
  }

  public getBalance(): Balance {
    // TODO
    const income = this.transactions.reduce((acc, item) => {
      if (item.type === 'income') {
        acc = acc + item.value;
      }
      return acc;
    }, 0)

    const outcome = this.transactions.reduce((acc, item) => {
      if (item.type === 'outcome') {
        acc = acc + item.value;
      }
      return acc;
    }, 0)

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total
    }

    return balance;
  }

  public create({ title, value, type }: Transaction) {
    // TODO
    const newTransaction = new Transaction({
      title,
      value,
      type
    });

    this.transactions.push(newTransaction);

    return newTransaction;
  }
}

export default TransactionsRepository;
