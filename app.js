/* =====================================
   REDMAX TECH ASSISTANT
   APP.JS
===================================== */

/* ---------- ONLINE STATUS ---------- */

function updateConnectionStatus() {
    const status = document.getElementById("connectionStatus");

    if (!status) return;

    if (navigator.onLine) {
        status.textContent = "🟢 Online";
        status.className = "status online";
    } else {
        status.textContent = "🔴 Offline";
        status.className = "status offline";
    }
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

/* ---------- INSTALL PROMPT ---------- */

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();

    deferredPrompt = e;

    const installBtn = document.getElementById("installBtn");

    if (installBtn) {
        installBtn.hidden = false;
    }
});

async function installApp() {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

    document.getElementById("installBtn").hidden = true;
}

/* ---------- DIAGNOSTICS ---------- */

function startDiagnosis() {

    const symptom =
        document.getElementById("symptom").value;

    const questions =
        document.getElementById("questions");

    const result =
        document.getElementById("diagnosticResult");

    questions.innerHTML = "";
    result.innerHTML = "";

    switch (symptom) {

        case "nostart":

            questions.innerHTML = `
                <p>Does the engine have spark?</p>

                <button onclick="sparkAnswer(true)">Yes</button>
                <button onclick="sparkAnswer(false)">No</button>
            `;
            break;

        case "dies":

            result.innerHTML =
                "Inspect fuel filter, carburetor diaphragm, fuel lines, and tank vent.";

            break;

        case "nospark":

            result.innerHTML =
                "Inspect spark plug, ignition coil, wiring, and stop switch.";

            break;

        case "overheat":

            result.innerHTML =
                "Inspect cooling fins, air flow, exhaust restriction, and fuel mixture.";

            break;
    }
}

function sparkAnswer(hasSpark) {

    const questions =
        document.getElementById("questions");

    const result =
        document.getElementById("diagnosticResult");

    if (!hasSpark) {

        questions.innerHTML = "";

        result.innerHTML =
            "Ignition fault suspected. Check spark plug, kill switch, wiring, and ignition module.";

        return;
    }

    questions.innerHTML = `
        <p>Compression above 120 PSI?</p>

        <button onclick="compressionAnswer(true)">
            Yes
        </button>

        <button onclick="compressionAnswer(false)">
            No
        </button>
    `;
}

function compressionAnswer(goodCompression) {

    document.getElementById("questions").innerHTML = "";

    if (!goodCompression) {

        document.getElementById("diagnosticResult").innerHTML =
            "Low compression. Inspect piston, cylinder, rings, crank seals, and gaskets.";

        return;
    }

    document.getElementById("diagnosticResult").innerHTML =
        "Spark and compression are OK. Focus on carburetor, fuel delivery, fuel filter, and fuel lines.";
}

/* ---------- SERVICE LOG ---------- */

function getLogs() {
    return JSON.parse(
        localStorage.getItem("serviceLogs") || "[]"
    );
}

function saveLogs(logs) {
    localStorage.setItem(
        "serviceLogs",
        JSON.stringify(logs)
    );
}

function saveLog() {

    const machine =
        document.getElementById("machine").value.trim();

    const notes =
        document.getElementById("notes").value.trim();

    if (!machine || !notes) {
        alert("Machine and notes are required.");
        return;
    }

    const logs = getLogs();

    logs.push({
        machine,
        notes,
        date: new Date().toISOString()
    });

    saveLogs(logs);

    alert("Log saved.");

    document.getElementById("machine").value = "";
    document.getElementById("notes").value = "";
}

/* ---------- EXPORT ---------- */

function exportLogs() {

    const logs = getLogs();

    const blob = new Blob(
        [JSON.stringify(logs, null, 2)],
        {
            type: "application/json"
        }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download = "RedMaxServiceLogs.json";
    link.click();

    URL.revokeObjectURL(url);
}

/* ---------- BACKUP ---------- */

function backupLogs() {

    const backup = {
        exportDate:
            new Date().toISOString(),
        logs: getLogs()
    };

    const blob = new Blob(
        [JSON.stringify(backup, null, 2)],
        {
            type: "application/json"
        }
    );

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download = "RedMaxBackup.json";
    link.click();

    URL.revokeObjectURL(url);
}

/* ---------- RESTORE ---------- */

function restoreBackup() {

    const file =
        document.getElementById("restoreFile").files[0];

    if (!file) {
        alert("Select a backup file.");
        return;
    }

    const reader = new FileReader();

    reader.onload = () => {

        const backup =
            JSON.parse(reader.result);

        saveLogs(backup.logs || []);

        alert("Backup restored.");
    };

    reader.readAsText(file);
}

/* ---------- STARTUP ---------- */

window.addEventListener("load", () => {

    updateConnectionStatus();

    const installBtn =
        document.getElementById("installBtn");

    if (installBtn) {
        installBtn.addEventListener(
            "click",
            installApp
        );
    }
});