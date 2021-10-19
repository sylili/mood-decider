export const MOODS = [
  'cicás',
  'álmos',
  'nyomi',
  'kedves',
  'fosimosi',
  'utálatos',
  'csodás',
];

export const getMood = (prevMood) => {
  const moodWoPrevMood = MOODS.filter((value) => value !== prevMood);

  return moodWoPrevMood[Math.floor(Math.random() * moodWoPrevMood.length)];
};
