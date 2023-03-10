#!/usr/bin/env node
import schemaSync from "./dist/schemaSync"
import { Command } from "commander"
import figlet from "figlet"

/*


 /$$$$$$$                     /$$                   /$$      /$$$$$$                               
| $$__  $$                   | $$                  | $$     /$$__  $$                              
| $$  \ $$ /$$$$$$   /$$$$$$$| $$   /$$  /$$$$$$  /$$$$$$  | $$  \__/ /$$   /$$ /$$$$$$$   /$$$$$$$
| $$$$$$$//$$__  $$ /$$_____/| $$  /$$/ /$$__  $$|_  $$_/  |  $$$$$$ | $$  | $$| $$__  $$ /$$_____/
| $$____/| $$  \ $$| $$      | $$$$$$/ | $$$$$$$$  | $$     \____  $$| $$  | $$| $$  \ $$| $$      
| $$     | $$  | $$| $$      | $$_  $$ | $$_____/  | $$ /$$ /$$  \ $$| $$  | $$| $$  | $$| $$      
| $$     |  $$$$$$/|  $$$$$$$| $$ \  $$|  $$$$$$$  |  $$$$/|  $$$$$$/|  $$$$$$$| $$  | $$|  $$$$$$$
|__/      \______/  \_______/|__/  \__/ \_______/   \___/   \______/  \____  $$|__/  |__/ \_______/
                                                                      /$$  | $$                    
                                                                     |  $$$$$$/                    
                                                                      \______/                     
*/

const program = new Command();
program.description('Pocketsync')
.version('1.1.0')
.requiredOption("-u, -url <value...>", "The urls of the pocketbases you are syncing.")
.requiredOption("-e, -email <value...>", "The email of the pocketbases you are syncing.")
.requiredOption("-p, -password <value...>", "The password of the pocketbases you are syncing.")

program.parse();

console.log(figlet.textSync("PocketSync"));

const options = program.opts();

for (const value in options) {
    if (options[value].length != 2) {
        console.log("Argument:", value, "Doesn't have 2 valid arguments")
        process.exit(0)
    } 
}

schemaSync(options["Email"])