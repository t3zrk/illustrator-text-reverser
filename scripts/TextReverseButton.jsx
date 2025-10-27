/**
 * Text Reverse Button for Adobe Illustrator
 * 
 * Description: Reverses the order of paragraphs in a selected text frame
 * Author: t3zrk
 * Version: 1.0.0
 * License: MIT
 * 
 * Usage:
 * 1. Select a text frame with multiple paragraphs
 * 2. Run this script via File > Scripts > TextReverseButton
 * 3. The paragraphs will be reversed in order
 */

// Check if there is an active document
if (app.documents.length > 0) {
  // Get the active document
  var doc = app.activeDocument;

  // Check if there is a selection
  if (doc.selection.length > 0) {
    // Get the selected text
    var selectedText = doc.selection[0];

    // Check if the selected item is a text frame
    if (selectedText.typename === "TextFrame") {
      // Get the content of the text frame
      var originalText = selectedText.contents;

      // Split the text into paragraphs
      var paragraphs = originalText.split("\r");

      // Reverse the order of paragraphs
      var reversedParagraphs = paragraphs.reverse();

      // Join the reversed paragraphs
      var reversedText = reversedParagraphs.join("\r");

      // Set the content of the text frame to the reversed text
      selectedText.contents = reversedText;
      
      // Optional: Show success message
      // alert("Text reversed successfully!");
    } else {
      alert("Please select a text frame.");
    }
  } else {
    alert("Please make a text selection.");
  }
} else {
  alert("No active document found.");
}
