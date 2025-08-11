export function calculateReadingTime(content: string, excludeCaptions = true): number {
  const WORDS_PER_MINUTE = 200;
  
  let textContent = content;
  
  if (excludeCaptions) {
    // More robust caption removal
    textContent = content
      .replace(/<figcaption[^>]*>.*?<\/figcaption>/gs, '')
      .replace(/alt="[^"]*"/g, '')
      .replace(/title="[^"]*"/g, '')
      .replace(/<a[^>]*class="[^"]*footnote-ref[^"]*"[^>]*>.*?<\/a>/gs, '');
  }
  
  // Remove all HTML tags to get pure text
  textContent = textContent.replace(/<[^>]*>/g, '');
  
  const wordCount = textContent.trim().split(/\s+/).filter(word => word.length > 0).length;
  
  const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);
  
  return readingTime;
} 