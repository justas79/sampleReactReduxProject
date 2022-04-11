import { ActionType } from 'typesafe-actions';
import {startTransactions} from "./transactionsSlice";
import {TransactionsResponse } from "./TransactionsResponse";
import { call, ForkEffect, put, select, takeLeading } from 'redux-saga/effects';
import {getHttpTransactions} from "./transactionsApi";

export function* loadTransactionsSaga(action: ActionType<typeof startTransactions>): Generator<unknown, void, { data: TransactionsResponse }> {
	try {
		yield startTransactions(action.payload.loading);
		const { data } = yield call(getHttpTransactions, action.payload.statementId);
	} catch (e: any) {

	}
}

export default function* transactionsSaga(): Generator<ForkEffect<any>> {
	yield takeLeading(startTransactions, loadTransactionsSaga);
}
