import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { parse } from 'papaparse';
import React, { useState } from 'react';

const AddByCsv = () => {
    const [employeeInfo, setEmployeeInfo] = useState(null);
    const [fileName, setFileName] = useState('');
    const addData = (employeeData) => {

        axios.post('http://localhost:3006/employee/addEmployeeCsv', employeeData)
            .then(res => {
                console.log(res)
                if (res.request.status === 200) {
                    alert(`File Data has aded as an Employee`)
                }
                else {
                    alert('Somethin went wrong')
                }
            });
    };

    return (
        <div>
            <form action="">
                <Box sx={{
                    width: '70%',
                    height: '70vh',
                    borderRadius: '5px',
                    border: '1px solid tomato',
                    backgroundColor: '#ffaa9b62',
                    mx: 'auto'
                }}>
                    <div style={{ width: '100%', height: '100%' }}
                        onDragOver={(e) => {
                            e.preventDefault();
                        }}
                        onDrop={(e) => {
                            e.preventDefault();
                            setFileName(e.dataTransfer.files[0].name);
                            Array.from(e.dataTransfer.files)
                                .forEach(async (file) => {
                                    const text = await file.text();
                                    const info = parse(text, { header: true });
                                    const result = info.data;
                                    setEmployeeInfo(result);
                                })
                        }}
                    >
                        <Box sx={{ my: 'auto', mx: 'auto' }}>
                            {employeeInfo ? <Typography>{fileName} has been Dropped</Typography> : <Typography>Drop Here CSV File</Typography>}
                        </Box>
                        <input
                            type='file'
                            accept='.csv'
                            id='csvFile'
                            onChange={(e) => {
                                Array.from(e.target.files)
                                    .forEach(async (file) => {
                                        const text = await file.text();
                                        const info = parse(text, { header: true });
                                        const result = info.data;
                                        setEmployeeInfo(result);
                                    })
                            }}
                        >
                        </input>
                        <br />
                        <Button variant='outlined' onClick={() => addData(employeeInfo)}>Add</Button>
                    </div>

                </Box>
            </form>
        </div>
    );
};

export default AddByCsv;