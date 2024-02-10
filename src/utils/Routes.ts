type CommandsDock = {
    [key: string]: (command: string) => void
};

class Commands {
    routes: CommandsDock;

    constructor() {
        this.routes = {};
    }

    /**
     * Adds a new command and its corresponding callback to the routes.
     *
     * @param {string} command - the command to be added
     * @param {Function} callback - the callback function for the command
     * @return {void} 
     */
    command(command: string, callback: (command: string) => void): void {
        this.routes[command] = callback;
    }
}

export default Commands;