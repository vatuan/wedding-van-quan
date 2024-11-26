const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');
document.getElementById('FORM_ITEM13').getElementsByClassName('ladi-form-control').item(0).value = name;
document.getElementById('FORM_ITEM14').getElementsByClassName('ladi-form-control').item(0).value = name;