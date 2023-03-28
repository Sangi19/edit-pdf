import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react'

export default function Home() {

  const [isClicked,setIsClicked]=useState(false)
  const [todos, settodos] = useState({});
  const [firstRow,setFirstRow]=useState({
    firstName:'',
    lastName:'',
    roles:'',
    time:''
  })
  const [secondRow,setSecondRow]=useState({
    firstName1:'',
    lastName1:'',
    roles1:'',
    time1:''
  })

  const showPDFfn = async () => {
    setIsClicked(true)
    console.log(firstRow);
      const response = await fetch("/api/hello",{
        method: "POST",
        body: JSON.stringify({firstName:firstRow.firstName,lastName:firstRow.lastName,roles:firstRow.roles,time:firstRow.time,firstName1:secondRow.firstName1,lastName1:secondRow.lastName1,roles1:secondRow.roles1,time1:secondRow.time1}),
        headers: {
        "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      settodos(data)
      };
  

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
                              value={firstRow.firstName}
                              sx={{mr:2}}
                              name='firstName'
                              onChange={handleinputChange}
                            />
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              name='lastName'
                              value={firstRow.lastName} 
                              sx={{mr:2}}                              
                              onChange={handleinputChange}
                            />
                            <FormControl sx={{  minWidth: 180 }} >
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='roles'
                                  value={firstRow.roles}
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
                                    name="time"
                                    // defaultValue="full-time"
                                    value={firstRow.time}
                                    onChange={handleinputChange}
                                    >
                                      <FormControlLabel value="parttime" control={<Radio />} label="part-time" />
                                      <FormControlLabel value="fulltime" control={<Radio />} label="full-time" />
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
                              name='firstName1'
                              value={secondRow.firstName1}
                              onChange={handleinputChange}
                            />
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              sx={{mr:2}}
                              name='lastName1'
                              value={secondRow.lastName1}
                              onChange={handleinputChange}
                            />
                            <FormControl sx={{  minWidth: 180 }} >
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='roles1'
                                  value={secondRow.roles1}
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
                                    name="time1"
                                    // defaultValue="part-time"
                                    value={secondRow.time1}
                                    onChange={handleinputChange}
                                    >
                                    <FormControlLabel value="parttime" control={<Radio />} label="part-time" />
                                    <FormControlLabel value="fulltime" control={<Radio />} label="full-time" />
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
