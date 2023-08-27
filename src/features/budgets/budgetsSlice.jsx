/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }));
const options = {
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            // Update budget amount to action.payload.amount
            const { category, amount } = action.payload;
            const budget = state.find(budget => budget.category === category);
            budget.amount = amount;
        }
    }
};

const budgetsSlice = createSlice(options);

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;