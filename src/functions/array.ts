export const Embaralhar = (initial: any[]) => {
  return initial
    .map((value) => ({ value, randomQuest: Math.random() }))
    .sort((obj1, obj2) => obj1.randomQuest - obj2.randomQuest)
    .map((obj) => obj.value);
};
