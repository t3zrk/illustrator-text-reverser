# Installation Guide

Illustrator Text Reverser is a standalone `.jsx` script. It does not require Node.js, a package manager, or an extension installer.

## Option 1 — Run without installing

This is the fastest way to test the script.

1. Download or clone this repository.
2. Open Adobe Illustrator.
3. Open a document containing at least one text frame.
4. Go to `File > Scripts > Other Script...`.
5. Choose:

```text
scripts/TextReverseButton.jsx
```

The script runs immediately.

## Option 2 — Install in Illustrator's Scripts menu

### 1. Download the repository

Using Git:

```bash
git clone https://github.com/t3zrk/illustrator-text-reverser.git
cd illustrator-text-reverser
```

Or use GitHub's **Code > Download ZIP** option.

### 2. Locate Illustrator's Scripts directory

The exact path varies by Illustrator version, installation location, and language.

Typical Windows path:

```text
C:\Program Files\Adobe\Adobe Illustrator [Version]\Presets\[Language]\Scripts\
```

Typical macOS path:

```text
/Applications/Adobe Illustrator [Version]/Presets/[Language]/Scripts/
```

Examples of language folders include `en_US`, `en_GB`, `de_DE`, and `ja_JP`.

### 3. Copy the script

Copy:

```text
scripts/TextReverseButton.jsx
```

into Illustrator's `Scripts` directory.

Administrator permission may be required if Illustrator is installed inside a protected system directory.

### 4. Restart Illustrator

Illustrator loads installed scripts when the application starts, so fully quit and reopen it after copying the file.

### 5. Run the script

Open a document, select one or more text frames, then choose:

```text
File > Scripts > TextReverseButton
```

You can also select a group containing text frames; v2 will recursively find editable text frames inside the selected group.

## Updating the script

When a newer version is available:

1. Download the latest `scripts/TextReverseButton.jsx`.
2. Replace the installed copy in Illustrator's Scripts directory.
3. Restart Illustrator.

The current script version is shown in the source header and runtime messages.

## Troubleshooting

### The script does not appear under File > Scripts

Check the following:

- The filename is exactly `TextReverseButton.jsx`.
- The file was copied into the correct Illustrator version's `Scripts` directory.
- The file did not become `TextReverseButton.jsx.txt`.
- Illustrator was fully restarted after installation.
- You are checking the `File > Scripts` menu, not an extension/panel menu.

If the menu still does not update, use `File > Scripts > Other Script...` to confirm the JSX file itself can run.

### The script says no text frame is selected

Use Illustrator's **Selection Tool (V)** and select the text frame object itself, or select a group that contains text frames.

Selecting characters with the **Type Tool (T)** is not the intended workflow for this version.

### Some selected text frames are skipped

v2 intentionally skips text frames that are locked or hidden.

Unlock/unhide those objects and run the script again if they should be processed.

### Nothing changes

A frame with only one paragraph has nothing to reverse and is counted as unchanged.

Make sure the text contains at least two paragraphs/lines separated by a line break.

### Complex styling changes unexpectedly

The script rewrites the frame's textual contents through Illustrator's scripting API. For heavily formatted text with mixed character-level styling, test the operation on a duplicate or copy of the artwork before using it in production.

## Uninstall

Delete `TextReverseButton.jsx` from Illustrator's Scripts directory and restart Illustrator.

## Support

- Usage and architecture: [README.md](README.md)
- Version history: [CHANGELOG.md](CHANGELOG.md)
- Project case study: [docs/PROJECT-CASE-STUDY.md](docs/PROJECT-CASE-STUDY.md)
- Issues: https://github.com/t3zrk/illustrator-text-reverser/issues
