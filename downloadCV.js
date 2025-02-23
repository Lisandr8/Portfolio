const downloadCV = () => {
    const link = document.createElement('a');

    link.href = './Lisandro Andujar CV.pdf'; 
    link.setAttribute('download', 'Lisandro Andujar CV.pdf');

    document.body.appendChild(link);
    link.click();
    
    document.body.removeChild(link);
};
