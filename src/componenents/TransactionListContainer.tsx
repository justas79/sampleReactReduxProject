import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {startTransactions} from "../state/transactionsSlice";

const TransactionListContainer: React.FC = () => {

	const dispatch = useDispatch();
	return (
		<>
			<div>this is my table list</div>
			<button onClick={ () => dispatch(startTransactions(   {statementId:1}   ))}>click </button>
		</>
	)
}
export default TransactionListContainer;
