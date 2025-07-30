function validateForm() {
  const nama = document.getElementById("nama").value.trim();
  const nomerhp = document.getElementById("nomerhp").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (nama === "" || nomerhp === "" || alamat === "") {
    errorMsg.textContent = "Nama, Nomer HP dan  Alamat tidak boleh kosong.";
    return false;
  }

  errorMsg.textContent = "";
  window.location.href = "berhasil.html";
  return false; 
}
