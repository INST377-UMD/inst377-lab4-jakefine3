// alert me
function alertName() {
    const name = document.getElementById('name').value;
    if (name) {
      alert(`Hi ${name}!`);
    } else {
      alert('Please enter your name.');
    }
  }
  
  // change color
  let isBlue = true;
  
  function changeColor() {
    if (isBlue) {
      document.body.style.backgroundColor = 'green';
    } else {
      document.body.style.backgroundColor = 'lightblue';
    }
    isBlue = !isBlue;
  }
  
  // validating text
  function validateText() {
    const text = document.getElementById('text').value;
    const validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) {
      alert('NOT VALID!!!!!');
    } else {
      alert('Yeah youre good');
    }
  }
  
  // adds text
  function addText() {
    const heading = document.getElementById('page-heading');
    heading.innerHTML += ' add it';
  }
  