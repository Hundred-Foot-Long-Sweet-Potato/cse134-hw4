
const custmAlert = document.getElementById("customAlertBtn");
const alertDia = document.getElementById("alertDialog");
custmAlert.addEventListener("click", ()=>{
    alertDia.showModal();
})

const custmConfirm = document.getElementById("customConfirmBtn");
const confirmDia = document.getElementById("confirmDialog");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

custmConfirm.addEventListener("click", () => {
    confirmDia.showModal();
})

confirmYes.addEventListener("click", ()=>{
    document.getElementById("customConfirmOut").innerHTML = "yes";
})

confirmNo.addEventListener("click", ()=>{
    document.getElementById("customConfirmOut").innerHTML = "no";
})