import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  timestamp: Date;
  recipient?: string;
}

export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: Date;
  paid: boolean;
}

interface FinanceState {
  balance: number;
  transactions: Transaction[];
  bills: Bill[];
  sendMoney: (amount: number, recipient: string) => { success: boolean; message: string };
  payBill: (billId: string) => { success: boolean; message: string };
  addTransaction: (transaction: Omit<Transaction, 'id' | 'timestamp'>) => void;
}

export const useFinanceStore = create<FinanceState>()(
  persist(
    (set, get) => ({
      balance: 25000,
      transactions: [
        {
          id: '1',
          type: 'credit',
          amount: 15000,
          description: 'Salary - June 2024',
          timestamp: new Date('2024-06-01'),
        },
        {
          id: '2',
          type: 'debit',
          amount: 2000,
          description: 'UPI Transfer to Kirana Store',
          timestamp: new Date('2024-06-03'),
          recipient: 'Kiran Store',
        },
      ],
      bills: [
        {
          id: 'b1',
          name: 'Electricity Bill',
          amount: 1200,
          dueDate: new Date('2024-06-30'),
          paid: false,
        },
        {
          id: 'b2',
          name: 'Mobile Recharge',
          amount: 499,
          dueDate: new Date('2024-07-15'),
          paid: false,
        },
      ],

      sendMoney: (amount, recipient) => {
        const state = get();
        if (amount > state.balance) {
          return { success: false, message: 'Insufficient balance' };
        }
        if (amount <= 0) {
          return { success: false, message: 'Invalid amount' };
        }

        set({
          balance: state.balance - amount,
          transactions: [
            {
              id: Date.now().toString(),
              type: 'debit',
              amount,
              description: `UPI Transfer to ${recipient}`,
              timestamp: new Date(),
              recipient,
            },
            ...state.transactions,
          ],
        });
        return { success: true, message: `₹${amount} sent to ${recipient}` };
      },

      payBill: (billId) => {
        const state = get();
        const billIndex = state.bills.findIndex((b) => b.id === billId);
        if (billIndex === -1) {
          return { success: false, message: 'Bill not found' };
        }

        const bill = state.bills[billIndex];
        if (bill.paid) {
          return { success: false, message: 'Bill already paid' };
        }
        if (bill.amount > state.balance) {
          return { success: false, message: 'Insufficient balance' };
        }

        const newBills = [...state.bills];
        newBills[billIndex] = { ...bill, paid: true };

        set({
          balance: state.balance - bill.amount,
          bills: newBills,
          transactions: [
            {
              id: Date.now().toString(),
              type: 'debit',
              amount: bill.amount,
              description: `Bill Payment - ${bill.name}`,
              timestamp: new Date(),
            },
            ...state.transactions,
          ],
        });
        return { success: true, message: `${bill.name} paid successfully` };
      },

      addTransaction: (transaction) => {
        set({
          transactions: [
            {
              ...transaction,
              id: Date.now().toString(),
              timestamp: new Date(),
            },
            ...get().transactions,
          ],
        });
      },
    }),
    {
      name: 'nayan-finance',
    }
  )
);
