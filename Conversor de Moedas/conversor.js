const Converter = () => {
    const getInputValue = parseFloat(document.querySelector("#input-num").value);
    const selected = document.querySelector("#selected").value;
    const selectedOutput = document.querySelector("#selected-coin").value;
  
    const Conversoes = () => {
      if (selected === 'brl' && selectedOutput === 'usd') {
        return getInputValue * 0.19;
      } else if (selected === 'brl' && selectedOutput === 'eur') {
        return getInputValue * 0.16;
      } else if (selected === 'usd' && selectedOutput === 'brl') {
        return getInputValue * 5.26;
      } else if (selected === 'usd' && selectedOutput === 'eur') {
        return getInputValue * 0.85;
      } else if (selected === 'eur' && selectedOutput === 'brl') {
        return getInputValue * 6.21;
      } else if (selected === 'eur' && selectedOutput === 'usd') {
        return getInputValue * 1.18;
      } else {
        return 'Please try a valid number!'
      }
    }
    document.querySelector("#output-num").value = Conversoes().toFixed(2);
  }
  