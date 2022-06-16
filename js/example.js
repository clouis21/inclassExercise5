// ADD NEW ITEM TO END OF LIST


// ADD NEW ITEM START OF LIST


// ADD A CLASS OF COOL TO ALL LIST ITEMS


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

//add cream at end
  //get first ul in document
  const nodeUL = document.getElementsByTagName("ul")[0];
  //give the list an id
nodeUL.setAttribute("id","mylist");
  //create li
const node1 = document.createElement("li");
const textnode1 = document.createTextNode("cream");
   //append text to li
node1.appendChild(textnode1);
  //append li to list
nodeUL.appendChild(node1);


//add kale to top of list
const node2 = document.createElement("li");
const textnode2 = document.createTextNode("Kale");
node2.appendChild(textnode2);
const currentFirst = nodeUL.childNodes[0];
nodeUL.insertBefore(node2, currentFirst);


//Add cool class name to all list items
var allNodes = nodeUL.getElementsByTagName("li");
for (let i=0; i < allNodes.length; i++){
  allNodes[i].classList.add("cool");
}


//header counter tag
var tagNumber = allNodes.length;
const countField = document.createElement('span');
countField.textContent = tagNumber.toString();
var getH2 = document.getElementsByTagName("h2")[0];
getH2.appendChild( countField);

