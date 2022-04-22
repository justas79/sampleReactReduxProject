import React, {useReducer, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {startTransactions} from "../state/transactionsSlice";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.css';
import {RootState} from "../state/store";
import FileUpload from './FileUpload/FileUpload';

const TransactionListContainer: React.FC = () => {


	const [rangeFrom, setRangeFrom] = useState();
	const [rangeTo, setRangeTo] = useState();

	const range = (range:any) => {
		console.log('clicked');
		console.log('clicked ', range[0]);
		setRangeFrom(range[0].toISOString());
		setRangeTo(range[1].toISOString());
	};

	const transactions = useSelector((state: RootState) => state.paymentFilesTransactions);


	const dispatch = useDispatch();

	const [open, setOpen] = useState(false);

	const [value, onChange] = useState([new Date(), new Date()]);



	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Upload</Tab>

					<Tab>Generate</Tab>
				</TabList>

				<TabPanel>


<FileUpload/>


				</TabPanel>
				<TabPanel>
					<div>
						{/*<DatePicker selected={startDate} onChange={(date) => () => {}} />*/}
						<DateRangePicker onOk={(e => range(e))} />
						<label>Customer</label>

						{/*<div>{range && range[0].getDate }</div>*/}

						<button onClick={ () => dispatch(startTransactions(   {statementId:1, rangeFrom: rangeFrom, rangeto: rangeTo}   ))}>click </button>
					</div>

				</TabPanel>

			</Tabs>




		</>
	)
}
export default TransactionListContainer;
