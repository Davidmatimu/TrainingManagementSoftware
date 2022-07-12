
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {PDFDocument} = require('pdf-lib')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const {readFile, writeFile} = require('fs/promises')

async function createPdf(input, output){
    try{
    const pdfDoc = await PDFDocument.load(await readFile(input));

    const fieldNames = pdfDoc.getForm().getFields().map(f => f.getName());
    console.log({fieldNames});

    const form = pdfDoc.getForm();
    
    form.getTextField('1c Email Address').setText('Dmatimu@udel.edu');
    form.getTextField('4 Home Address Optional Number Street City State ZIP Code').setText('106 and Park');
    form.getTextField('1 Applicants Name Last First Middle Initial').setText('David Matimu')
    const pdfBytes = await pdfDoc.save();

    await writeFile(output,pdfBytes);
    console.log('YOUR PDF HAS BEEN MADE!');
    }catch(err){
        console.log(err)
    }
}

createPdf('\src\\SF182.pdf','\src\\output.pdf')