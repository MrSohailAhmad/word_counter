import * as readline from "readline-sync";

function countCharacters(paragraph: string): number {
  // Count characters excluding white spaces
  return paragraph.replace(/\s/g, "").length;
}

function countWords(paragraph: string): number {
  // Split the paragraph by spaces and filter out empty strings
  return paragraph.split(/\s+/).filter((word) => word.length > 0).length;
}

function main() {
  const paragraph = readline.question("Enter an English paragraph: ");

  const characterCount = countCharacters(paragraph);
  const wordCount = countWords(paragraph);

  console.log(`Character count (excluding spaces): ${characterCount}`);
  console.log(`Word count: ${wordCount}`);
}

main();
