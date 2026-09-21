export const QUIZ_QUESTIONS = [
  { id: 'level', q: 'What do you want to study abroad?', options: ['Foundation or pathway programme', 'Undergraduate degree', 'Postgraduate degree', 'I am still deciding'] },
  { id: 'subject', q: 'Which area are you most interested in?', options: ['Business, finance or economics', 'STEM, engineering or technology', 'Health, life sciences or medicine', 'Arts, law, humanities or social sciences'] },
  { id: 'destination', q: 'Where would you most like to study?', options: ['United Kingdom or Ireland', 'Canada or the United States', 'Australia or New Zealand', 'Europe, Asia or I am open to advice'] },
  { id: 'intake', q: 'When would you like to begin your studies?', options: ['Within the next 6 months', 'In 6–12 months', 'More than a year from now', 'I need help choosing an intake'] },
  { id: 'funding', q: 'How do you expect to fund your studies?', options: ['Family or personal funds', 'Scholarship or bursary', 'A combination of funding sources', 'I need a realistic budget plan'] },
  { id: 'english', q: 'What is your English-language test status?', options: ['I already have IELTS, TOEFL or equivalent', 'I plan to take a test soon', 'My school qualification may meet the requirement', 'I need advice on the right test'] },
  { id: 'passport', q: 'What is your passport status?', options: ['I have a valid passport', 'I have one but it needs renewal soon', 'I have applied for one', 'I still need to apply'] },
  { id: 'housing', q: 'What accommodation would suit you best?', options: ['University residence', 'Private student accommodation', 'A shared flat or house', 'I need help comparing safe options'] },
] as const

export type IntakeQuestionId = typeof QUIZ_QUESTIONS[number]['id']
export type StudyAbroadAnswers = Partial<Record<IntakeQuestionId, string>>
