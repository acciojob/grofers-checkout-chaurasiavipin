const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let ans=document.querySelectorAll(".price");
	let sum=0;
 ans.forEach(el => {
    sum += parseInt(el.textContent);
  });

//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

