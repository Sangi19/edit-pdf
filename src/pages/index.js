import { Box, Button, FormControl, FormControlLabel, Grid, MenuItem, Radio, RadioGroup, Select } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react'

export default function Home() {

  const [isClicked,setIsClicked]=useState(false)
  const [userData, setUserData] = useState({});
  // const [existingUserData, setExistingUserData] = useState({});
  
  const [firstRow,setFirstRow]=useState({
    firstname:'',
    lastName:'',
    roles:'',
    time:'',
    firstNameA:'',
    lastNameA:'',
    rolesA:'',
    timeA:''
  })


  function clearData(){
      let tempval={
        firstname:'',
        lastName:'',
        roles:'',
        time:'',
        firstNameA:'',
        lastNameA:'',
        rolesA:'',
        timeA:''
      }
      setFirstRow(tempval)
    }
   
  const showPDFfn = async () => {
    setIsClicked(true) 
     

    if(!isClicked){
        const response1=await fetch("/api/PDFapi",{
          method:'GET',
          body:JSON.stringify(),
          headers:{
            "content-Type":"application/json",
          },        
        })
        const data1 = await response1.json();
        setFirstRow(data1.values)
       
        alert("Success. Data is read from Example.pdf")
    }else{
        const response = await fetch("/api/PDFapi",{
          method: "POST",
          body: JSON.stringify({firstName:firstRow.firstname,lastName:firstRow.lastName,roles:firstRow.roles,time:firstRow.time,firstNameA:firstRow.firstNameA,lastNameA:firstRow.lastNameA,rolesA:firstRow.rolesA,timeA:firstRow.timeA}),
          headers: {
            "Content-Type": "application/json",
            },
          });
          const data = await response.json();
          setUserData(data)    
          
          alert('the data is created under "./public/example1.pdf" ')
          clearData()
        }
    };  

    

  function handleinputChange(e){
    setFirstRow({...firstRow,[e.target.name]:e.target.value});
  }

  return (
    <>
      <h2>PDF Editor for {userData.name}</h2>
      <div className="grid-container">
      <Box sx={{ width: '100%', background:'#F3F2EF', pt:2}}>
        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={2}>
            <div>


              <Button size="large" variant="contained" 
              sx={{ml:4}}
              onClick={showPDFfn}
              value='Edit PDF'
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
                {
                  isClicked?  
                    (<div>
                        <Grid div xs={6} md={12} sx={{mb:2}}>
                          <div>
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              name='firstname'
                              value={firstRow.firstname}
                              sx={{mr:2}}
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
                              name='firstNameA'
                              value={firstRow.firstNameA}
                              onChange={handleinputChange}
                            />
                            <TextField 
                              id="outlined-basic"  
                              variant="outlined" 
                              sx={{mr:2}}
                              name='lastNameA'
                              value={firstRow.lastNameA}
                              onChange={handleinputChange}
                            />
                            <FormControl sx={{  minWidth: 180 }} >
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  name='rolesA'
                                  value={firstRow.rolesA}
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
                                    // defaultValue="part-time"
                                    value={firstRow.timeA}
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