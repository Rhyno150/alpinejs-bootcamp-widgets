function transportFee(shift) {
    switch (shift){
      case 'morning':
        return 'R20';
        break;
      case 'afternoon':
        return 'R10';
        break;
      case 'nightshift':
        return 'free';
        break;
                 }
    };

    function calculateFee() {
        const shift = document.getElementById('shift').value;
        let fee;

        switch (shift) {
            case 'morning':
                fee = 'R20';
                break;
            case 'afternoon':
                fee = 'R10';
                break;
            case 'nightshift':
                fee = 'Free';
                break;
            default:
                fee = 'Invalid Shift';
        }

        document.getElementById('fee').innerHTML = `Your transport fee for ${shift} shift is: ${fee}`;
    }