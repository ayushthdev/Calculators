p = prompt("Enter the Principal Value:");
r = prompt("Enter Rate value");
n = prompt("Enter the No of Years:");

a = p * (1 + r / 100) ** n;
alert(`The Amount is: ${a} Rupees`);
