'use strict';

function encode(answer) {
  return btoa(answer);
}

module.exports = [
  {
    levelIndex: 0,
    levelExplanation: '',
    levelClue: `Let's start easy. Find the building years of the bridge and do the maths.`,
    levelAnswer: encode('-2'),
    levelAnswerIsExact: true
  },
  {
    levelIndex: 1,
    levelExplanation: '',
    levelClue:`Find an even longer bridge, towards brutal grey monsters. On the way, you'll find a gift from the east. Who is it from?`,
    levelAnswer: encode('Moskova, Moskva, Mokba, Moscow'),
    levelAnswerIsExact: false
  },
  {
    levelIndex: 2,
    levelExplanation: '',
    levelClue: `Turn away from this communist monument and head towards a monument to capitalism. Once there, head into the bazaar to spy a knight in shining armor. What swims near him?`,
    levelAnswer: encode('fish, pike, perch, hauki, kala'),
    levelAnswerIsExact: false
  },
  {
    levelIndex: 3,
    levelExplanation: '',
    levelClue: `From a protected fighter, pass unprotected fighters to find a man on the wall. Who was born here?`,
    levelAnswer: encode('waltari'),
    levelAnswerIsExact: false
  },
  {
    levelIndex: 4,
    levelExplanation: '',
    levelClue: `Bend around the copper tower, and find two women in the distance. If ASU is EKI, what is EITA?`,
    levelAnswer: encode('ring'),
    levelAnswerIsExact: true
  },
];
