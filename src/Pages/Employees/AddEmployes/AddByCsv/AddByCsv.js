import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { parse } from 'papaparse';
import React, { useState } from 'react';

const AddByCsv = () => {
    const [employeeInfo, setEmployeeInfo] = useState(null)
    console.log(employeeInfo);
    return (
        <div>
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
                        console.log(e.dataTransfer.files[0].type);
                        Array.from(e.dataTransfer.files)
                            .forEach(async (file) => {
                                const text = await file.text();
                                const info = parse(text, { header: true });
                                const result = info.data;
                                console.log(result)
                                result.map(employee => {
                                    if (employee.first_name && employee.last_name && employee.email) {
                                        setEmployeeInfo(employee);
                                    }
                                })
                            })
                    }}
                >
                    <Typography sx={{ my: 'auto', mx: 'auto' }}>
                        Drop Here CSV File
                    </Typography>
                </div>

            </Box>
        </div>
    );
};

export default AddByCsv;