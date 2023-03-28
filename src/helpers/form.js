import { PDFDocument } from 'pdf-lib'
import * as fs from 'fs';


export async function fillForm(firstName,lastName,roles,time,firstName1,lastName1,roles1,time1) {
    // Fetch the PDF with form fields
//   const formUrl = 'https://drive.google.com/drive/u/0/my-drive/example.pdf'

    // to be changed with curent repo url
  const formPdfBytes = await fetch('https://crud-array-add-update-mix.vercel.app/example.pdf').then(res => res.arrayBuffer())
    // const formPdfBytes = fs.readFileSync('/example.pdf');
    
    
    // Load a PDF with form fields    
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    
    // Get the form containing all the fields
    const form = pdfDoc.getForm()


//   // Get all fields in the PDF by their names
    const firstNameField = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5firstName')
    const lastNameField = form.getTextField('61daa6fb-0143-4faa-9243-790262d903f5lastName')
    const rolesField = form.getDropdown('61daa6fb-0143-4faa-9243-790262d903f5roles')
    const timeField = form.getRadioGroup('61daa6fb-0143-4faa-9243-790262d903f5time')

    const firstName1Field = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcfirstName')
    const lastName1Field = form.getTextField('8a06c958-d66d-4e30-a5b5-41ac3abfdbfclastName')
    const roles1Field = form.getDropdown('8a06c958-d66d-4e30-a5b5-41ac3abfdbfcroles')
    const time1Field = form.getRadioGroup('8a06c958-d66d-4e30-a5b5-41ac3abfdbfctime')
    
    console.log('data : ', roles, roles1)
//   // Fill in the basic info fields
    firstNameField.setText(firstName)
    lastNameField.setText(lastName)
    rolesField.select(roles)
    timeField.select(time)

    firstName1Field.setText(firstName1)
    lastName1Field.setText(lastName1)
    roles1Field.select(roles1)
    time1Field.select(time1)


    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    let writeStream = fs.createWriteStream('finaldraft1.pdf');

    writeStream.write(pdfBytes, 'base64');
    
    writeStream.on('finish', () => {  
        console.log('saved');
    });    
    writeStream.end()
}


// fillForm('sam',24,'Developer','parttime','ram',12,'Testing','fulltime')
