// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "insertdatetime" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    var disposable = vscode.commands.registerCommand('extension.insertDateTime', function () {
        // The code you place here will be executed every time your command is executed

        var editor = vscode.window.activeTextEditor;
        var doc = editor.document;
        var selections = editor.selections;

        editor.edit(function (editBuilder) {
            for(var i = 0; i < selections.length; i++){
                var d = new Date;
                var txt = d.toLocaleDateString() + " " + d.toLocaleTimeString();
                editBuilder.replace(selections[i], "");
                editBuilder.insert(selections[i].active, txt);
            }
        });
    });

    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;