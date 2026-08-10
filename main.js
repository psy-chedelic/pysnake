var shell = new ActiveXObject("WScript.Shell");
var fso = new ActiveXObject("Scripting.FileSystemObject");
var http = new ActiveXObject("WinHttp.WinHttpRequest.5.1");
var stream = new ActiveXObject("ADODB.Stream");

var url = "https://raw.githubusercontent.com/psy-chedelic/pysnake/refs/heads/main/portable.zip";
var base = fso.GetParentFolderName(WScript.ScriptFullName);
var zipPath = base + "\\portable.zip";
var extractPath = base + "\\package";

http.Open("GET", url, false);
http.Send();

if (http.Status != 200) {
    WScript.Quit(1);
}

stream.Type = 1;
stream.Open();
stream.Write(http.ResponseBody);
stream.SaveToFile(zipPath, 2);
stream.Close();

if (!fso.FileExists(zipPath)) {
    WScript.Quit(1);
}

if (!fso.FolderExists(extractPath)) {
    fso.CreateFolder(extractPath);
}

var psCommand =
    "powershell.exe -NoProfile -Command " +
    "\"Expand-Archive -LiteralPath '" +
    zipPath +
    "' -DestinationPath '" +
    extractPath +
    "' -Force\"";

var result = shell.Run(psCommand, 0, true);

if (result != 0) {
    WScript.Quit(1);
}

if (!fso.FolderExists(extractPath)) {
    WScript.Quit(1);
}

if (fso.FileExists(zipPath)) {
    fso.DeleteFile(zipPath, true);
}

var pythonPath = extractPath + "\\portable\\python.exe";
var scriptPath = extractPath + "\\portable\\pysnake.py";

if (!fso.FileExists(pythonPath)) {
    WScript.Quit(1);
}

if (!fso.FileExists(scriptPath)) {
    WScript.Quit(1);
}

shell.Run(
    "\"" + pythonPath + "\" \"" + scriptPath + "\"",
    1,
    false
);
