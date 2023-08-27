/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];

const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }));
const options = {
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            state.budgets[action.payload.category].amount += Number(action.payload.amount);

            // console.log("🚀 ~ file: budgetsSlice.jsx:19 ~ state:", state)
            // return state.map(budget => {
            //     if (budget.category === action.payload.category) {
            //         budget.amount = action.payload.amount;
            //     }

            //     return budget;
            // });
        }
    }
};

const budgetsSlice = createSlice(options);

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;