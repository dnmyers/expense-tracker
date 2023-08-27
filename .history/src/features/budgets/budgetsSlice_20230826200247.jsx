/* eslint-disable react-refresh/only-export-components */
import { createSlice } from 'ZZ@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            return state.map(budget => {
                if (budget.category === action.payload.category) {
                    budget.amount = action.payload.amount;
                }
                return budget;
            })
        }
    }
});

const { editBudget } = budgetsSlice.actions;

export const selectBudgets = (state) => state.budgets;
export default budgetsSlice.reducer;