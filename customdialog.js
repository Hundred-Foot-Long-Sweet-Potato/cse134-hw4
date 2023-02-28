
const custmAlert = document.getElementById("customAlertBtn");
const alertDia = document.getElementById("alertDialog");
custmAlert.addEventListener("click", ()=>{
    alertDia.showModal();
})

const custmConfirm = document.getElementById("customConfirmBtn");
const confirmDia = document.getElementById("confirmDialog");
custmConfirm.addEventListener("click", () => {
    confirmDia.showModal();
})