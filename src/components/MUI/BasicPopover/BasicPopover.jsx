import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Box } from '@mui/material';

const BasicPopover = ({ label, subLabel, values, setFieldValue }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Box
                aria-describedby={id}
                onClick={handleClick}
                sx={{ border: '1px solid #4A5745', padding: '14px', marginTop: '8px', display: 'flex', justifyContent: 'space-between', borderRadius: '5px', color: 'black', cursor: 'pointer' }}>
                {label}
                <span>{subLabel}</span>
            </Box>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                {label === 'Guests' ?
                    <div className='w-72 px-7 py-3'>
                        <div className='flex justify-between'>
                            <label htmlFor="">Adults</label>
                            <div className='flex gap-5'>
                                <button onClick={() => {
                                    const dummyGuests = { ...values?.guests };
                                    dummyGuests.adult = dummyGuests.adult - 1;
                                    setFieldValue('guests', dummyGuests)
                                }}>-</button>

                                <span>{values?.guests?.adult}</span>

                                <button onClick={() => {
                                    const dummyGuests = { ...values?.guests };
                                    dummyGuests.adult = dummyGuests.adult + 1;
                                    setFieldValue('guests', dummyGuests)
                                }}>+</button>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <label htmlFor="">Children</label>
                            <div className='flex gap-5'>
                                <button onClick={() => {
                                    const dummyGuests = { ...values?.guests };
                                    dummyGuests.child = dummyGuests.child - 1;
                                    setFieldValue('guests', dummyGuests)
                                }}>-</button>
                                <span>{values?.guests?.child}</span>
                                <button onClick={() => {
                                    const dummyGuests = { ...values?.guests };
                                    dummyGuests.child = dummyGuests.child + 1;
                                    setFieldValue('guests', dummyGuests)
                                }}>+</button>
                            </div>
                        </div>
                    </div> :
                    <div className='w-72 px-7 py-3'>
                        <div className='flex justify-between'>
                            <label htmlFor="">Rooms</label>
                            <div className='flex gap-5'>
                                <button onClick={() => {
                                    setFieldValue('noOfRooms', values?.noOfRooms - 1)
                                }}>-</button>
                                <span>{values?.noOfRooms}</span>
                                <button onClick={() => {
                                    setFieldValue('noOfRooms', values?.noOfRooms + 1)
                                }}>+</button>
                            </div>
                        </div>
                    </div>}
            </Popover>
        </div>
    );
};

export default BasicPopover;
