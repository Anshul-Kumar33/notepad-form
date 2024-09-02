function addItem() {
    const itemText = document.getElementById('new-item').value;
    if (itemText !== '') {
        const ul = document.getElementById('checklist');
        const li = document.createElement('li');
        li.innerHTML = `${itemText} <button onclick="removeItem(this)">Remove</button>`;
        ul.appendChild(li);
        document.getElementById('new-item').value = '';
        updateChecklistItems();
    }
}

function removeItem(button) {
    const li = button.parentNode;
    li.remove();
    updateChecklistItems();
}

function updateChecklistItems() {
    const checklistItems = [];
    document.querySelectorAll('#checklist li').forEach(li => {
        checklistItems.push(li.textContent.replace('Remove', '').trim());
    });
    document.getElementById('checklist-items').value = checklistItems.join(',');
}

document.getElementById('notepad-form').addEventListener('submit', function(event) {
    updateChecklistItems();
});
