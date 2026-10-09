#target illustrator

/**
 * Illustrator Text Reverser
 * ------------------------------------------------------------
 * Reverses paragraph order inside selected Illustrator text frames.
 *
 * Author: t3zrk
 * Version: 2.0.0
 * License: MIT
 * Repository: https://github.com/t3zrk/illustrator-text-reverser
 *
 * Usage:
 * 1. Select one or more text frames (or groups containing text frames).
 * 2. Run File > Scripts > TextReverseButton.
 * 3. Paragraph order is reversed inside each editable text frame.
 */

(function () {
    var SCRIPT_NAME = "Illustrator Text Reverser";
    var VERSION = "2.0.0";

    function showMessage(message) {
        alert(SCRIPT_NAME + " v" + VERSION + "\n\n" + message);
    }

    function getLineSeparator(text) {
        if (text.indexOf("\r\n") !== -1) {
            return "\r\n";
        }
        if (text.indexOf("\r") !== -1) {
            return "\r";
        }
        return "\n";
    }

    function detachTrailingBreaks(text) {
        var body = text;
        var suffix = "";
        var match;

        while (body.length > 0) {
            match = body.match(/(\r\n|\r|\n)$/);
            if (!match) {
                break;
            }

            suffix = match[1] + suffix;
            body = body.substring(0, body.length - match[1].length);
        }

        return {
            body: body,
            suffix: suffix
        };
    }

    function reverseParagraphOrder(text) {
        if (typeof text !== "string" || text.length === 0) {
            return text;
        }

        var separator = getLineSeparator(text);
        var detached = detachTrailingBreaks(text);
        var body = detached.body;

        if (body.length === 0 || !/(\r\n|\r|\n)/.test(body)) {
            return text;
        }

        var paragraphs = body.split(/\r\n|\r|\n/);
        var i;
        var j;
        var temp;

        for (i = 0, j = paragraphs.length - 1; i < j; i += 1, j -= 1) {
            temp = paragraphs[i];
            paragraphs[i] = paragraphs[j];
            paragraphs[j] = temp;
        }

        return paragraphs.join(separator) + detached.suffix;
    }

    function pushUniqueTextFrame(frame, frames) {
        var i;

        for (i = 0; i < frames.length; i += 1) {
            if (frames[i] === frame) {
                return;
            }
        }

        frames.push(frame);
    }

    function collectTextFrames(item, frames) {
        var i;

        if (!item) {
            return;
        }

        if (item.typename === "TextFrame") {
            pushUniqueTextFrame(item, frames);
            return;
        }

        if (item.typename === "GroupItem") {
            for (i = 0; i < item.pageItems.length; i += 1) {
                collectTextFrames(item.pageItems[i], frames);
            }
        }
    }

    function isEditable(frame) {
        try {
            return !frame.locked && !frame.hidden;
        } catch (error) {
            return false;
        }
    }

    function getSelectedTextFrames(documentRef) {
        var frames = [];
        var selection = documentRef.selection;
        var i;

        if (!selection || selection.length === 0) {
            return frames;
        }

        for (i = 0; i < selection.length; i += 1) {
            collectTextFrames(selection[i], frames);
        }

        return frames;
    }

    function run() {
        if (app.documents.length === 0) {
            showMessage("No document is open. Open an Illustrator document and try again.");
            return;
        }

        var documentRef = app.activeDocument;
        var frames = getSelectedTextFrames(documentRef);

        if (frames.length === 0) {
            showMessage("Select at least one text frame, or a group containing text frames, and run the script again.");
            return;
        }

        var changed = 0;
        var unchanged = 0;
        var skipped = 0;
        var failed = 0;
        var i;

        for (i = 0; i < frames.length; i += 1) {
            var frame = frames[i];

            if (!isEditable(frame)) {
                skipped += 1;
                continue;
            }

            try {
                var originalText = frame.contents;
                var reversedText = reverseParagraphOrder(originalText);

                if (reversedText === originalText) {
                    unchanged += 1;
                    continue;
                }

                frame.contents = reversedText;
                changed += 1;
            } catch (error) {
                failed += 1;
            }
        }

        if (failed > 0 || skipped > 0 || frames.length > 1) {
            var summary =
                "Processed: " + frames.length +
                "\nChanged: " + changed +
                "\nUnchanged: " + unchanged +
                "\nSkipped: " + skipped +
                "\nFailed: " + failed;

            showMessage(summary);
        }
    }

    run();
}());
