# 📥 Installation Guide

This guide provides detailed instructions for installing the Illustrator Text Reverser script on different operating systems.

## Table of Contents
- [Windows Installation](#windows-installation)
- [macOS Installation](#macos-installation)
- [Troubleshooting](#troubleshooting)
- [Uninstallation](#uninstallation)

---

## Windows Installation

### Step 1: Download the Script

**Option A: Using Git**
```bash
git clone https://github.com/t3zrk/illustrator-text-reverser.git
cd illustrator-text-reverser
```

**Option B: Direct Download**
1. Go to [GitHub Repository](https://github.com/t3zrk/illustrator-text-reverser)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to a location of your choice

### Step 2: Locate Adobe Illustrator Scripts Folder

The default location depends on your Illustrator version:

**Illustrator CC 2025:**
```
C:\Program Files\Adobe\Adobe Illustrator 2025\Presets\en_US\Scripts\
```

**Illustrator CC 2024:**
```
C:\Program Files\Adobe\Adobe Illustrator 2024\Presets\en_US\Scripts\
```

**Illustrator CC 2023:**
```
C:\Program Files\Adobe\Adobe Illustrator 2023\Presets\en_US\Scripts\
```

**For other languages**, replace `en_US` with your language code (e.g., `fr_FR`, `de_DE`, `ja_JP`).

### Step 3: Copy the Script

1. Navigate to the downloaded repository folder
2. Go to the `scripts` folder
3. Copy `TextReverseButton.jsx`
4. Paste it into your Illustrator Scripts folder (see Step 2)

### Step 4: Restart Illustrator

Close and reopen Adobe Illustrator to load the new script.

### Step 5: Access the Script

1. Open any document in Illustrator
2. Go to **File > Scripts**
3. You should see **TextReverseButton** in the menu
4. Click it to run the script

---

## macOS Installation

### Step 1: Download the Script

**Option A: Using Terminal (Git)**
```bash
cd ~/Downloads
git clone https://github.com/t3zrk/illustrator-text-reverser.git
cd illustrator-text-reverser
```

**Option B: Direct Download**
1. Visit [GitHub Repository](https://github.com/t3zrk/illustrator-text-reverser)
2. Click "Code" > "Download ZIP"
3. Extract the ZIP file

### Step 2: Locate Adobe Illustrator Scripts Folder

**Illustrator CC 2025:**
```
/Applications/Adobe Illustrator 2025/Presets/en_US/Scripts/
```

**Illustrator CC 2024:**
```
/Applications/Adobe Illustrator 2024/Presets/en_US/Scripts/
```

**Illustrator CC 2023:**
```
/Applications/Adobe Illustrator 2023/Presets/en_US/Scripts/
```

### Step 3: Copy the Script

**Using Finder:**
1. Open Finder
2. Press `Cmd + Shift + G` to open "Go to Folder"
3. Paste the path from Step 2
4. Drag and drop `TextReverseButton.jsx` from the repository into this folder

**Using Terminal:**
```bash
cp scripts/TextReverseButton.jsx "/Applications/Adobe Illustrator 2025/Presets/en_US/Scripts/"
```
*(Adjust the path for your Illustrator version)*

### Step 4: Restart Illustrator

Quit and relaunch Adobe Illustrator.

### Step 5: Access the Script

1. Open any document
2. Navigate to **File > Scripts**
3. Select **TextReverseButton**

---

## Alternative: Run Without Installing

If you don't want to install the script permanently:

1. Download `TextReverseButton.jsx`
2. In Illustrator, go to **File > Scripts > Other Script...**
3. Browse to and select `TextReverseButton.jsx`
4. The script will run immediately

**Note:** You'll need to repeat this process each time you want to use the script.

---

## Troubleshooting

### Script Doesn't Appear in Menu

**Problem:** The script doesn't show up under File > Scripts

**Solutions:**
1. Verify the file is named exactly `TextReverseButton.jsx`
2. Ensure the file extension is `.jsx` (not `.jsx.txt`)
3. Check that the file is in the correct Scripts folder
4. Restart Illustrator completely
5. Try moving the script to the user scripts folder:
   - **Windows:** `C:\Users\[YourUsername]\AppData\Roaming\Adobe\Adobe Illustrator [Version]\en_US\Scripts\`
   - **macOS:** `~/Library/Application Support/Adobe/Adobe Illustrator [Version]/en_US/Scripts/`

### Permission Denied Error (macOS)

**Problem:** Can't copy files to the Scripts folder

**Solution:**
```bash
sudo cp scripts/TextReverseButton.jsx "/Applications/Adobe Illustrator 2025/Presets/en_US/Scripts/"
```
Enter your password when prompted.

### "Please select a text frame" Alert

**Problem:** Script shows an error even though text is selected

**Solutions:**
1. Make sure you're selecting the text frame itself, not the text inside
2. Use the Selection Tool (V), not the Type Tool (T)
3. Ensure the selected object is actually a text frame

### Script Runs But Nothing Happens

**Problem:** No error messages, but text doesn't reverse

**Solutions:**
1. Check that your text has multiple paragraphs (separated by line breaks)
2. Try pressing Enter/Return between lines to create paragraph breaks
3. Verify the text frame contains more than one paragraph

---

## Uninstallation

To remove the script:

**Windows:**
1. Navigate to the Scripts folder
2. Delete `TextReverseButton.jsx`
3. Restart Illustrator

**macOS:**
```bash
rm "/Applications/Adobe Illustrator 2025/Presets/en_US/Scripts/TextReverseButton.jsx"
```

Or use Finder to delete the file manually.

---

## Need More Help?

- 📖 Check the [README](README.md) for usage instructions
- 🐛 [Report an issue](https://github.com/t3zrk/illustrator-text-reverser/issues) on GitHub
- 💬 [Ask a question](https://github.com/t3zrk/illustrator-text-reverser/discussions) in Discussions

---

**Happy scripting! 🎨**