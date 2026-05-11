
let dataStore = [
    { id: 1, name: "Első mintaadat", category: "Egyéb" },
    { id: 2, name: "Második mintaadat", category: "Fontos" }
];

function renderTable() {
    const list = document.getElementById('listContainer');
    if (!list) return;

    list.innerHTML = dataStore.map(item => `
        <div class="item">
            <div>
                <strong>${item.name}</strong> <small>(${item.category})</small>
            </div>
            <button class="delete" onclick="removeItem(${item.id})">Törlés</button>
        </div>
    `).join('');
}

function addItem() {
    const input = document.getElementById('taskInput');
    if (input && input.value.trim() !== "") {
        const newItem = {
            id: Date.now(),
            name: input.value,
            category: "Új"
        };
        dataStore.push(newItem);
        input.value = "";
        renderTable();
    }
}

function removeItem(id) {
    dataStore = dataStore.filter(item => item.id !== id);
    renderTable();
}


document.addEventListener('DOMContentLoaded', renderTable);