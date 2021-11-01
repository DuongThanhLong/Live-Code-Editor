function run() {
    let htmlCode = document.querySelector(".codeEditor #html-area").value;
    let cssCode = "<style>" + document.querySelector(".codeEditor #css-area").value + "</style>";
    let scriptCode = document.querySelector(".codeEditor #script-area").value;
    let output = document.querySelector(".outputEditor #output-frame");
    output.contentDocument.body.innerHTML = htmlCode + cssCode;
    output.contentWindow.eval(scriptCode);
}
document.querySelector(".codeEditor #html-area").addEventListener("keyup", run);
document.querySelector(".codeEditor #css-area").addEventListener("keyup", run);
document.querySelector(".codeEditor #script-area").addEventListener("keyup", run);