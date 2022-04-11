import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {startTransactions} from "../state/transactionsSlice";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const TransactionListContainer: React.FC = () => {

	const [startDate, setStartDate] = useState(new Date());

	const handleSelect = (a:Date) => {
		console.log('date is:', a); // Momentjs object
	}

	const dispatch = useDispatch();
	const [dates, setDates] = useState({
		checkin:  new  Date('2022-03-28'),
		checkout:  new  Date('2022-04-28')
	})
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
					<h2>


	upload here


					</h2>
				</TabPanel>
				<TabPanel>
					<div>
						<DatePicker selected={startDate} onChange={(date) => () => {}} />
						<label>Customer</label>
						<DropDown>
						<button onClick={ () => dispatch(startTransactions(   {statementId:1}   ))}>click </button>
					</div>

				</TabPanel>

			</Tabs>




		</>
	)
}
export default TransactionListContainer;
