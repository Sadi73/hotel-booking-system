'use client'

import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './styles.css'

const BasicDatePicker = ({ label, selectedDate, setSelectedDate }) => {

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={label ? label : "Basic date picker"}
                    value={selectedDate} // Bind the current state to the picker
                    onChange={(newDate) => setSelectedDate(newDate)} // Handle changes
                />
            </DemoContainer>
        </LocalizationProvider>
    );
};

export default BasicDatePicker;
