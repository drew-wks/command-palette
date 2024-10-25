import { StatusBarAlignment, window } from 'vscode'

export function activate() {

    const statusBar = window.createStatusBarItem(StatusBarAlignment.Right, 0)

    statusBar.text = `Command Palette`

    statusBar.command = `workbench.action.showCommands`

    statusBar.tooltip = `Show Command Palette`

    statusBar.show()

}

export function deactivate() { }
