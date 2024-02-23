var songs = {
    "rickRoll": document.getElementById("rickRoll"),
    "stillAlive": document.getElementById("stillAlive"),
    "summer(tropicala)": document.getElementById("summer(tropicala)")
}
var userVars = {}
var prevCommandsNum = 8
var userVarNames = []
function runCommand(){
    let prevCommandsList = document.getElementById("prevCommands")
    let commandLine = document.getElementById("commandLine")
    let command = commandLine.value
    let commandSeperated = String(command).split("  ")
    commandLine.focus()
    commandLine.value = ""
    prevCommandsNum++
    prevCommandsList.innerHTML += "<li>>>>" + command + "</li>"
    if(commandSeperated[0] === "showCode"){
        
    }else if(commandSeperated[0] === "referenceVar"){
        let variable_sequence = commandSeperated[1].split("=")
        if(userVarNames.indexOf(variable_sequence[1]) !== -1){
            userVarNames.push(variable_sequence[0])
            userVars[variable_sequence[0]] = userVars[variable_sequence[1]]
            prevCommandsList.innerHTML += "<li>Variable: " + variable_sequence[0] + " has been set to the value of " + variable_sequence[1] + "</li>"
            prevCommandsNum++
        }else{
            prevCommandsList.innerHTML+= "<li>ReferenceError: " + variable_sequence[1] + "is undefined at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }
    }else if(commandSeperated[0] === "showCommands"){
        prevCommandsNum++
        prevCommandsList.innerHTML += "<li>Available commands:<ul><li>Variables: to set a variable use: \"var  {your variable name goes here}={your variable value goes here(do NOT use double spaces)}\".</li><li>Display your variable values: type \"displayVar  {variable name here}\".</li><li>Delete a variable: \"deleteVar  {var name}\"</li><li>Set a new variable to the value of another variable: \"referenceVar  {new var name}={other variable name}\"</li><li>Rick Roll:<ul><li>\"rickroll  start\" to start rickroll at beginning</li><li>\"rickroll  pause\" to pause rickroll</li><li>\"rickroll  play\" to play</li><li>\"rickroll  goToBeginning\" to go to beginning without playing(unless it already is)</li><li>\"rickroll  playPosition  {position in seconds(maximum time is 237)}\" to set play position</li><li>Controls:<ul><li>\"rickroll  showControls\" to show controls</li><li>\"rickroll  hideControls\" to hide controls</li></ul><li>\"rickroll  stop\" to stop rickroll</li></li></ul></li>Portal - Still Alive:<ul><li>\"stillAlive  start\" to start stillAlive at beginning</li><li>\"stillAlive  pause\" to pause stillAlive</li><li>\"stillAlive  play\" to play</li><li>\"stillAlive  goToBeginning\" to go to beginning without playing(unless it already is)</li><li>\"stillAlive  playPosition  {position in seconds(maximum time is 176)}\" to set play position</li><li>Controls:<ul><li>\"songs.{song number}  showControls\" to show controls</li><li>\"songs.{song name}  hideControls\" to hide controls</li></ul><li>\"song.{song name}  stop\" to stop song</li></li></ul></li><li>Open/close pages:<ul><li>\"open  {iframe: boolean}  {page URL}\" to open: if the iframe boolean is true, it will open in an iframe. If it is false it will open in a new tab. Look next to the bottom of the iframe, and the number on the left is the iframe number</li><li>\"fullscreenIframe  iframe{iframe number}\" to fullscreen the iframe. DO NOT PUT A SPACE BETWEEN THE WORD \"iframe\" AND THE IFRAME NUMBER</li><li>\"closeIframe  iframe{iframe number}\" to replace the iframe content with the closed iframe screen. DO NOT PUT A SPACE BETWEEN THE WORD \"iframe\" AND THE IFRAME NUMBER</li></ul></li><li>Open Google search page in an iframe: \"google\"</li></ul>DO NOT TYPE THE QUOTES OR BRACKETS! REPACE BRACKESTS WITH THE CORRECT CONTENT!</li>"
    }else if(commandSeperated[0] === "rickroll"){
        let rickroll = document.getElementById("rickRoll")
        if(commandSeperated[1] === "start"){
            rickroll.currentTime = 0
            rickroll.play()
        }else if(commandSeperated[1] === "play"){
            rickroll.play()
        }else if(commandSeperated[1] === "showControls"){
            rickroll.setAttribute("style", "")
        }else if(commandSeperated[1] === "hideControls"){
            rickroll.setAttribute("style", "display:none;")
        }else if(commandSeperated[1] === "pause"){
            rickroll.pause()
        }else if(commandSeperated[1] === "stop"){
            rickroll.pause()
            rickroll.currentTime = 0
        }else if(commandSeperated[1] === "goToBeginning"){
            rickroll.currentTime = 0
        }else if(commandSeperated[1] === "playPosition"){
            rickroll.currentTime = Number(commandSeperated[2])
        }else{
            prevCommandsList.innerHTML += "<li>SyntaxError: rickroll command is invalid at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }
    }else if(commandSeperated[0] === "stillAlive"){
        let stillAlive = document.getElementById("stillAlive")
        if(commandSeperated[1] === "start"){
            stillAlive.currentTime = 0
            stillAlive.play()
        }else if(commandSeperated[1] === "play"){
            stillAlive.play()
        }else if(commandSeperated[1] === "showControls"){
            stillAlive.setAttribute("style", "")
        }else if(commandSeperated[1] === "hideControls"){
            stillAlive.setAttribute("style", "display:none;")
        }else if(commandSeperated[1] === "pause"){
            stillAlive.pause()
        }else if(commandSeperated[1] === "stop"){
            stillAlive.pause()
            stillAlive.currentTime = 0
        }else if(commandSeperated[1] === "goToBeginning"){
            stillAlive.currentTime = 0
        }else if(commandSeperated[1] === "playPosition"){
            stillAlive.currentTime = Number(commandSeperated[2])
        }else{
            prevCommandsList.innerHTML += "<li>SyntaxError: stillAlive command is invalid at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }
    }else if(commandSeperated[0] === "var"){
        let userVarName1 = commandSeperated[1].split("=")
        let userVarName = userVarName1[0]
        userVars[userVarName] = userVarName1[1]
        userVarNames.push(userVarName)
        prevCommandsList.innerHTML += "<li>Variable: " + varName + " was succesfully added</li>"
        prevCommandsNum++
    }else if(commandSeperated[0] === "displayVar"){
        let varName = commandSeperated[1]
        if(userVarNames.indexOf(varName) == -1){
            prevCommandsList.innerHTML += "<li>ReferenceError: " + varName + " is undefined at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }else{
            prevCommandsList.innerHTML += "<li>Variable " + varName + " has the value of: " + String(userVars[varName]) + "</li>"
            prevCommandsNum++
        }
    }else if (commandSeperated[0] === "deleteVar"){
        if(userVarNames.indexOf(commandSeperated[1] !== -1)){
            delete userVars[commandSeperated[1]]
            userVarNames.splice(userVarNames.indexOf(commandSeperated[1]), 1)
            prevCommandsList.innerHTML+= "<li>Successfully deleted variable: " + commandSeperated[1] + "</li>"
            prevCommandsNum++
        }else{
            prevCommandsList.innerHTML+= "<li>ReferenceError: " + commandSeperated[1] + " is undefined at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }
    }else if(commandSeperated[0] === "open"){
        let src = commandSeperated[2]
        if(commandSeperated[1] === "true"){
            prevCommandsNum++
            let listItem = document.createElement("li")
            let iframeToAdd = document.createElement("iframe")
            iframeToAdd.setAttribute("id", String("iframe" + prevCommandsNum))
            iframeToAdd.setAttribute("src", src)
            listItem.appendChild(iframeToAdd)
            prevCommandsList.appendChild(listItem)
        }else if(commandSeperated[1] === "false"){
            window.open(src)
        }else{
            prevCommandsList.innerHTML += "<li>TypeError: expected boolean at ln" + prevCommandsNum + "</li>"
            prevCommandsNum++
        }
    }else if(commandSeperated[0] === "closeIframe"){
        let iframeToClose = commandSeperated[1]
        document.getElementById(iframeToClose).setAttribute("src", "closedIframe.html")
    }else if(commandSeperated[0] === "fullscreenIframe"){
        document.getElementById(commandSeperated[1]).requestFullscreen()
        .then(function() {
            // element has entered fullscreen mode successfully
        })
        .catch(function(error) {
            // element could not enter fullscreen mode
            // error message
            alert(error.message);
        })
    }else if(commandSeperated[0] === "run"){
        let file = commandSeperated[1]
        runFile(file)
    }else if(commandSeperated[0] == "google"){
        prevCommandsNum++
            let listItem = document.createElement("li")
            let iframeToAdd = document.createElement("iframe")
            iframeToAdd.setAttribute("id", String("iframe" + prevCommandsNum))
            iframeToAdd.setAttribute("src", "https://www.google.com/webhp?igu=1")
            listItem.appendChild(iframeToAdd)
            prevCommandsList.appendChild(listItem)
    }else if(commandSeperated[0] === "youtube"){
        let videoId = commandSeperated[1].split("?")[1].split("=")[1]
       prevCommandsNum++
            let listItem = document.createElement("li")
            let iframeToAdd = document.createElement("iframe")
            iframeToAdd.setAttribute("id", String("iframe" + prevCommandsNum))
            iframeToAdd.setAttribute("src", "https://www.youtube.com/embed/" + videoId)
            iframeToAdd.setAttribute("class", "youtube")
            listItem.appendChild(iframeToAdd)
            prevCommandsList.appendChild(listItem) 
    }
    else{
        prevCommandsList.innerHTML += "<li>Error: no such command</li>"
        prevCommandsNum++
    }
}
document.onkeydown = function(){
let commandLine = document.getElementById("commandLine")
if(window.event && window.event.keyCode == 13)
{
  runCommand()
}
};
function runFile(fileName){
    
    if(fileName === "hello.js"){

    }
}