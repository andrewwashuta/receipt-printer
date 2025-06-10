export function calculateReadingTime(content: string): number {
  // Average reading speed (words per minute)
  const WORDS_PER_MINUTE = 200;
  
  // Count words by splitting on whitespace and filtering out empty strings
  const wordCount = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  // Calculate reading time in minutes and round up to nearest minute
  const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);
  
  return readingTime;
} 