import React from "react";

function getAllClients() {
    fetch("https://diyprotest.com/api/clients")
        .Then(() => { res => res.json()})
}