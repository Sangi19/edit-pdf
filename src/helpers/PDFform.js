import { PDFDocument } from 'pdf-lib'
import * as fs from 'fs';


export async function fillPDFForm(firstName,lastName,roles,time,firstNameA,lastNameA,rolesA,timeA) {
    // Fetch the PDF with form fields

    // to be changed with curent repo url
  const formPdfBytes = await fetch('https://edit-pdf.vercel.app/example.pdf').then(res => res.arrayBuffer())
    // const formPdfBytes = fs.readFileSync('/example.pdf');
        
    // Load a PDF with form fields    
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    
    // Get the form containing all the fields
    const form = pdfDoc.getForm()

//   // Get all fields in the PDF by their names
    const firstNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName')
    const lastNameFieldA = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName')
    const rolesFieldA = form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles')
    const timeFieldA = form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time')
    const firstNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName')
    const lastNameFieldB = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName')
    const rolesFieldB = form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles')
    const timeFieldB = form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime')
    
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

    //try to add timestamp
    let writeStream = fs.createWriteStream('public/example1.pdf');

    writeStream.write(pdfBytes, 'base64');
    
    writeStream.on('finish', () => {  
        console.log('saved');
    });    
    writeStream.end()
}


// fillForm('sam',24,'Developer','parttime','ram',12,'Testing','fulltime')

//API introduction

// form submit Notification
// get form,

