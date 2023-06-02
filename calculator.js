     function appendNumber(number) {
        var result = document.getElementById('result');
        result.value += number;
      }
  
      function clearResult() {
        var result = document.getElementById('result');
        result.value = '';
      }
  
      function operation(operator) {
        var result = document.getElementById('result');
        result.value += operator;
      }
  
      function calculateResult() {
        var result = document.getElementById('result');
        var expression = result.value;
        var calculatedResult = eval(expression);
        result.value = calculatedResult;
      }