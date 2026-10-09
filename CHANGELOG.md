# Changelog

All notable changes to Illustrator Text Reverser are documented here.

## 2.0.0 — 2026-10-10

### Added

- Multi-text-frame processing in a single run.
- Recursive discovery of text frames inside selected groups.
- Locked and hidden frame detection.
- Batch processing summary for changed, unchanged, skipped, and failed items.
- Support for CR, LF, and CRLF line separators.
- Preservation of trailing paragraph breaks.
- Versioned script metadata and clearer runtime messages.
- Portfolio-ready project documentation and case study.

### Changed

- Refactored the original nested conditional script into small, purpose-specific functions.
- Replaced direct `Array.reverse()` usage with an explicit swap loop for predictable ExtendScript compatibility.
- Improved selection validation and error handling.
- Rebuilt the README around the real workflow problem, implementation, installation, architecture, and limitations.

### Notes

- The script still operates by rewriting text-frame contents through Illustrator's scripting API. Complex mixed character-level formatting should be verified on a copy before production use.

## 1.0.0

### Added

- Initial single-text-frame paragraph reversal.
- Basic checks for an open document, selection, and text-frame type.
- Illustrator JSX script installation instructions.
