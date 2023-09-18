document.getElementById('withdraw-btn').addEventListener('click',function(){
    
  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawInputString = withdrawInput.value;
  const newWithdraw = parseFloat(withdrawInputString);
  withdrawInput.value = '';

  const withdrawField = document.getElementById('withdraw-field');
  
  const withdrawFieldString = withdrawField.innerText;
  const previousWithdraw = parseFloat(withdrawFieldString);

  const newWithdrawTotal = previousWithdraw + newWithdraw;
  withdrawField.innerText = newWithdrawTotal;

  const balanceField = document.getElementById('balance-field');
  const balanceFieldString = balanceField.innerText;
  const previousBalance = parseFloat(balanceFieldString);

  if(newWithdrawTotal>previousBalance){
    alert('you dont have sufficient balance');
  }
   
  const newBalance = previousBalance - newWithdrawTotal;

  balanceField.innerText = newBalance;

})