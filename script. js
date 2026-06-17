let hall = "A";
let present = 0;
let absent = 0;

function login() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    createSeats();
}

function switchHall(h) {
    hall = h;
    document.getElementById("hallName").innerText = h;
    createSeats();
}

function updateStats() {
    document.getElementById("presentCount").innerText = present;
    document.getElementById("absentCount").innerText = absent;
}

function createSeats() {

    let grid = document.getElementById("grid");
    let table = document.getElementById("tableBody");

    grid.innerHTML = "";
    table.innerHTML = "";

    present = 0;
    absent = 0;

    updateStats();

    for (let i = 1; i <= 12; i++) {

        let seat = document.createElement("div");
        seat.className = "seat free";
        seat.innerText = i;

        seat.onclick = function () {

            if (seat.classList.contains("free")) {
                seat.classList.remove("free");
                seat.classList.add("present");
                present++;
            }

            else if (seat.classList.contains("present")) {
                seat.classList.remove("present");
                seat.classList.add("absent");
                present--;
                absent++;
            }

            else {
                seat.classList.remove("absent");
                seat.classList.add("free");
                absent--;
            }

            updateStats();
            renderTable();
        };

        grid.appendChild(seat);
    }
}

function renderTable() {

    let table = document.getElementById("tableBody");
    table.innerHTML = "";

    let seats = document.querySelectorAll(".seat");

    seats.forEach((s, index) => {

        let status = "Free";
        if (s.classList.contains("present")) status = "Present";
        if (s.classList.contains("absent")) status = "Absent";

        table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${status}</td>
            </tr>
        `;
    });
}

function exportCSV() {

    let csv = "Seat,Status\n";

    document.querySelectorAll(".seat").forEach((s, i) => {
        let status = "Free";
        if (s.classList.contains("present")) status = "Present";
        if (s.classList.contains("absent")) status = "Absent";
        csv += `${i+1},${status}\n`;
    });

    let blob = new Blob([csv], { type: "text/csv" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "attendance.csv";
    a.click();
}