const API_URL = "https://jsonplaceholder.typicode.com/posts";
const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

// Colors for notes
const colors = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#577590"];

// Helper: random color
function randomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

// Render notes
function renderNotes(notes) {
    notesContainer.innerHTML = "";
    notes.forEach(note => {
        const div = document.createElement("div");
        div.className = "note";
        div.style.backgroundColor = note.color || randomColor();

        const content = document.createElement("span");
        content.textContent = note.title;

        const buttons = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editNote(note.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteNote(note.id);

        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        div.appendChild(content);
        div.appendChild(buttons);

        notesContainer.appendChild(div);
    });
}

// Load notes (GET)
async function loadNotes() {
    try {
        const res = await fetch(API_URL + "?_limit=5"); // first 5 notes
        const data = await res.json();
        // Add random colors
        data.forEach(n => n.color = randomColor());
        renderNotes(data);
    } catch (err) {
        console.error(err);
    }
}

// Add note (POST)
addNoteBtn.addEventListener("click", async () => {
    const content = noteInput.value.trim();
    if (!content) return alert("Write a note first");

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: content })
        });
        const newNote = await res.json();
        newNote.color = randomColor();
        noteInput.value = "";
        alert("Note added!");
        loadNotes();
    } catch (err) {
        console.error(err);
    }
});

// Edit note (PUT)
async function editNote(id) {
    const newContent = prompt("Edit your note:");
    if (!newContent) return;

    try {
        await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: newContent })
        });
        alert("Note updated!");
        loadNotes();
    } catch (err) {
        console.error(err);
    }
}

// Delete note (DELETE)
async function deleteNote(id) {
    if (!confirm("Delete this note?")) return;
    try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        alert("Note deleted!");
        loadNotes();
    } catch (err) {
        console.error(err);
    }
}

// Initialize
loadNotes();

