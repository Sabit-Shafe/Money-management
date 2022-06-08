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
    // calculate food ,rent and clothes
    let foodCost = parseInt(document.getElementById('foodInput').value);//food cost
    // foodInput.value = '';
    let rentCost = parseInt(document.getElementById('rentInput').value);//rent cost
    // rentInput.value = '';
    let clothCost = parseInt(document.getElementById('clothesInput').value);//clothescost
    // clothesInput.value = '';
    let totalExpence = foodCost + rentCost + clothCost;   
    //total cost
    
    document.getElementById('total-expence').innerText = totalExpence;//total expence calculate 
    let income = parseInt(document.getElementById('incomeInput').value);//income value input
    // incomeInput.value = '';

    let totalBalance = income - totalExpence; //balance calculate

    document.getElementById('total-balance').innerText = totalBalance;// total balance innertext
    // save amount calculation
    let saving = parseInt(document.getElementById('save-input').value); //save button input

    let savingAmount = income * saving /100;//calculate saving
    document.getElementById('saving-amount').innerText = savingAmount;//saving innertext
    let remainingBalance = totalBalance - savingAmount;//remainning balance
    document.getElementById('remain-balance').innerText  = remainingBalance;//remainning balance inner text
}

