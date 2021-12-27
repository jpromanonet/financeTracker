import React, { useState, useContext, useEffect } from 'react';
import { TextField, Typography, Grid, Button, FormControl, InputLabel1, Select, MenuItem } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import { useSpeechContext } from '@speechly/react-client';
import Snackbar from '../../Snackbar/Snackbar';
import formatDate from '../../../utils/formatDate';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories, expenseCategories } from '../../../constants/categories';
import useStyles from './styles';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
};

const NewTransactionForm = () => {
    const classes = useStyles();
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const [formDate, setFormData] = useState(initialState);
    const { segment } = useSpeechContext();
    const [open, setOpen] = React.useState(false);

    const createTransaction = () => {
        if (Number.isNaN(Number(formData.amount)) || !formData.date.includes('-')) return;

        if (incomeCategories.map((iC) => iC.type).includes(formData.category)) {
            setFormData({...formData, type: 'Income' });
        } else if (expenseCategories.map((iC) => iC.type).includes(formData.category)) {
            setFormData({...formData, type: 'Expense'});
        }

        setOpen(true);
        addTransaction({ ...formData, amount: Number(formData.amount), id: uuidv4() });
        setFormData(initialState);
    };

    useEffect
}