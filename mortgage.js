document.getElementById('calculateButton').addEventListener('click', function () {
    // Retrieve input values
    const homePrice = parseFloat(document.getElementById('homePrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly rate
    const propertyTax = parseFloat(document.getElementById('propertyTax').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;

    // Calculate the principal (loan amount)
    const loanAmount = homePrice - downPayment;

    // Calculate number of monthly payments
    const numPayments = loanTerm * 12;

    // Calculate monthly interest rate
    const monthlyRate = interestRate;

    // Monthly mortgage payment formula (principal and interest)
    const monthlyPaymentPI = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));

    // Calculate monthly taxes and insurance
    const monthlyPropertyTax = propertyTax / 12;
    const monthlyInsurance = insurance / 12;

    // Total monthly payment
    const totalMonthlyPayment = monthlyPaymentPI + monthlyPropertyTax + monthlyInsurance;

    // Total cost of the loan
    const totalCostOfLoan = totalMonthlyPayment * numPayments;

    // Update results on the page
    document.getElementById('monthlyPayment').textContent = `₦${totalMonthlyPayment.toFixed(2)}`;
    document.getElementById('totalCost').textContent = `₦${totalCostOfLoan.toFixed(2)}`;
});