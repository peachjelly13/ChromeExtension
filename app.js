let inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let deletebutton = document.getElementById("delete");
deletebutton.addEventListener("dblclick",function(){
  localStorage.clear();
  myLeads = [];
  render();
})
let myLeads = [];
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render()
}
inputBtn.addEventListener("click",function(){
  valueEl = inputEl.value;
  myLeads.push(valueEl);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads) )
  render();
})
function render() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}
