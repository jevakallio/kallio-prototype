'use strict';

function encode(answer) {
  return btoa(answer);
}

module.exports = [
  {
    levelIndex: 0,
    levelName: `Pitkäsilta`,
    levelClue: `Let's start easy. Find the building years of the bridge and do the maths.`,
    levelAnswer: encode('-2, minus two'),
    levelAnswerIsExact: true,
    levelWayHint: 'Look at the ends of the bridge to find a plaque.',
    levelDetailHint: 'The building years of the bridge are numbers. Use the dash as a minus.',
    levelExplanation: `Good job! Pitkäsilta means long bridge. There used to be two bridges here, and the one you see is the longer one of the two, although by today's standards it's quite short.`
  },
  {
    levelIndex: 1,
    levelName: `World Peace`,
    levelClue: `Walk towards an even longer bridge, in the direction of brutal grey monsters. On the way, you'll find a gift from the east. Who is it from?`,
    levelAnswer: encode('moskova, moskva, moscow'),
    levelAnswerIsExact: false,
    levelWayHint: 'Walk around John Stenbergin ranta and then turn right.',
    levelDetailHint: 'Read the plaque on a large statue devoted to world peace, which is in Finnish, Swedish and Russian.',
    levelExplanation: 'Apparently Moscow first wanted to gift Helsinki a statue of Lenin, so mayor Ilaskivi said the world peace statue was a defensive victory'
  },
  {
    levelIndex: 2,
    levelName: `Bazaar`,
    levelClue: `Turn away from this communist monument and head towards a monument to capitalism. Under it, head into the bazaar to spy a knight in shining armor. What other metal man can you see here?`,
    levelAnswer: encode('robot'),
    levelAnswerIsExact: false,
    levelWayHint: `Look for a large McDonald's M across the square.`,
    levelDetailHint: 'In the passage by a shop called Basaari, find a knight in another shop window.',
    levelExplanation: 'Jolly good!'
  },
  {
    levelIndex: 3,
    levelName: `Bronze writer`,
    levelClue: `From a protected fighter, pass unprotected fighters to find a man on the wall. Who was born here?`,
    levelAnswer: encode('waltari'),
    levelAnswerIsExact: false,
    levelWayHint: `Continue through the passage, pass the boxers and continue to the end of the square.`,
    levelDetailHint: `Look for a bronze plaque on the wall at the end of the park. What is the man's name?`,
    levelExplanation: `Waltari's bestselling book, The Egyptian, is so far, the only Finnish novel to be adapted into a Hollywood film`
  },
  {
    levelIndex: 4,
    levelName: `Kauppahalli`,
    levelClue: `Bend around the copper tower, and find two women in the distance. Approach them and answer this: If ASU is EKI, what is EITA?`,
    levelAnswer: encode('ring'),
    levelAnswerIsExact: true,
    levelWayHint: `Head north, and turn right at the lake. Go to the Hakaniemi market hall.`,
    levelDetailHint: 'Look at the letters on the market hall, try to map them to each other.',
    levelExplanation: `This market hall is scheduled for renovation in 2017, something many residents and vendors object to. Have a look inside, and stop for a coffee on the 2nd floor if you'd like.`
  },
  {
    levelIndex: 5,
    levelName: `Viivoan`,
    levelClue: `Passing between bricks, up ahead, you come across a red cock. If longan is 24, what is the dragon?`,
    levelAnswer: encode('9, nine'),
    levelAnswerIsExact: true,
    levelWayHint: `Seek an Asian shop on Hämeentie.`,
    levelDetailHint: `No need to go all the way in, the answer you seek is at the entrance.`,
    levelExplanation: `This is one of many ethnic shops in Hakaniemi, popular with both immigrants and locals. They also sell vegetarian ingredients like tofu and tempeh.`
  },
  {
    levelIndex: 6,
    levelName: `Kaiku`,
    levelClue: `Seek a gold-handed time teller in the distance. Enter the courtyard, and ignore the black mountain. What colour swings more?`,
    levelAnswer: encode('yellow'),
    levelAnswerIsExact: true,
    levelWayHint: `Go up Hämeentie until a clock on a tower. Go into the courtyard of that building.`,
    levelDetailHint: `Look for barrel swings in the courtyard.`,
    levelExplanation: `Kaiku was listed in The Guardian as one of the best clubs in Europe in 2013. The building has been a match stick factory, a big bakery and a factory for Heteka metal spring bed frames.`
  },
  {
    levelIndex: 7,
    levelName: `Statues in the wall`,
    levelClue: `Head back the way you came, to an uphill park. Let dogs guide you past an obelisk and up stairs. Look up! If soldier is 1 and rooster is 4, what is 3?`,
    levelAnswer: encode('owl'),
    levelAnswerIsExact: true,
    levelWayHint: `The park is Alli Tryggin puisto.`,
    levelDetailHint: `Look at the walls of the buildings at the top of the stairs.`,
    levelExplanation: `This is the Kallio gymnasium. The building originally housed the first grammar school (fin: oppikoulu) in the working class quarters north of the pitkäsilta bridge`
  },
  {
    levelIndex: 8,
    levelName: `Library`,
    levelClue: `The owl takes you downhill. Enter under the red roof. With 7 on your left and 8 on your right, head up until you see a small boy. What is he listening to?`,
    levelAnswer: encode('tree'),
    levelAnswerIsExact: false,
    levelWayHint: `Look for the Kallio library.`,
    levelDetailHint: `Go up the stairs and find a small boy. Find the other part of the same art installation.`,
    levelExplanation: `Behind the Listening Tree there's a very cozy space. Take a break if you like, and enjoy the view down over Porthaninkatu.`
  },
  {
    levelIndex: 9,
    levelName: `Bear park cafe`,
    levelClue: `Outside in the green, someone is pawing at an ant nest. Seek shelter in a similarly named cafe. Who here is J5 K5?`,
    levelAnswer: encode('queen'),
    levelAnswerIsExact: false,
    levelWayHint: `Look for the bear in the park.`,
    levelDetailHint: `Go play regal music at a furry indoors cafe.`,
    levelExplanation: `You can enjoy this cozy gay cafe while listening to Queen! Or if the weather allows, visit the sister cafe outside in the park, a traditional functional style Finnish Lippakioski.`
  },
  {
    levelIndex: 10,
    levelName: `Garages`,
    levelClue: `What do James Bond and penicillin have in common? Go there, and turn right at the white amphora. At which number in the old garage stores can you see two elves?`,
    levelAnswer: encode('5, five'),
    levelAnswerIsExact: true,
    levelWayHint: `Go down Fleminginkatu.`,
    levelDetailHint: `Look closely at the garage door windows.`,
    levelExplanation: `These were originally built as garages, but it turned out that the people who bought the apartments there couldn't afford cars, so they became improvised shops instead.`
  },
  {
    levelIndex: 11,
    levelName: `Sand tram`,
    levelClue: `Forge ahead, to cities made in sand. Take a closer look: which tram goes here?`,
    levelAnswer: encode('8, eight'),
    levelAnswerIsExact: true,
    levelWayHint: `These sanded cities are very small. You'll need to go inside the playground.`,
    levelDetailHint: `There are two cities, only one has transport. Find that one, and look at the transport.`,
    levelExplanation: `You're now in the area of Torkkelinmäki. This tiny area has over 30000 inhabitants, making it as densely populated as Manhattan.`
  },
  {
    levelIndex: 12,
    levelName: `Rye cats`,
    levelClue: `CATcher in the RYE,\nvery nearby,\nLess than 100 steps away,\nwhat bottled beverage might they drink?`,
    levelAnswer: encode('limonadi, lemonade'),
    levelAnswerIsExact: true,
    levelWayHint: `Two Franzens away, look into windows.`,
    levelDetailHint: `Find cats of rye and look for a bottle.`,
    levelExplanation: `Our friend Iiris fondly remembers these cats from her childhood, and always wanted to go look at them. Do they bake new ones, or are they still the same old dusty rye bread cats?`
  },
  {
    levelIndex: 13,
    levelName: `Talking gutter`,
    levelClue: `10 steps up, and ears to the ground? But what shall I do?`,
    levelAnswer: encode('leave'),
    levelAnswerIsExact: false,
    levelWayHint: `Go up the hill from the bakery, not very far.`,
    levelDetailHint: `The plumbing here is very odd. Try listening closely to the gutter.`,
    levelExplanation: `This art installation by Markku 'Sika' Puustinen is not always on, but listen closely to the street gutter to hear the sounds of departure announcements at Helsinki airport.`
  },
  {
    levelIndex: 14,
    levelName: `Kotiharju`,
    levelClue: `Via author Jonathan or actor Peter, find a nearby establishment where minds and bodies are soothed. At the entrance, 3 men sit always. The middle one is clad in which colour?`,
    levelAnswer: encode('red'),
    levelAnswerIsExact: true,
    levelWayHint: `Franzenin(kuja+katu). Left on Harjutorinkatu.`,
    levelDetailHint: `Look inside the window of the Kotiharju sauna.`,
    levelExplanation: `The uppermost benches of these saunas can fit 20-30 people. The men's sauna is downstairs, and the women's upstairs. Feel free to stop for a break if you like to join. They also rent out towels, and no clothing is needed.`
  },
  {
    levelIndex: 15,
    levelName: `Game to play`,
    levelClue: `Right on a dictator's street, past the sun, until the end. Don't go the way of the warrior women. But on the way, what game shall we play? One a day keeps the doctor away.`,
    levelAnswer: encode('sex'),
    levelAnswerIsExact: false,
    levelWayHint: `Turn right on Aadolfinkatu, left on Pengerkatu`,
    levelDetailHint: `Look at the signs of the shops on Pengerkatu.`,
    levelExplanation: `There are lots of sex shops and strip joints in Kallio. Not that we particularly recommend this one.`
  },
  {
    levelIndex: 16,
    levelName: `Ebeneser`,
    levelClue: `Left on this city's street. It used to be a lake. Cross at the half moon, and find a girl high up. What is she holding?`,
    levelAnswer: encode('doll'),
    levelAnswerIsExact: false,
    levelWayHint: `Left on Helsinginkatu, look for Scrooge.`,
    levelDetailHint: `Half way up the street lies an old place for what is was to be new. Look up at the reliefs.`,
    levelExplanation: `The Ebeneser Foundation based the first folk kindergarten in the Nordic countries.`
  },
  {
    levelIndex: 17,
    levelName: `Window fruit`,
    levelClue: `Continue until just past split stairs, without crossing. Which fruit is iced in the glass?`,
    levelAnswer: encode('grape'),
    levelAnswerIsExact: false,
    levelWayHint: `Continue up the street. Between 15 and a prime it can be found.`,
    levelDetailHint: `Look at the glass window at Helsinginkatu 13-15`,
    levelExplanation: `This was mostly wet farm land before the street was built. See a photo of it looking like a lake on an electric booth on Harjukatu 2.`
  },
  {
    levelIndex: 18,
    levelName: `Arla`,
    levelClue: `Onwards still, turn left to find a dairy-named hot house. Beyond the holy gate, what time is it?`,
    levelAnswer: encode('13.2, 13:2, 1:2, 1.2, I., I:, one twenty'),
    levelAnswerIsExact: false,
    levelWayHint: `Walk on Helsinginkatu until you turn on Kaarlenkatu.`,
    levelDetailHint: `Look at the courtyard right behind the gate of the sauna. You can look through the holes in the gate to see the answer.`,
    levelExplanation: `In Finland, wet cupping has been done at least since the 15th century, and it is done traditionally in saunas. The cupping cups were made of cattle horns with a valve mechanism in it to create a partial vacuum by sucking the air out. Here at the Arla sauna you can still have cupping performed on you, if you dare.`
  },
  {
    levelIndex: 19,
    levelName: `Kallio church`,
    levelClue: `Through the day you've been seeing a tall tower looming. You know what we mean. Find it now, and go to the side with the longest view, and draw the line all the way south. Where is its starry end?`,
    levelAnswer: encode('observato, tähti'),
    levelAnswerIsExact: false,
    levelWayHint: `From Arla up Kaarle, veer right at a popular second hand store to find the holiest on the cliff.`,
    levelDetailHint: `Trace the road south from the church on a map. Where does the long road end?`,
    levelExplanation: `The street axis you just traced is the longest in all of Helsinki! Go inside the church to see the beautiful altar piece, if it's open. This church is supposed to have the shape of Salomon's Temple, though who the hell knows.`
  },
  {
    levelIndex: 20,
    levelName: `Om'Pu`,
    levelClue: `Nearly there, let's wind down this game. Down you go past Matti Carita Mikko Xavier Xena Vihtori Ilari, and find DJ Worm. Enter. What is the man trying to break through?`,
    levelAnswer: encode('wall'),
    levelAnswerIsExact: false,
    levelWayHint: `Go down the hill, look for Roman numerals to help you find the way. Just a bit further down...`,
    levelDetailHint: `Yes, you need to go inside Om'Pu. It's nearly always open. Look around you well once inside, it's not always easy to spot.`,
    levelExplanation: `Congratulations! Stay for a celebratory beer, why don't you. You'll notice there are often names engraved in the glasses. And the pinball machine is decent too. Just the right Kallio mix of local drunks and hipsters (as if there's a difference.)`
  }
];
