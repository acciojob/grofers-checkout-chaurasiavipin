const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let ans=document.querySelectorAll(".price");
	let sum=0;
 ans.forEach(price => {
    sum += parseInt(price.textContent);
  });

//Add your code here
  
};

getSumBtn.addEventListener("click", getSum);

