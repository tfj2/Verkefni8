/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet1) {
  let newStr = '';
  let i;
  alphabet1 = alphabet1.toLowerCase()
  for (i = 0; i < str.length; i++) {
    if (alphabet1.indexOf(str.charAt(i)) + n > alphabet1.length - 1) {
      newStr += alphabet1.charAt(n - alphabet1.length + alphabet1.indexOf(str.charAt(i)));
    } else {
      newStr += alphabet1.charAt(alphabet1.indexOf(str.charAt(i)) + n);
    }
  }
  newStr.toUpperCase();
  return newStr;
}


/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */
function decode(str, n, alphabet1) {
  let m = alphabet1.length - n;
  return encode(str, m);
}

const Caesar = (() => {
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let theAlphabet = 'AÁBDÐEÉFGHIÍJKLMNOÓPRSTUÚVXYÝÞÆÖ';
  alphabet.addEventListener('input', () => {
    theAlphabet = alphabet.value;
    console.log(theAlphabet)
    if(type === 'encode')
    console.log(encode(Gildi, shift, theAlphabet))
   else
    console.log(decode(Gildi, shift, theAlphabet))
  });

  // Default type, uppfært af radio input
  let type = 'encode';
  const radios = document.querySelectorAll('input[type=radio]');
  function radioChanged(e) {
    type = `${e.target.value}`;
    console.log(type)
  }

  for (let i = 0; i < radios.length; i++){
    radios[i].addEventListener('change', radioChanged);
  }

  // Default hliðrun, uppfært af "shift"
  let shift = 3;
  const shifts = document.querySelectorAll('input[type=range]');
  function shiftChanged(e) {
    shift = `${e.target.value}`;
    console.log(shift)
    if(type === 'encode')
    console.log(encode(Gildi, shift, theAlphabet))
   else
    console.log(decode(Gildi, shift, theAlphabet))
  }

  for (let i = 0; i < shifts.length; i++) {
    shifts[i].addEventListener('change', shiftChanged);
  }

  let Gildi = '';
  input.addEventListener('input', () => {
    Gildi = input.value;
    console.log(Gildi)
    if(type === 'encode')
     console.log(encode(Gildi, shift, theAlphabet))
    else
     console.log(decode(Gildi, shift, theAlphabet))
  });


  function init(el) {
    // Setja event handlera á viðeigandi element
  }

  return {
    init,
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const ceasarForm = document.querySelector('.ceasar');

  Caesar.init(ceasarForm);
});
