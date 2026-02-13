const isPalindrome = (str) => {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

const palindromeBtn = document.getElementById("palindromeBtn");
const palindromeInput = document.getElementById("palindromeInput");
const palindromeResult = document.getElementById("palindromeResult");

palindromeBtn.addEventListener("click", () => {
  const input = palindromeInput.value;
  const result = isPalindrome(input);

  palindromeResult.textContent = result
    ? `"${input}" is a palindrome!`
    : `"${input}" is not a palindrome.`;
  palindromeResult.style.color = result ? "green" : "red";

  alert(result ? `"${input}" is a palindrome!` : `"${input}" is not a palindrome.`);
});
