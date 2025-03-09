const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", () => {
    let text = input.value.trim()
    output.textContent = text || "Anonymus"
}) 



