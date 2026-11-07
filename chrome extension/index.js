
const input_da = document.getElementById("input-el");
const butt = document.getElementById("input-btn");
let storage = []
let datas = document.getElementById("show_data");
const storageFromLocalStorage = JSON.parse(localStorage.getItem("storage"))
let delete_btn = document.getElementById("delete-btn")

delete_btn.addEventListener('dblclick', () => {
    storage = []
    localStorage.clear();
    render(storage)
})

if (storageFromLocalStorage) {
    storage = storageFromLocalStorage
    render(storage)
}
else {
    render(storage)
}

butt.addEventListener('click', () => {

    storage.push(input_da.value);
    input_da.value = ""
    localStorage.setItem("storage", JSON.stringify(storage))
    render(storage)
    console.log(localStorage.getItem("storage"))

});
function render(lead) {
    let listitem = "";
    for (let i = 0; i < lead.length; i++) {
        listitem +=   `
      <li >
      <a target='_blank' href='#' class="text-emerald-600 mb-5 text-3xl underline href="lead[i]">
       ${lead[i]} 
       </a>
       </li>`
    }

    datas.innerHTML = listitem;

}