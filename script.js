const buttonSorteio = document.querySelector('#button-sorteio');
buttonSorteio.addEventListener('click', () => {
  if((put1.value >=1 && put1.value <=10) && (put2.value >=1 && put2.value <=10) && (put3.value >=1 && put3.value <=10)) {
    resul1.innerHTML = 1 + Math.floor(Math.random() * 9.99);
    resul2.innerHTML = 1 + Math.floor(Math.random() * 9.99);
    resul3.innerHTML = 1 + Math.floor(Math.random() * 9.99);
  }
  if (((put1.value > 0 && put1.value <=10) && put1.value == resul1.innerHTML) && ((put2.value > 0 && put2.value <=10) && put2.value == resul2.innerHTML) && ((put3.value > 0 && put3.value <=10) && put3.value == resul3.innerHTML)) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.loser').style.display = 'none';
    document.querySelector('.moreValues').style.display = 'none';
    document.querySelector('.just1-10').style.display = 'none';
  }else if (((put1.value > 0 && put1.value <=10) && put1.value !== resul1.innerHTML) && ((put2.value > 0 && put2.value <=10) && put2.value !== resul2.innerHTML) && ((put3.value > 0 && put3.value <=10) && put3.value !== resul3.innerHTML)) {
    document.querySelector('.loser').style.display = 'block';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.moreValues').style.display = 'none';
    document.querySelector('.just1-10').style.display = 'none';
  }else if (put1.value == 0 || put2.value == 0 || put3.value == 0) {
    document.querySelector('.loser').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.moreValues').style.display = 'block';
    document.querySelector('.just1-10').style.display = 'none';
  }
  else if(put1.value > 10 || put2.value > 10 || put3.value > 10) {
    document.querySelector('.just1-10').style.display = 'block';
    document.querySelector('.moreValues').style.display = 'none';
    document.querySelector('.winner').style.display = 'none';
    document.querySelector('.loser').style.display = 'none';
  }
});
const resul1 = document.querySelector('#resul1');
const resul2 = document.querySelector('#resul2');
const resul3 = document.querySelector('#resul3');
const put1 = document.querySelector('#put1');
put1.addEventListener('keyup', (event) => {
  if(event.key === 'Enter') {
    put2.focus();
  }
});
const put2 = document.querySelector('#put2');
put2.addEventListener('keyup', (event) => {
  if(event.key === 'Enter') {
    put3.focus();
  }
});
const put3 = document.querySelector('#put3');
put3.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    if((put1.value >=1 && put1.value <=10) && (put2.value >=1 && put2.value <=10) && (put3.value >=1 && put3.value <=10)) {
      resul1.innerHTML = 1 + Math.floor(Math.random() * 9.99);
      resul2.innerHTML = 1 + Math.floor(Math.random() * 9.99);
      resul3.innerHTML = 1 + Math.floor(Math.random() * 9.99);
    }
    if (((put1.value > 0 && put1.value <=10) && put1.value == resul1.innerHTML) && ((put2.value > 0 && put2.value <=10) && put2.value == resul2.innerHTML) && ((put3.value > 0 && put3.value <=10) && put3.value == resul3.innerHTML)) {
      document.querySelector('.winner').style.display = 'block';
      document.querySelector('.loser').style.display = 'none';
      document.querySelector('.moreValues').style.display = 'none';
      document.querySelector('.just1-10').style.display = 'none';
    }else if (((put1.value > 0 && put1.value <=10) && put1.value !== resul1.innerHTML) && ((put2.value > 0 && put2.value <=10) && put2.value !== resul2.innerHTML) && ((put3.value > 0 && put3.value <=10) && put3.value !== resul3.innerHTML)) {
      document.querySelector('.loser').style.display = 'block';
      document.querySelector('.winner').style.display = 'none';
      document.querySelector('.moreValues').style.display = 'none';
      document.querySelector('.just1-10').style.display = 'none';
    }else if (put1.value == 0 || put2.value == 0 || put3.value == 0) {
      document.querySelector('.loser').style.display = 'none';
      document.querySelector('.winner').style.display = 'none';
      document.querySelector('.moreValues').style.display = 'block';
      document.querySelector('.just1-10').style.display = 'none';
    }
    else if(put1.value > 10 || put2.value > 10 || put3.value > 10) {
      document.querySelector('.just1-10').style.display = 'block';
      document.querySelector('.moreValues').style.display = 'none';
      document.querySelector('.winner').style.display = 'none';
      document.querySelector('.loser').style.display = 'none';
    }
  }
});
