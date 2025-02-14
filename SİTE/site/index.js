function toggleLoginForm() {
  var form = document.getElementById("login-form");
  // Formun görünürlüğünü değiştirir
  form.style.display = form.style.display === "block" ? "none" : "block";
}


function toggleSignup() {
  const signupForm = document.getElementById("signupForm");
  signupForm.style.display = (signupForm.style.display === "none" || signupForm.style.display === "") ? "block" : "none";
}

// Kayıt Formu Doğrulama
function submitSignup() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  if (fullName === "" || email === "" || password === "") {
      alert("Lütfen tüm alanları doldurun!");
      return;
  }

  if (!email.includes("@")) {
      alert("Lütfen geçerli bir e-posta adresi girin!");
      return;
  }

  if (password.length < 6) {
      alert("Şifreniz en az 6 karakter olmalıdır!");
      return;
  }

  alert("Kayıt başarılı! Hoş geldin, " + fullName);
}
