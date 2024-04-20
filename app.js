const button_copy = document.querySelector("#btn-copy");
const couponInput = document.querySelector("[name='coupon']");
// const value_coupon = couponInput.value;

button_copy.addEventListener("click", (e) => {
  console.log("Click Copy");
  couponInput.select();
  couponInput.setSelectionRange(0, 9999999);
  navigator.clipboard.writeText(couponInput.value);
  button_copy.textContent = "คัดลอกคูปองแล้ว!!";
  setTimeout(() => {
    button_copy.textContent = "คัดลอก";
  }, 1000);
});
