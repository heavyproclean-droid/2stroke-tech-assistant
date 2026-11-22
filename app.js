function startDiagnosis() {

 const symptom =
 document.getElementById("symptom").value;

 if(symptom === "nostart") {

  document.getElementById("questions").innerHTML = `
    <p>Does it have spark?</p>

    <button onclick="sparkAnswer(true)">
      Yes
    </button>

    <button onclick="sparkAnswer(false)">
      No
    </button>
  `;
 }
}

function sparkAnswer(hasSpark){

 if(!hasSpark){

   document.getElementById("questions").innerHTML =
   "Check ignition module, kill switch, spark plug.";

   return;
 }

 document.getElementById("questions").innerHTML = `
   <p>Compression above 120 PSI?</p>

   <button onclick="compressionAnswer(true)">
   Yes
   </button>

   <button onclick="compressionAnswer(false)">
   No
   </button>
 `;
}

function compressionAnswer(good){

 if(!good){

  document.getElementById("questions").innerHTML =
  "Possible scored cylinder, worn rings, leaking gasket.";

  return;
 }

 document.getElementById("questions").innerHTML =
 "Inspect fuel system, carburetor, and fuel filter.";
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();

  deferredPrompt = e;

  document.getElementById("installBtn").hidden = false;
});

document.getElementById("installBtn").addEventListener("click", async () => {

  document.getElementById("installBtn").hidden = true;

  deferredPrompt.prompt();

  const result = await deferredPrompt.userChoice;

  console.log(result.outcome);

  deferredPrompt = null;
});

function updateConnectionStatus() {
    const status = document.getElementById("connectionStatus");

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

updateConnectionStatus();

function startQRScanner(){

const scanner =
new Html5Qrcode("reader");

scanner.start(
{ facingMode: "environment" },

{
fps:10,
qrbox:250
},

(decodedText)=>{

document.getElementById(
"qrResults"
).innerHTML =
decodedText;

scanner.stop();

},

(error)=>{
console.log(error);
}
);
}

function startVoiceSearch() {

const recognition =
new (window.SpeechRecognition ||
window.webkitSpeechRecognition)();

recognition.lang = "en-US";

recognition.start();

recognition.onresult = function(event) {

const speech =
event.results[0][0].transcript;

document.getElementById("modelSearch").value =
speech.toUpperCase();

lookupModel();
};

}
function runDiagnostic(){

let symptom =
document.getElementById("symptom").value;

let result = "";

switch(symptom){

case "Won't Start":
result =
"Check fuel, spark plug, ignition coil, fuel filter, carburetor.";
break;

case "Hard Starting":
result =
"Inspect fuel lines, carburetor diaphragm, choke operation.";
break;

case "No Spark":
result =
"Check plug, ignition module, kill switch wiring.";
break;

case "Fuel Leak":
result =
"Inspect fuel lines, tank vent, carburetor gaskets.";
break;

case "Bogging":
result =
"Check fuel delivery, carburetor adjustment and exhaust screen.";
break;

case "Overheating":
result =
"Clean cooling fins and inspect fuel mixture.";
break;

case "Poor Idle":
result =
"Inspect idle adjustment and carburetor condition.";
break;

default:
result =
"Select a symptom.";
}

document.getElementById("results").innerHTML =
result;
}

function lookupModel(){

let model =
document.getElementById("modelSearch")
.value
.toUpperCase();

const models = {

"EBZ8560":{
engine:"75.6cc",
fuel:"50:1",
plug:"NGK CMR7H"
},

"EBZ8500":{
engine:"75.6cc",
fuel:"50:1",
plug:"NGK CMR7H"
},

"BCZ260TS":{
engine:"25.4cc",
fuel:"50:1",
plug:"NGK BPMR8Y"
}

};

let output =
models[model]
? JSON.stringify(models[model],null,2)
: "Model not found";

document.getElementById("modelResults")
.innerHTML =
"<pre>" + output + "</pre>";
}

function saveLog(){

const machine =
document.getElementById("machine").value;

const notes =
document.getElementById("repairNotes").value;

let logs =
JSON.parse(
localStorage.getItem("redmaxLogs")
) || [];

logs.push({
date:new Date().toLocaleDateString(),
machine,
notes
});

localStorage.setItem(
"redmaxLogs",
JSON.stringify(logs)
);

showLogs();
}

function showLogs(){

let logs =
JSON.parse(
localStorage.getItem("redmaxLogs")
) || [];

document.getElementById("savedLogs")
.innerHTML =
logs.map(log =>
`<p>
${log.date}<br>
${log.machine}<br>
${log.notes}
</p>`
).join("");
}

showLogs();