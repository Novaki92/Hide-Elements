# Hide Elements Extension

A Microsoft Edge extension to hide specific elements on websites. This extension can be customized to hide elements by their class, ID, or other selectors.

## Features
- Automatically hides specified elements on all websites.
- Easy customization using CSS and JavaScript.

## Installation

1. **Download the Extension Files**  
   Download or clone this repository to your local machine.

2. **Load the Extension in Microsoft Edge**
   - Open Microsoft Edge and go to `edge://extensions/`.
   - Enable **Developer mode** in the top-right corner.
   - Click on **Load unpacked** and select the folder where you downloaded the extension files.
   - The extension will now be active and running on all websites.

## Usage

1. **Modify the Elements to Hide**  
   - Open `styles.css` and edit the selectors to target the elements you want to hide. 
   - Example:
     ```css
     .example-class {
         display: none !important;
     }

     #example-id {
         display: none !important;
     }
     ```

2. **JavaScript Customization (Optional)**  
   - If you want to add additional logic for hiding elements, open `content.js` and add JavaScript code to hide elements based on specific conditions.
   - Example:
     ```javascript
     document.querySelectorAll('.example-class').forEach(el => el.style.display = 'none');
     ```

3. **Reload the Extension**
   - After making changes, go to `edge://extensions/` and click **Reload** under this extension to apply the updates.

4. **Test the Extension**
   - Navigate to any website where you want to hide elements.
   - Use Edge’s Developer Tools (`F12`) to inspect the page and verify that the specified elements are hidden.

## Troubleshooting

- **Extension Not Working**: Ensure that you have reloaded the extension after modifying any files.
- **No Elements Hidden**: Double-check your CSS selectors in `styles.css` or JavaScript in `content.js` to make sure they match the structure of the website.
- **No Images Displaying**: If all images are hidden by the template:
  - Check the `styles.css` file for any rules that might be hiding images. Look for selectors that affect images, such as:
    ```css
    img {
        display: none !important;
    }
    ```
  - If such rules exist, either modify or remove them to allow images to display.
  - You can also add an exception in your CSS to specifically show images:
    ```css
    img {
        display: block !important; /* or inline */
    }
    ```
  - After making changes, remember to reload the extension and refresh the webpage to see if images are now visible.
    
## Example Extension

For an example of this extension in action, check out this [example repository](https://github.com/Novaki92/Hide-Elements-Roll20).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
