import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";
export function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * 
    surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt();

    return randomPrompt;
}

export async function downloadImage(_id, photo, prompt) {
    FileSaver.saveAs(photo, `download-${prompt}.jpg`);
}