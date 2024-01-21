function addCommas(number) {
  
  let numStr = String(number);
  const parts = numStr.split('.');
  let integerPart = parts[0];
  const decimalPart = parts[1] || '';

  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const result = decimalPart ? `${integerPart}.${decimalPart}` : integerPart;

  return result;
}

// Test cases
function runTests() {
  function assertEqual(actual, expected, testName) {
    if (actual === expected) {
      console.log(`${testName}: Passed`);
    } else {
      console.log(`${testName}: Failed - Expected "${expected}", but got "${actual}"`);
    }
  }

  // Regular cases
  assertEqual(addCommas(1234), '1,234', 'Test Case 1');
  assertEqual(addCommas(1000000), '1,000,000', 'Test Case 2');
  assertEqual(addCommas(9876543210), '9,876,543,210', 'Test Case 3');
  assertEqual(addCommas(6), '6', 'Test Case 4');
  assertEqual(addCommas(-10), '-10', 'Test Case 5');
  assertEqual(addCommas(-5678), '-5,678', 'Test Case 6');



// Run the tests
runTests();
