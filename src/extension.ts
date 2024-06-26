// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import * as mustache from 'mustache';
import { getWebviewContent } from './tools';
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand('imi-tools.newModule', async (uri: vscode.Uri) => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    /* const selectedPath = uri.fsPath;
    const newFileName = await vscode.window.showInputBox({
      placeHolder: '请输入sigi 模块名称',
      prompt: '请输入sigi 模块名称',
      ignoreFocusOut: true,
      value: 'index.module.ts',
      validateInput: (value: string) => {
        if (value.length === 0) {
          return '请输入sigi 模块名称';
        }
        return null;
      },
    });
    const newFilePath = path.join(selectedPath, newFileName!);
    if (fs.existsSync(newFilePath)) {
      vscode.window.showErrorMessage('文件已存在');
      return;
    }
    fs.writeFileSync(newFilePath, '');
    const newFileUri = vscode.Uri.file(newFilePath);
    const document = await vscode.workspace.openTextDocument(newFileUri);
    await vscode.window.showTextDocument(document); */
    const panel = vscode.window.createWebviewPanel(
      'exampleWebview', // 标识符
      'Example WebView', // 面板标题
      vscode.ViewColumn.One, // 显示在编辑器的第一列
      {
        enableScripts: true, // 启用 JavaScript
      }
    );
    const webview = getWebviewContent();
    console.log('Congratulations, your extension "imi-tools" is now active',webview.default);
    // 设置 WebView 的 HTML 内容
    panel.webview.html = webview;
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
