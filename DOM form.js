function validateForm() {
    const form = document.forms['myForm']
    const value = form['fname'].value;
    if(value === ''){
        alert('You must Type the Name');
        return false;
    }
    
}