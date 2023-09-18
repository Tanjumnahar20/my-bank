document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositString = depositInput.value;
    const newDeposit = parseFloat(newDepositString);

    depositInput.value ='';
     
    const depositField = document.getElementById('deposit-field');
    const previousDepositTotalString = depositField.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const newDepositTotal = previousDepositTotal+newDeposit;
    depositField.innerText = newDepositTotal;

    const balanceField = document.getElementById('balance-field');
  const balanceFieldString = balanceField.innerText;
  const previousBalance = parseFloat(balanceFieldString);
   
  const newBalance = previousBalance + newDepositTotal;

  balanceField.innerText = newBalance;

   })

  