import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react'

export default function Home() {

  const [isClicked,setIsClicked]=useState(false)
  

  const [firstRow,setFirstRow]=useState({
    input1:'',
    input2:'',
    position:'',
    workType:''
  })
  const [secondRow,setSecondRow]=useState({
    input3:'',
    input4:'',
    position2:'',
    workType2:''
  })

  function showPDFfn(){
    setIsClicked(true)
    console.log(firstRow);

  }

  function handleinputChange(e){
    setFirstRow({...firstRow,[e.target.name]:e.target.value});
    setSecondRow({...secondRow,[e.target.name]:e.target.value});

  }

  return (
    <>
      <h2>PDF Editor</h2>
      <div className="grid-container">
      <Box sx={{ width: '100%', background:'#F3F2EF'}}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <div>
              <Button size="large" variant="contained" 
              sx={{ml:2}}
              onClick={showPDFfn}
              > 
                {
                  isClicked? "Save PDF" : " Edit PDF"
                }
              </Button>
            </div>
          </Grid>

          <Grid item xs={10}>
              <Box
              sx={{
                boxShadow: 1,
                borderRadius: 2,
                p: 4,
                mb:4,
                mr:4,
                minWidth: 1300,
                minHeight:750,
                background:'white'
              }}>                
                {
                  isClicked?  
                    (<div>
                        <Grid div xs={6} md={12} sx={{mb:2}}>
                          <div>
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              value={firstRow.input1}
                              sx={{mr:2}}
                              name='input1'
                              onChange={handleinputChange}
                            />
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              name='input2'
                              value={firstRow.input2} 
                              sx={{mr:2}}                              
                              onChange={handleinputChange}
                            />
                            <FormControl sx={{  minWidth: 180 }} >
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='position'
                                  value={firstRow.position}
                                  onChange={handleinputChange}
                                >
                                  <MenuItem value='Developer'>Developer</MenuItem>
                                  <MenuItem value='Testing'>Testing</MenuItem>
                                  <MenuItem value='Admin'>Admin</MenuItem>
                                  <MenuItem value='Marketing'>Marketing</MenuItem>
                                </Select>
                              </FormControl>

                              <FormControl sx={{
                                mt:1,
                                ml:2
                              }}>
                                  <RadioGroup
                                    row 
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="workType"
                                    defaultValue="full-time"
                                    value={firstRow.workType}
                                    onChange={handleinputChange}
                                    >
                                      <FormControlLabel value="part-time" control={<Radio />} label="part-time" />
                                      <FormControlLabel value="full-time" control={<Radio />} label="full-time" />
                                  </RadioGroup>
                                </FormControl>
                          </div>
                        </Grid>
                        <Grid div xs={6} md={12}>
                        <div>
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              sx={{mr:2}}
                              name='input3'
                              value={secondRow.input3}
                              onChange={handleinputChange}
                            />
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              sx={{mr:2}}
                              name='input4'
                              value={secondRow.input4}
                              onChange={handleinputChange}
                            />
                            <FormControl sx={{  minWidth: 180 }} >
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='position2'
                                  value={secondRow.position2}
                                  onChange={handleinputChange}
                                >
                                  <MenuItem value='Developer'>Developer</MenuItem>
                                  <MenuItem value='Testing'>Testing</MenuItem>
                                  <MenuItem value='Admin'>Admin</MenuItem>
                                  <MenuItem value='Marketing'>Marketing</MenuItem>
                                </Select>
                              </FormControl>

                              <FormControl sx={{
                                mt:1,
                                ml:2
                              }}>
                                  <RadioGroup
                                    row 
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="workType2"
                                    defaultValue="part-time"
                                    value={secondRow.workType2}
                                    onChange={handleinputChange}
                                    >
                                    <FormControlLabel value="part-time" control={<Radio />} label="part-time" />
                                    <FormControlLabel value="full-time" control={<Radio />} label="full-time" />
                                  </RadioGroup>
                                </FormControl>
                          </div>
                        </Grid>
                    </div>):"click the edit button"
                }
              </Box>
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  )
}
