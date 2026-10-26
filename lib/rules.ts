/**
 * Pure business communication validation and portfolio utility rules.
 * Decoupled from UI components for unit testing with node:test.
 */

export interface ValidationResult {
  isValid: boolean;
  wordCount: number;
  message: string;
}

/**
 * Counts words cleanly, ignoring extra spaces and punctuation.
 */
export function countWords(text: string): number {
  if (!text || typeof text !== 'string') return 0;
  const trimmed = text.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).filter(Boolean).length;
}

/**
 * Validates the Home page Umbrella Message according to the Message House framework.
 * Rule: Maximum 15 words.
 */
export function validateUmbrellaMessage(message: string): ValidationResult {
  const wordCount = countWords(message);
  if (wordCount === 0) {
    return {
      isValid: false,
      wordCount,
      message: 'Umbrella message cannot be empty.',
    };
  }
  if (wordCount > 15) {
    return {
      isValid: false,
      wordCount,
      message: `Umbrella message must be 15 words or fewer (current: ${wordCount} words).`,
    };
  }
  return {
    isValid: true,
    wordCount,
    message: `Compliant with Message House framework (${wordCount}/15 words).`,
  };
}

/**
 * Validates the About Me profile length.
 * Rule: Must be between 150 and 250 words.
 */
export function validateAboutMeWordCount(profileText: string): ValidationResult {
  const wordCount = countWords(profileText);
  if (wordCount < 150) {
    return {
      isValid: false,
      wordCount,
      message: `Profile is too short: ${wordCount} words (minimum required is 150 words).`,
    };
  }
  if (wordCount > 250) {
    return {
      isValid: false,
      wordCount,
      message: `Profile exceeds maximum limit: ${wordCount} words (maximum allowed is 250 words).`,
    };
  }
  return {
    isValid: true,
    wordCount,
    message: `Within required range (${wordCount} words; target: 150–250 words).`,
  };
}

/**
 * Evaluates text against the 7 Cs of Business Communication.
 */
export interface SevenCsAnalysis {
  wordCount: number;
  sentenceCount: number;
  avgWordsPerSentence: number;
  isConcise: boolean;
  courtesyWordsDetected: string[];
  concreteSignalsDetected: string[];
}

export function analyzeSevenCsBaseline(text: string): SevenCsAnalysis {
  const wordCount = countWords(text);
  const sentences = text
    .split(/[.!?]+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);
  const sentenceCount = sentences.length || 1;
  const avgWordsPerSentence = Math.round((wordCount / sentenceCount) * 10) / 10;

  const courtesyWords = ['thank', 'please', 'appreciate', 'respect', 'value', 'collaborate', 'sincere'];
  const concreteKeywords = ['percent', '%', 'semester', 'module', 'assignment', 'sb5111', 'mba', 'framework', 'data'];

  const lower = text.toLowerCase();
  const courtesyWordsDetected = courtesyWords.filter((w) => lower.includes(w));
  const concreteSignalsDetected = concreteKeywords.filter((w) => lower.includes(w));

  return {
    wordCount,
    sentenceCount,
    avgWordsPerSentence,
    isConcise: avgWordsPerSentence <= 25,
    courtesyWordsDetected,
    concreteSignalsDetected,
  };
}

/**
 * Calculates semester progress and counts.
 */
export interface SemesterSummary {
  semesterNumber: number;
  totalCourses: number;
  completedOrActiveCourses: number;
  isCurrentSemester: boolean;
}

export function getSemesterSummary(
  semesterNumber: number,
  courses: Array<{ isCompleteOrActive: boolean }>
): SemesterSummary {
  const totalCourses = courses.length;
  const completedOrActiveCourses = courses.filter((c) => c.isCompleteOrActive).length;
  return {
    semesterNumber,
    totalCourses,
    completedOrActiveCourses,
    isCurrentSemester: semesterNumber === 1,
  };
}
