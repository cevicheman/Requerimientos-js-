import { getSalesCoffee } from "./requirements.js";

const processSalesCoffee = async () => {
    console.log("funcion ejecutada por fin");
    let data = await getSalesCoffee();

    let parser = new DOMParser();
    let xml = parser.parseFromString(data, "text/xml");

    let rows = xml.getElementsByTagName("row");
    let tbody = document.getElementById("example").getElementsByTagName("tbody")[0];

    tbody.innerHTML = "";

    for (let i = 0; i < rows.length; i++) {
        let tr = document.createElement("tr");

        tr.innerHTML =
            "<td>" + rows[i].getElementsByTagName("coffee_name")[0].textContent + "</td>" +
            "<td>" + rows[i].getElementsByTagName("cash_type")[0].textContent + "</td>" +
            "<td>" + rows[i].getElementsByTagName("money")[0].textContent + "</td>" +
            "<td>" + rows[i].getElementsByTagName("hour_of_day")[0].textContent + "</td>" +
            "<td>" + rows[i].getElementsByTagName("Date")[0].textContent + "</td>" +
            "<td>" + rows[i].getElementsByTagName("Weekday")[0].textContent + "</td>";

        tbody.appendChild(tr);
    }

    $("#example").DataTable();
};

window.onload = processSalesCoffee;