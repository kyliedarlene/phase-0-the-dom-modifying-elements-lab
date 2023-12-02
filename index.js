// Write your code here!

main.remove();

const newHeader = document.createElement("h1");
document.body.append(newHeader);

const newId = document.createAttribute("id");
newId.value = "victory";
newHeader.setAttributeNode(newId);

newHeader.textContent = "Beck is the champion!";