import { Alert, Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react'

export default function Home() {

  const [isClicked,setIsClicked]=useState(false)
  const [isError,setIsError]=useState(false)

  const [userData, setUserData] = useState({
    name:'',
    message:''
  });
  const [firstRow,setFirstRow]=useState({
    firstName:'sam',
    lastName:'ram',
    roles:'Developer',
    time:'parttime'
  })
  const [secondRow,setSecondRow]=useState({
    firstNameA:'riya',
    lastNameA:'max',
    rolesA:'Admin',
    timeA:'fulltime'
  })
  
useEffect(() => {

}, [isError])


  
  const showPDFfn = async () => {
    setIsClicked(true)
    if(
      firstRow.firstName.length ===0 ||
      firstRow.lastName.length ===0 ||
      firstRow.roles.length ===0 || 
      firstRow.time.length ===0 ||
      secondRow.firstNameA.length ===0 ||
      secondRow.lastNameA.length ===0 ||
      secondRow.rolesA.length ===0 || 
      secondRow.timeA.length ===0 
    ){      
      setIsError(true)
    }else {
      setIsError(false)
      console.log("fine")
      if(isError){
          const response = await fetch("/api/PDFapi",{
            method: "POST",
            body: JSON.stringify({firstName:firstRow.firstName,lastName:firstRow.lastName,roles:firstRow.roles,time:firstRow.time,firstNameA:secondRow.firstNameA,lastNameA:secondRow.lastNameA,rolesA:secondRow.rolesA,timeA:secondRow.timeA}),
            headers: {
            "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setUserData(data)
        }
      }};
  
  function handleinputChange(e){
    setFirstRow({...firstRow,[e.target.name]:e.target.value});
    setSecondRow({...secondRow,[e.target.name]:e.target.value});
  }

  return (
    <>
      <h2>PDF Editor for {userData.name}</h2>
      {/* {alert(userData.message)} */}
      <div className="grid-container">
      <Box sx={{ width: '100%', background:'#F3F2EF', pt:2}}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <div>
              <Button size="large" variant="contained" 
              sx={{ml:4}}
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
                maxWidth: 1000,
                minHeight:750,
                background:'white'
              }}>      
                <div>
                  {
                  isError?
                  (<p style={{color:'red'}}>Please Enter all the fields</p>):""       
                  }
                  {
                    isClicked?  
                      (<div>
                          <Grid div xs={6} md={12} sx={{mb:2}}>
                            <div>
                              <TextField 
                                label="First name"
                                id="firstName"  
                                variant="outlined" 
                                value={firstRow.firstName}
                                sx={{mr:2}}
                                name='firstName'
                                onChange={handleinputChange}
                                />
                              <TextField 
                                label="Last name"
                                id="lastName"  
                                variant="outlined" 
                                name='lastName'
                                value={firstRow.lastName} 
                                sx={{mr:2}}                              
                                onChange={handleinputChange}
                              />
                              <FormControl sx={{  minWidth: 180 }} >
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="roles"
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
                                      id='time'
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
                              label='first Name'
                                id="firstNameA"  
                                variant="outlined" 
                                sx={{mr:2}}
                                name='firstNameA'
                                value={secondRow.firstNameA}
                                onChange={handleinputChange}
                              />
                              <TextField 
                              label='Last Name'
                                id="lastNameA"  
                                variant="outlined" 
                                sx={{mr:2}}
                                name='lastNameA'
                                value={secondRow.lastNameA}
                                onChange={handleinputChange}
                              />
                              <FormControl sx={{  minWidth: 180 }} >
                                  <Select
                                    labelId="demo-simple-select-label"
                                    id="rolesA"
                                    name='rolesA'
                                    // defaultValue='Testing'
                                    value={secondRow.rolesA}
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
                                      name="timeA"
                                      id='timeA'
                                      // defaultValue="part-time"
                                      value={secondRow.timeA}
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
                  {
                    (userData.name.length ===0) ? "":(
                      <Alert variant="filled" severity="success">Please <a style={{color:'black'}} href='https://edit-pdf-sangi19.vercel.app/example1.pdf'><strong>click here</strong></a> for result pdf</Alert>
                    )
                  } 
                </div>
              </Box>
          </Grid>
        </Grid>
      </Box>
      </div>
    </>
  )
}
