function calculateAirtime() {
    const billItems = document.getElementById('billItems').value.trim().toLowerCase();
    const airtimeAmount = parseFloat(document.getElementById('airtimeAmount').value);
  
    if (!isNaN(airtimeAmount) && billItems) { // Check for valid airtime amount and bill items
      let totalCost = 0;
  
      const items = billItems.split(',');
  
      for (const item of items) {
        const trimmedItem = item.trim();
        switch (trimmedItem) {
          case 'sms':
            totalCost += 0.75;
            break;
          case 'call':
            totalCost += 1.88;
            break;
          case 'data':
            totalCost += 12;
            break;
          default:
            // Handle invalid items gracefully (e.g., display a message)
            console.warn(`Ignoring invalid item: ${trimmedItem}`);
        }
      }
  
      const remainingAirtime = airtimeAmount - totalCost;
  
      if (remainingAirtime > 0) {
        document.getElementById('airtimeResult').innerHTML = `You have R${remainingAirtime.toFixed(2)} remaining airtime.`;
      } else {
        document.getElementById('airtimeResult').innerHTML = 'Insufficient airtime for your phone bill.';
      }
    } else {
      document.getElementById('airtimeResult').innerHTML = 'Please enter valid airtime amount and bill items.';
    }
  }
  