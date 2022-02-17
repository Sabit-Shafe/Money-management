function calculate (){
    //error handle
    var error = document.getElementById("error")
    if (isNaN(document.getElementById("foodInput",).value)) 
    {
          
        // Changing content and color of content
        error.textContent = "Please enter a valid number"
        error.style.color = "red"
    
    } else {
        
    }

    
    let foodCost = parseInt(document.getElementById('foodInput').value);
    foodInput.value = '';
    let rentCost = parseInt(document.getElementById('rentInput').value);
    rentInput.value = '';
    
    let clothCost = parseInt(document.getElementById('clothesInput').value);
    clothesInput.value = '';
    let totalExpence = foodCost + rentCost + clothCost;
    
    document.getElementById('total-expence').innerText = totalExpence;
    let income = parseInt(document.getElementById('incomeInput').value);
    incomeInput.value = '';

    let totalBalance = income - totalExpence;

    document.getElementById('total-balance').innerText = totalBalance;

    let saving = parseInt(document.getElementById('save-input').value);

    let savingAmount = income * saving /100;
    document.getElementById('saving-amount').innerText = savingAmount;
    let remainingBalance = totalBalance - savingAmount;
    document.getElementById('remain-balance').innerText  = remainingBalance;
}

