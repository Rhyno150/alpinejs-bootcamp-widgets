function totalPhoneBill(str) {
    let listNew = str.split(',');
      var cost = 0;
      for (let item of listNew) {
        if (item.trim() == 'sms') {
          cost += 0.65;
        } else if (item.trim() == 'call') {
            cost += 2.75;
        }
        
      }
      return 'R'+cost.toFixed(2);
      //return "R"+cost;
      }

      function calculateBill() {
        const billItems = document.getElementById('billItems').value.trim();
        let totalCost = 0;

        if (billItems) {
            const items = billItems.split(',');

            for (const item of items) {
                const trimmedItem = item.trim().toLowerCase(); // Standardize input (lowercase and remove whitespace)
                switch (trimmedItem) {
                    case 'sms':
                        totalCost += 0.65;
                        break;
                    case 'call':
                        totalCost += 2.75;
                        break;
                    default:
                        // Handle invalid items (optional: display a message)
                        console.warn(`Ignoring invalid item: ${trimmedItem}`);
                }
            }

            document.getElementById('totalBill').innerHTML = `Your total phone bill is: R${totalCost.toFixed(2)}`;
        } else {
            document.getElementById('totalBill').innerHTML = 'Please enter your phone bill items.';
        }
    }