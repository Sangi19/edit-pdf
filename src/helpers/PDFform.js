import { PDFDocument } from 'pdf-lib'
import * as fs from 'fs';

let firstNameFieldA=''
let lastNameFieldA=''
let rolesFieldA=''
let timeFieldA=''
let firstNameFieldB=''
let lastNameFieldB=''
let rolesFieldB=''
let timeFieldB=''

let formPdfBytes=''
let pdfDoc=''
let form=''

export async function fetchPDFFormFields(){
    // Fetch the PDF with form fields
    formPdfBytes = await fetch('https://edit-pdf.vercel.app/example.pdf').then(res => res.arrayBuffer())
        
    // Load a PDF with form fields    
    pdfDoc = await PDFDocument.load(formPdfBytes)
    
    // Get the form containing all the fields
    form = pdfDoc.getForm()

    //   // Get all fields in the PDF by their names
    firstNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName')
    lastNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName')
    rolesFieldA = form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles')
    timeFieldA = form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time')
    firstNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName')
    lastNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName')
    rolesFieldB = form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles')
    timeFieldB = form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime')
    
}

export async function fillPDFForm(firstName,lastName,roles,time,firstNameA,lastNameA,rolesA,timeA) {
    
    formPdfBytes = await fetch('https://edit-pdf.vercel.app/example.pdf').then(res => res.arrayBuffer())
        
    // Load a PDF with form fields    
    pdfDoc = await PDFDocument.load(formPdfBytes)
    
    // Get the form containing all the fields
    form = pdfDoc.getForm()

    //   // Get all fields in the PDF by their names
    firstNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName')
    lastNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName')
    rolesFieldA = form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles')
    timeFieldA = form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time')
    firstNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName')
    lastNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName')
    rolesFieldB = form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles')
    timeFieldB = form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime')
    //   // Fill in the basic info fields
    firstNameFieldA.setText(firstName)
    lastNameFieldA.setText(lastName)
    rolesFieldA.select(roles)
    timeFieldA.select(time)
    firstNameFieldB.setText(firstNameA)
    lastNameFieldB.setText(lastNameA)
    rolesFieldB.select(rolesA)
    timeFieldB.select(timeA)


    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    //delete file if present
    let i=0;
    //try to add timestamp
    let writeStream = fs.createWriteStream(`public/example${i}.pdf`);

    writeStream.write(pdfBytes, 'base64');
    
    writeStream.on('finish', () => {  
        i=i+1
    });    
    writeStream.end()
}


export async function getPDFdata() {

    let values={}
    
    formPdfBytes = await fetch('https://edit-pdf.vercel.app/example.pdf').then(res => res.arrayBuffer())
        
    // Load a PDF with form fields    
    pdfDoc = await PDFDocument.load(formPdfBytes)
    
    // Get the form containing all the fields
    form = pdfDoc.getForm()

      // Get all fields in the PDF by their names
    firstNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName')
    values.firstname= firstNameFieldA.getText()
    lastNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName')
    values.lastName= lastNameFieldA.getText()
    rolesFieldA = form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles')
    values.roles= rolesFieldA.getSelected()
    timeFieldA = form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time')
    values.time= timeFieldA.getSelected()

    firstNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName')
    values.firstNameA= firstNameFieldB.getText()
    lastNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName')
    values.lastNameA= lastNameFieldB.getText()
    rolesFieldB = form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles')
    values.rolesA= rolesFieldB.getSelected()
    timeFieldB = form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime')
    values.timeA= timeFieldB.getSelected()
        //get the text and return the value.
    return values;
      
}


