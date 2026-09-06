const form = document.getElementById("userForm");
const userList = document.getElementById("userList");

function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    userList.innerHTML = "";

    users.forEach((user, index) => {
        const li = document.createElement("li");

        li.className =
            "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <div>
                <strong>Username:</strong> ${user.username}
                <br>
        `;

        userList.appendChild(li);
    });
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({
        username,
        password,
    });

    localStorage.setItem("users", JSON.stringify(users));

    form.reset();

    displayUsers();
});

// Load data when page opens
displayUsers();