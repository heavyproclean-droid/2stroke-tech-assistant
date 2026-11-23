/* 2-Stroke Tech Assistant */

let deferredPrompt = null;

function escapeHTML(value) {
  const element = document.createElement("span");
  element.textContent = String(value);
  return element.innerHTML;
}

function updateConnectionStatus() {
  const status = document.getElementById("connectionStatus");
  if (!status) return;

  const online = navigator.onLine;
  status.textContent = online ? "🟢 Online" : "🔴 Offline";
  status.className = online ? "status online" : "status offline";
}

window.addEventListener("online", updateConnectionStatus);
window.addEventListener("offline", updateConnectionStatus);

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  document.getElementById("installBtn").hidden = false;
});

window.addEventListener("appinstalled", () => {
  deferredPrompt = null;
  document.getElementById("installBtn").hidden = true;
});

async function installApp() {
  if (!deferredPrompt) return;
  await deferredPrompt.prompt();
  await deferredPrompt.userChoice;
  deferredPrompt = null;
  document.getElementById("installBtn").hidden = true;
}

function showDiagnosticNode(nodeId) {
  const node = typeof diagnosticTree === "undefined" ? null : diagnosticTree[nodeId];
  const questions = document.getElementById("questions");
  const result = document.getElementById("diagnosticResult");

  if (!node) {
    result.textContent = "Diagnostic information is unavailable. Restart diagnosis and try again.";
    questions.innerHTML = "";
    return;
  }

  result.innerHTML = "";

  if (node.question) {
    questions.innerHTML = `<p>${escapeHTML(node.question)}</p>` + node.options.map((option, index) =>
      `<button type="button" class="diagnostic-option" data-next="${escapeHTML(option.next)}" data-index="${index}">${escapeHTML(option.text)}</button>`
    ).join("");

    questions.querySelectorAll(".diagnostic-option").forEach((button) => {
      button.addEventListener("click", () => showDiagnosticNode(button.dataset.next));
    });
    return;
  }

  questions.innerHTML = "";
  result.innerHTML = `
    <strong>${escapeHTML(node.diagnosis)}</strong>
    ${node.probability ? `<div>Estimated likelihood: ${escapeHTML(node.probability)}%</div>` : ""}
    <ul>${node.repairs.map((repair) => `<li>${escapeHTML(repair)}</li>`).join("")}</ul>
  `;
}

function startDiagnosis() {
  const symptom = document.getElementById("symptom").value;
  const result = document.getElementById("diagnosticResult");
  document.getElementById("questions").innerHTML = "";
  result.innerHTML = "";

  const routes = {
    nostart: "no_start_spark",
    dies: "starts_dies_idle",
    nospark: "ignition_failure",
    overheat: "air_filter",
    bogging: "bog_wot_filter",
    smoke: "smoke_mix"
  };

  if (!symptom || !routes[symptom]) {
    alert("Select a symptom before beginning diagnosis.");
    return;
  }

  showDiagnosticNode(routes[symptom]);
}

function getLogs() {
  try {
    const stored = localStorage.getItem("serviceLogs");
    if (!stored) return [];
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Unable to read service logs:", error);
    return [];
  }
}

function saveLogs(logs) {
  if (!Array.isArray(logs)) throw new TypeError("Logs must be an array.");
  localStorage.setItem("serviceLogs", JSON.stringify(logs));
}

function saveLog() {
  const machine = document.getElementById("machine").value.trim();
  const notes = document.getElementById("notes").value.trim();

  if (!machine || !notes) {
    alert("Machine and notes are required.");
    return;
  }

  const logs = getLogs();
  logs.push({ machine, notes, date: new Date().toISOString() });

  try {
    saveLogs(logs);
  } catch (error) {
    console.error("Unable to save service log:", error);
    alert("The log could not be saved in this browser.");
    return;
  }

  document.getElementById("machine").value = "";
  document.getElementById("notes").value = "";
  alert("Log saved.");
}

function downloadJSON(filename, data) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportLogs() {
  downloadJSON("TechAssistantLogs.json", getLogs());
}

function backupLogs() {
  downloadJSON("TechAssistantBackup.json", {
    app: "2-Stroke Tech Assistant",
    exportDate: new Date().toISOString(),
    logs: getLogs()
  });
}

function restoreBackup() {
  const file = document.getElementById("restoreFile").files[0];
  if (!file) {
    alert("Select a backup file.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(String(reader.result));
      const logs = Array.isArray(parsed) ? parsed : parsed.logs;

      if (!Array.isArray(logs) || !logs.every((log) =>
        log && typeof log.machine === "string" && typeof log.notes === "string"
      )) {
        throw new Error("Invalid backup structure");
      }

      saveLogs(logs);
      document.getElementById("restoreFile").value = "";
      alert("Backup restored.");
    } catch (error) {
      console.error("Unable to restore backup:", error);
      alert("This file is not a valid 2-Stroke Tech Assistant backup.");
    }
  };
  reader.onerror = () => alert("The backup file could not be read.");
  reader.readAsText(file);
}

window.addEventListener("load", () => {
  updateConnectionStatus();

  document.getElementById("installBtn").addEventListener("click", installApp);
  document.getElementById("beginDiagnosis").addEventListener("click", startDiagnosis);
  document.getElementById("saveLog").addEventListener("click", saveLog);
  document.getElementById("exportLogs").addEventListener("click", exportLogs);
  document.getElementById("backupLogs").addEventListener("click", backupLogs);
  document.getElementById("restoreBackup").addEventListener("click", restoreBackup);

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js").catch((error) => {
      console.error("Service worker registration failed:", error);
    });
  }
});
