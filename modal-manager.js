//this is the function for escape key to close the modal
function closeModal() {
    document.getElementById('orderModal').style.display = "none";
}
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

//this is the function that opens the modal for the wedding cake order
function openWeddingModal(name, imgPath) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalImg').src = imgPath;
    currentOrder = { name: name, type: "wedding" };

    document.getElementById('modalDynamicBody').innerHTML = `
        <div class="options-group">
            <label class="group-title">Cake Type</label>
            <div class="custom-radio-group">
                <label class="radio-card"><input type="radio" name="wType" value="Classic" checked onchange="updatePrice()"><span>Classic</span></label>
                <label class="radio-card"><input type="radio" name="wType" value="Full Fondant" onchange="updatePrice()"><span>Full Fondant</span></label>
            </div>
        </div>
        <div class="options-group">
            <label class="group-title">Tiers</label>
            <select id="wTier" onchange="updatePrice()" class="modal-select" style="width:100%; padding:10px; border-radius:10px;">
                <option value="1">1 Tier</option><option value="2">2 Tiers</option>
                <option value="3">3 Tiers</option><option value="4">4 Tiers</option><option value="5">5 Tiers</option>
            </select>
        </div>
        <div class="options-group">
            <label class="group-title">Design/Description</label>
            <textarea id="modalDesign" placeholder="Type here..." style="width:100%; height:60px; border-radius:10px; padding:10px;"></textarea>
        </div>`;
    document.getElementById('orderModal').style.display = "block";
    updatePrice();
}
//this is the function that opens the modal for the moist cake
function openMoistModal(name, startPrice, imgPath) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalImg').src = imgPath;
    const category = (startPrice === 480) ? "premium" : "regular";
    currentOrder = { name: name, type: "moist", category: category };

    document.getElementById('modalDynamicBody').innerHTML = `
        <div class="options-group">
            <label class="group-title">Select Size</label>
            <select id="mSize" onchange="updatePrice()" class="modal-select" style="width:100%; padding:10px; border-radius:10px;">
                <option value="7x2.5">7" x 2.5" (₱${prices.moist[category]["7x2.5"]})</option>
                <option value="7x4.5">7" x 4.5" (₱${prices.moist[category]["7x4.5"]})</option>
                <option value="8x4.5">8" x 4.5" (₱${prices.moist[category]["8x4.5"]})</option>
                <option value="8x6">8" x 6" (₱${prices.moist[category]["8x6"]})</option>
            </select>
        </div>
        <div class="options-group">
            <label class="group-title">Design/Description</label>
            <textarea id="modalDesign" placeholder="Type here..." style="width:100%; height:60px; border-radius:10px; padding:10px;"></textarea>
        </div>`;
    document.getElementById('orderModal').style.display = "block";
    updatePrice();
}
//this is the function that opens the modal for a pastry
function openPastryModal(name, p1, p2, imgPath) {
    document.getElementById('modalName').innerText = name;
    document.getElementById('modalImg').src = imgPath;
    currentOrder = { name: name, type: "pastry" };
    
    let qty1 = (name.includes("Donuts") || name.includes("Cinnamon")) ? "6 pcs" : "18 pcs";
    let qty2 = (name.includes("Donuts") || name.includes("Cinnamon")) ? "12 pcs" : "36 pcs";

    document.getElementById('modalDynamicBody').innerHTML = `
        <div class="options-group">
            <label class="group-title">Select Quantity</label>
            <div class="custom-radio-group">
                <label class="radio-card"><input type="radio" name="pQty" value="${p1}" checked onchange="updatePrice()"><span>${qty1} (₱${p1})</span></label>
                <label class="radio-card"><input type="radio" name="pQty" value="${p2}" onchange="updatePrice()"><span>${qty2} (₱${p2})</span></label>
            </div>
        </div>`;
    document.getElementById('orderModal').style.display = "block";
    updatePrice();
}