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