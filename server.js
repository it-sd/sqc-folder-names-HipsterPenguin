const newFolderName = function (folders) {

    let currentFolderNumber = 0;

    if (folders.length !== 0 && Array.isArray(folders)) {
        for (let i = 0; i < folders.length; i++) {
            if (typeof folders[i] === "string" && folders[i].toLowerCase().includes('new folder')) {
                currentFolderNumber++;
            }
        }

        return `New Folder ` + `(${currentFolderNumber + 1})`;
    }
}

console.log(newFolderName(['New Folder'])); // New Folder (2)
console.log(newFolderName(['New Folder', 'New Folder (2)', 'New Folder (3)', 1, 2, 3])); // New Folder (4)
console.log(newFolderName(["New Folder", "New Folder (2)", "New Folder (3)", "New Folder (4)"])); // New Folder (5)