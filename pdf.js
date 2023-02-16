function generatePDF(){
    const element = document.getElementsByClassName("container");

    html2pdf()
    .from(element)
    .save();
}

// function generatePDF(){
//     var element = document.getElementById('pdf');

//             html2pdf(element, {

//                 margin: 1,

//                 filename: 'download.pdf',

//                 image: { type: 'jpeg' },

//                 html2canvas: { scale: 2, useCORS: true, logging: true, dpi: 300, letterRendering: 1 },

//                 jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }

//             });
// }


