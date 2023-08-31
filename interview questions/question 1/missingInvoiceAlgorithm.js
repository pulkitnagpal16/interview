// You work at a small e-commerce company, and your task is to help the finance department
// identify a missing invoice number in a sequence of invoices. The company generates invoice
// numbers for each order to keep track of transactions.
// However, due to a technical glitch, one invoice number is missing from the records. The
// team needs to find this missing invoice number to maintain accurate financial records.
// Here are the details:
// 1. Invoice numbers are assigned sequentially, starting from 1 for the first order.
// 2. The invoice numbers are stored in an array invoiceNumbers, but one number is
// missing.
// 3. The array invoiceNumbers contains a mix of ordered invoice numbers and
// potentially one missing number.
// Create an algorithm to find the invoice number of a missing invoice

function findMissingInvoice(invoiceNumbers) {
    invoiceNumbers.sort((a, b) => a - b);

    for (let i = 0; i < invoiceNumbers.length; i++) {
        if (invoiceNumbers[i] !== i + 1) {
            return i + 1;
        }
    }

    // If no missing invoice is found, return the next expected invoice number
    return invoiceNumbers.length + 1;
}

