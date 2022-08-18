const passwordLength = document.getElementById("passwordLength")
const password = document.getElementById("password")
const saveBtn = document.getElementById("saveBtn")
const includeSymbolCb = document.getElementById("includeSymbolCb")

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numeric = "0123456789"
  const symbol = "!@#$%^&*()_+=-{}[]';:/?.,<>~`"

  let data = lowerAlphabet + upperAlphabet + numeric

  if (includeSymbolCb.checked == true) {
    data += symbol
  }

  let generator = ""
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)]
  }

  return generator
}

function getPassword() {
  let passLen = passwordLength.value

  if (passLen > 0 && passLen <= 1000) {
    const newPassword = generatePassword(passwordLength.value)
    password.value = newPassword
    // setTimeout(() => {
    //   alert("Password berhasil dibuat")
    // }, 500)
  } else {
    alert("Panjang Password harus diantara 1 - 1000")
    passwordLength.value = "0"
    password.value = null
  }
}

function savePassword() {
  saveBtn.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent("password: " + password.value))
  saveBtn.setAttribute("download", "MyPasswordGenerator.txt")
  // setTimeout(() => {
  //   alert("Password berhasil disimpan")
  // }, 500)
}
