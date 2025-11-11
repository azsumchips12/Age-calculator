const picker = datepicker('#date', {
  startDay: 0,
  customDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  customMonths: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  formatter: (input, date) => {
    input.value = date.toLocaleDateString('en-US');
  },
  position: 'bl',
  overlayButton: 'Go',
  overlayPlaceholder: 'Enter year (YYYY)',
});

const calculateButton = document.querySelector('.calculate');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const dateInput = document.getElementById('date').value;
  const birthDate = new Date(dateInput);
  const today = new Date();

  if (birthDate > today) {
    result.textContent = "Birth date cannot be in the future!";
    result.style.color = "red";
    return;
  }

  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  if (ageDays < 0) {
    ageMonths--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate(); 
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  result.textContent = `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old!`;
  result.style.color = "black";
});
