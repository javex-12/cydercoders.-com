# Offline Biology Dictionary

This is a simple, offline biology dictionary application.

## Features

*   Search for biology terms.
*   View definitions.
*   Get suggestions for terms if an exact match is not found.
*   Works completely offline once set up.

## Files

*   `index.html`: The main HTML file for the dictionary interface.
*   `style.css`: Contains the styles for the application.
*   `script.js`: Contains the biology terms, definitions, and the search functionality.

## How to Use Offline

To use this dictionary offline, you need to save the three main files (`index.html`, `style.css`, and `script.js`) to your local computer.

1.  **Download the Files:**
    *   If you have these files in a folder (e.g., from a Git repository or a ZIP file), ensure all three files (`index.html`, `style.css`, `script.js`) are in the **same folder** on your computer.

2.  **Open in Browser:**
    *   Navigate to the folder where you saved the files.
    *   Open the `index.html` file with your web browser (e.g., Chrome, Firefox, Safari, Edge). You can usually do this by double-clicking the `index.html` file, or by right-clicking it and selecting "Open with" and choosing your browser.

3.  **Use the Dictionary:**
    *   The dictionary will load in your browser, and you can start searching for terms. No internet connection is required after this point.

## Adding More Terms

The dictionary terms and definitions are stored directly in the `script.js` file within the `biologyDictionary` JavaScript object.

To add more terms:

1.  **Open `script.js`:** Open the `script.js` file in a plain text editor (like Notepad on Windows, TextEdit on Mac, or code editors like VS Code, Sublime Text, Atom).
2.  **Edit the `biologyDictionary` object:**
    *   The object is a list of key-value pairs, where the `key` is the biology term (e.g., `"cell"`) and the `value` is its definition (e.g., `"The basic structural and functional unit of all living organisms..."`).
    *   Add new entries following this format:
        ```javascript
        const biologyDictionary = {
            "absorption": "Definition of absorption...",
            "acetyl-CoA": "Definition of acetyl-CoA...",
            // ... other existing terms ...
            "new term": "Definition of the new term.", // Add your new term here
            "another new term": "Definition for this other term." // And another one
        };
        ```
    *   Ensure each term (key) is a string in lowercase (the search functionality converts input to lowercase).
    *   Ensure each key-value pair is separated by a comma (`,`), except for the very last entry in the object.
3.  **Save `script.js`:** After making your changes, save the `script.js` file.
4.  **Reload `index.html`:** Refresh or reopen the `index.html` file in your browser to use the updated dictionary.

This application is intentionally simple for easy offline use and modification.
