// Function to calculate and show the price based on what the user selects
function updatePrice() {
    let total = 0;

    // Check if the item is a Wedding Cake
    if (currentOrder.type === "wedding") {
        // Get the selected type (e.g., full fondant or classic) and the number of tiers
        const type = document.querySelector('input[name="wType"]:checked').value;
        const tier = document.getElementById('wTier').value;
        // Look up the price from your price list (prices object)
        total = prices.wedding[type][tier];

    // Check if the item is a Moist Cake 
    } else if (currentOrder.type === "moist") {
        // Get the price based on the cake category and chosen size
        total = prices.moist[currentOrder.category][document.getElementById('mSize').value];

    // Check if the item is a Pastry (like Cinnamon Rolls or Donuts)
    } else if (currentOrder.type === "pastry") {
        // Get the value of the selected quantity (e.g., box of 6 or 12)
        total = document.querySelector('input[name="pQty"]:checked').value;
    }

    // Update the text on the screen to show the total price with a Peso sign
    document.getElementById('displayPrice').innerText = `₱${total}`;
}

// Function to gather all order info and send it to WhatsApp
function confirmOrder() {
    // Get the final price shown on the screen
    const finalPrice = document.getElementById('displayPrice').innerText;
    let details = "";
    
    // Collect specific details depending on what kind of item was ordered
    if(currentOrder.type === "wedding"){
        details = `Type: ${document.querySelector('input[name="wType"]:checked').value}, Tier: ${document.getElementById('wTier').value}, Note: ${document.getElementById('modalDesign').value}`;
    } else if(currentOrder.type === "moist"){
        details = `Size: ${document.getElementById('mSize').value}, Note: ${document.getElementById('modalDesign').value}`;
    } else if(currentOrder.type === "pastry"){
        // Get the text label of the selected quantity
        const selectedQty = document.querySelector('input[name="pQty"]:checked').parentElement.innerText;
        details = `Quantity: ${selectedQty}`;
    }

    // Format the message for WhatsApp (using %0A for new lines)
    const message = ` *SOUTH'S BAKE HAVEN ORDER* %0A%0A` +
                    `*Item:* ${currentOrder.name}%0A` + 
                    `*Details:* ${details}%0A` +
                    `*Total Price:* ${finalPrice}`;
                    
    // Open WhatsApp in a new tab with the formatted message
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
}