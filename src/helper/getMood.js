export const MOODS = [
  'catty',
  'sleepy',
  'silly',
  'lovely',
  'awful',
  'hateful',
  'wonderful',
];

export const getMood = (prevMood) => {
  const moodWoPrevMood = MOODS.filter((value) => value !== prevMood);

  return moodWoPrevMood[Math.floor(Math.random() * moodWoPrevMood.length)];
};
