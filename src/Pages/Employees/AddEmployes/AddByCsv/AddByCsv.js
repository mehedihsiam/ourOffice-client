import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import { parse } from 'papaparse';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import './AddByCsv.css'

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
                <Box className="dragArea">
                    <div
                        className="drag-inside"
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
                        <Box>
                            <Box sx={{ my: 2 }}>
                                {employeeInfo ? <Typography>{fileName} has been Dropped</Typography> : <Typography>Drop Here CSV File</Typography>}
                            </Box>
                            <label className='fileInput'>
                                <input
                                    type='file'
                                    accept='.csv'
                                    onChange={(e) => {
                                        Array.from(e.target.files)
                                            .forEach(async (file) => {
                                                const text = await file.text();
                                                setFileName(file.name)
                                                const info = parse(text, { header: true });
                                                const result = info.data;
                                                setEmployeeInfo(result);
                                            })
                                    }}
                                />
                                <span className='uploadBtn'>
                                    <FontAwesomeIcon icon={faCloudUploadAlt} />
                                </span>
                                <Typography>Upload a CSV file</Typography>
                            </label>
                            <br />
                            <Button
                                sx={{ mt: 4 }}
                                className='fieledBtn'
                                onClick={() => addData(employeeInfo)}>Add
                            </Button>
                        </Box>
                    </div>

                </Box>
            </form>
        </div>
    );
};

export default AddByCsv;