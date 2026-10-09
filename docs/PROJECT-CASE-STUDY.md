# Project Case Study — Illustrator Text Reverser

## Project summary

**Illustrator Text Reverser** is a small Adobe Illustrator automation utility that reverses the order of paragraphs inside selected text frames.

The project is intentionally focused: it removes a repetitive manual production task without introducing a plugin framework, build system, or external dependency.

## Problem

Design-production files often contain structured copy such as lists, translated text blocks, ordered labels, or paragraph sequences that need to be rearranged.

Doing this manually in Illustrator means repeatedly selecting, cutting, moving, and checking text. The task is simple, but it becomes inefficient when it appears frequently or across multiple text objects.

The original version solved the basic case for one selected text frame. The v2 upgrade expands that idea into a more practical production utility.

## Goal

Create a script that is:

- fast to run from Illustrator
- easy to install
- safe enough for repeated production use
- useful across multiple selected text objects
- understandable to another designer or developer reading the source
- small enough to maintain without a framework

## Constraints

Adobe Illustrator's ExtendScript environment is older than modern browser/Node.js JavaScript environments. That affects language features, runtime behavior, and how text content can be manipulated.

The implementation therefore avoids unnecessary modern syntax and keeps the execution path dependency-free.

## v1 approach

The first version:

1. checked for an active document
2. checked for a selection
3. used the first selected object
4. verified it was a `TextFrame`
5. split its contents by carriage return
6. reversed the paragraph array
7. wrote the result back to the frame

That approach proved the concept but was limited to a single, directly selected text frame.

## v2 approach

The upgraded script separates the workflow into small functions for:

- line-separator detection
- trailing-break preservation
- paragraph reversal
- duplicate-safe text-frame collection
- recursive group traversal
- editability checks
- selected-frame collection
- runtime orchestration and reporting

This makes the code easier to inspect, modify, and extend.

## Selection model

The v2 script supports:

- one selected text frame
- multiple selected text frames
- a selected Illustrator group containing text frames
- nested groups containing text frames

Each text frame is processed independently. Locked or hidden text frames are skipped rather than causing the full batch to fail.

## Text handling

The script reverses **paragraph order**, not character order.

Example:

```text
Headline
Subheadline
CTA
```

becomes:

```text
CTA
Subheadline
Headline
```

It recognizes common CR, LF, and CRLF line endings and retains trailing paragraph breaks after the reversal.

## Error strategy

The script validates the document and selection before doing work.

During batch processing, each frame is isolated inside its own error boundary. A failure on one text frame does not prevent the remaining selected frames from being processed.

For multi-object operations, the script can report:

- total frames processed
- changed frames
- unchanged frames
- skipped frames
- failed frames

## Why no custom panel?

A custom ScriptUI or CEP/UXP panel would add installation and maintenance overhead without improving the core action enough to justify it.

For this task, a single command under Illustrator's **File > Scripts** menu is the more efficient product decision.

## Why this is a useful portfolio project

The project demonstrates more than a one-line text transformation. It shows:

- workflow observation
- identification of repetitive design work
- automation thinking
- Adobe Illustrator scripting
- defensive scripting for production files
- backward-compatible JavaScript decisions
- batch-processing design
- documentation and maintainability
- restraint in product scope

## Current limitations

The script rewrites text-frame contents through Illustrator's scripting API. Complex character-level styling can behave differently depending on the source artwork, so heavily formatted production text should be tested on a copy.

The project deliberately focuses on paragraph-order reversal rather than becoming a general-purpose text transformation panel.

## Future directions

Possible extensions include:

- optional reverse modes for lines, words, or characters
- a dry-run preview
- user-configurable empty-paragraph handling
- formatting-preservation experiments
- UXP-based panel version if the workflow grows beyond a single command
- automated Illustrator integration tests where practical

## Stack

- Adobe Illustrator
- ExtendScript / JSX
- Illustrator Scripting API
- Git / GitHub

## Repository

https://github.com/t3zrk/illustrator-text-reverser
