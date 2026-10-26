import test from 'node:test';
import assert from 'node:assert/strict';
import {
  countWords,
  validateUmbrellaMessage,
  validateAboutMeWordCount,
  analyzeSevenCsBaseline,
  getSemesterSummary,
} from './rules';

test('countWords accurately splits text by whitespace', () => {
  assert.equal(countWords(''), 0);
  assert.equal(countWords('   '), 0);
  assert.equal(countWords('Hello world'), 2);
  assert.equal(countWords('  Bridging  strategic vision and audience-centred communication.  '), 6);
});

test('validateUmbrellaMessage enforces 15-word maximum limit', () => {
  const underLimit = 'Bridging strategic vision and audience-centred communication to lead impactful, high-trust business transformations.';
  const res1 = validateUmbrellaMessage(underLimit);
  assert.equal(res1.isValid, true);
  assert.ok(res1.wordCount <= 15);

  const overLimit = 'This is an excessively wordy umbrella message that goes way past the fifteen words limit mandated by the professor in class.';
  const res2 = validateUmbrellaMessage(overLimit);
  assert.equal(res2.isValid, false);
  assert.ok(res2.wordCount > 15);

  const empty = validateUmbrellaMessage('');
  assert.equal(empty.isValid, false);
});

test('validateAboutMeWordCount enforces 150-250 words boundary', () => {
  // Too short (< 150 words)
  const shortText = 'I am an MBA student interested in strategy and marketing. I look forward to working in consulting.';
  const resShort = validateAboutMeWordCount(shortText);
  assert.equal(resShort.isValid, false);
  assert.ok(resShort.wordCount < 150);

  // Valid length (e.g. 180 words)
  const words180 = Array.from({ length: 180 }, (_, i) => `word${i}`).join(' ');
  const resValid = validateAboutMeWordCount(words180);
  assert.equal(resValid.isValid, true);
  assert.equal(resValid.wordCount, 180);

  // Too long (> 250 words)
  const words260 = Array.from({ length: 260 }, (_, i) => `word${i}`).join(' ');
  const resLong = validateAboutMeWordCount(words260);
  assert.equal(resLong.isValid, false);
  assert.equal(resLong.wordCount, 260);
});

test('analyzeSevenCsBaseline calculates conciseness and detects courtesy keywords', () => {
  const sample = 'We sincerely appreciate your time and value collaborative leadership in semester 1.';
  const analysis = analyzeSevenCsBaseline(sample);
  assert.ok(analysis.wordCount > 5);
  assert.equal(analysis.isConcise, true);
  assert.ok(analysis.courtesyWordsDetected.includes('appreciate'));
  assert.ok(analysis.courtesyWordsDetected.includes('value'));
  assert.ok(analysis.concreteSignalsDetected.includes('semester'));
});

test('getSemesterSummary correctly handles completed vs upcoming courses', () => {
  const sem1Courses = [
    { isCompleteOrActive: true },
    { isCompleteOrActive: true },
    { isCompleteOrActive: true },
  ];
  const summary1 = getSemesterSummary(1, sem1Courses);
  assert.equal(summary1.totalCourses, 3);
  assert.equal(summary1.completedOrActiveCourses, 3);
  assert.equal(summary1.isCurrentSemester, true);

  const sem2Courses = [
    { isCompleteOrActive: false },
    { isCompleteOrActive: false },
  ];
  const summary2 = getSemesterSummary(2, sem2Courses);
  assert.equal(summary2.completedOrActiveCourses, 0);
  assert.equal(summary2.isCurrentSemester, false);
});

test('portfolio-data actual content meets assignment rules', async () => {
  const { personalProfile } = await import('./portfolio-data');
  const umbrellaRes = validateUmbrellaMessage(personalProfile.umbrellaMessage);
  assert.equal(umbrellaRes.isValid, true, `Umbrella message failed: ${umbrellaRes.message}`);
  assert.ok(umbrellaRes.wordCount <= 15, `Word count ${umbrellaRes.wordCount} > 15`);

  const aboutRes = validateAboutMeWordCount(personalProfile.aboutMeText);
  assert.equal(aboutRes.isValid, true, `About Me failed: ${aboutRes.message}`);
  assert.ok(aboutRes.wordCount >= 150 && aboutRes.wordCount <= 250);
});

