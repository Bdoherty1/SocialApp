const names = [
    'Aaran',
    'Aaren',
    'Aarez',
   
  ];
  
  const appDescriptions = [
    'Decision Tracker',
    'Find My Phone',
  ];
  
  const possibleTags = [
    'html',
    'css',
  ];
  
  const users = [];
  
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  const getRandomApplications = (int) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        published: Math.random() < 0.5,
        description: getRandomArrItem(appDescriptions),
        buildSuccess: Math.random() < 0.5,
        tags: [...getApplicationTags(3)],
      });
    }
    return results;
  };
  
  const getApplicationTags = (int) => {
    if (int === 1) {
      return getRandomArrItem(possibleTags);
    }
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        tagBody: getRandomArrItem(possibleTags),
        username: getRandomName(),
      });
    }
    return results;
  };
  
  module.exports = { getRandomName, getRandomApplications };
  