
function start() {
  const token = document.getElementById("token").value;
  const chatid = document.getElementById("chatid").value;
  const results = document.getElementById("results");
  results.innerHTML = '';

  setInterval(() => {
    let card = Math.floor(10000000000000 + Math.random() * 90000000000000).toString();
    let isValid = Math.random() < 0.1;
    let cardBox = document.createElement("div");
    cardBox.className = "card " + (isValid ? "success" : "fail");
    cardBox.innerText = (isValid ? "بطاقة صالحة: " : "بطاقة مرفوضة: ") + card;
    results.prepend(cardBox);
  }, 1000);
}
