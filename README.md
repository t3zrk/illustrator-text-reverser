# 🔄 Illustrator Text Reverser

[![License: MIT]](https://opensource.org/licenses/MIT)
[![Adobe Illustrator]](https://www.adobe.com/products/illustrator.html)
[![ExtendScript]](https://extendscript.docsforadobe.dev/)

A simple yet powerful Adobe Illustrator script that reverses the order of paragraphs in selected text frames. Perfect for RTL (Right-to-Left) language work, creative text manipulation, or quick text reordering tasks.

## ✨ Features

- 🎯 **One-Click Reversal** - Select text and run the script
- 📝 **Paragraph-Based** - Reverses entire paragraphs, not individual characters
- ⚡ **Fast & Lightweight** - No dependencies, pure ExtendScript
- 🛡️ **Error Handling** - Clear alerts for invalid selections
- 🔧 **Non-Destructive** - Works directly on selected text frames


## 📋 Requirements

- Adobe Illustrator CC 2015 or later
- Any operating system (Windows, macOS)

## 🚀 Installation

### Method 1: Quick Install (Recommended)

1. **Download the script**
```bash
   git clone https://github.com/t3zrk/illustrator-text-reverser.git
```
   Or download the ZIP file and extract it.

2. **Locate your Illustrator Scripts folder**
   - **Windows**: `C:\Program Files\Adobe\Adobe Illustrator [Version]\Presets\en_US\Scripts\`
   - **macOS**: `/Applications/Adobe Illustrator [Version]/Presets/en_US/Scripts/`

3. **Copy the script**
   - Copy `scripts/TextReverseButton.jsx` to the Scripts folder

4. **Restart Adobe Illustrator**

5. **Access the script**
   - Go to `File > Scripts > TextReverseButton`

### Method 2: Run Without Installing

1. Download `TextReverseButton.jsx`
2. In Illustrator, go to `File > Scripts > Other Script...`
3. Navigate to and select `TextReverseButton.jsx`

For detailed installation instructions, see [INSTALLATION.md](INSTALLATION.md)

## 📖 Usage

### Basic Usage

1. **Open a document** in Adobe Illustrator
2. **Create or select a text frame** with multiple paragraphs (separated by line breaks)
3. **Select the text frame** with the Selection Tool (V)
4. **Run the script**: `File > Scripts > TextReverseButton`
5. **Result**: Paragraphs will be reversed in order

### Example

**Before:**
```
First paragraph
Second paragraph
Third paragraph
```

**After running the script:**
```
Third paragraph
Second paragraph
First paragraph
```

## 🎯 Use Cases

- **RTL Language Support** - Reverse text order for Hebrew, Arabic, or other RTL languages
- **Creative Typography** - Experimental text layouts and designs
- **List Reversal** - Quickly reverse ordered lists or sequences
- **Text Manipulation** - Fast paragraph reordering without manual cut/paste

## ⚙️ How It Works

The script operates in four simple steps:

1. **Selection Check** - Verifies a text frame is selected
2. **Text Extraction** - Retrieves the text content
3. **Paragraph Reversal** - Splits text by line breaks (`\r`) and reverses the array
4. **Content Update** - Replaces the original text with reversed paragraphs

## 🛠️ Tech Stack

- **Language**: ExtendScript (JSX)
- **Platform**: Adobe Illustrator Scripting API
- **Version Control**: Git

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
```bash
   git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
   git commit -m "Add amazing feature"
```
4. **Push to the branch**
```bash
   git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Ideas for Contributions

- Add character-level reversal option
- Support for multiple text frame selection
- Undo/Redo functionality
- Preserve text formatting and styles
- GUI panel integration

## 🐛 Known Issues

- Only works with single text frame selections
- Does not preserve text styling after reversal
- Paragraph breaks must be carriage returns (`\r`)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**t3zrk**

- GitHub: [@t3zrk](https://github.com/t3zrk)

## 🙏 Acknowledgments

- Adobe Illustrator Scripting Community
- ExtendScript Documentation

**⭐ If you find this script useful, please consider giving it a star!**

Made with ❤️ for the Adobe Illustrator community

