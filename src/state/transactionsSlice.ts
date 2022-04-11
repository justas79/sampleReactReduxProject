import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const initialState: any = {
	loading: false,
	transactions: []
};

export const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		startTransactions: (state: any, action: PayloadAction<any>) => {
			console.log('calling from reducer startTransaction');

			state.loading = true;
		},
		setTransactions: (state: any, action: PayloadAction<any> ) => {
			state.transactions = action.payload.transactions;
			state.loading = false;
		}
	}
});

export const { startTransactions, setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;

