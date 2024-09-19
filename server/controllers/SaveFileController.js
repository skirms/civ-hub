const saveFiles = [
  {
    id: 1,
    title: 'Amazing Germany Start',
    description: {
      leader: 'Frederick - Germany',
      difficulty: 'Deity',
      map: 'Pangea',
      size: 'Standard',
      speed: 'Standard',
      mods: 'None',
    },
  },
  {
    id: 2,
    title: 'So many resources',
    description: {
      leader: 'Montezuma - Aztecs',
      difficulty: 'King',
      map: 'Continents',
      size: 'Huge',
      speed: 'Marathon',
      mods: 'Expanded Civilizations mod',
    },
  },
  {
    id: 3,
    title: 'Chilled protected start',
    description: {
      leader: 'Amanitore - Nubia',
      difficulty: 'Emperor',
      map: 'Lakes',
      size: 'Huge',
      speed: 'Standard',
      mods: 'None',
    },
  },
  {
    id: 4,
    title: 'A settler steal on turn 1',
    description: {
      leader: 'Gandhi - India',
      difficulty: 'Deity',
      map: 'Pangea',
      size: 'Small',
      speed: 'Online',
      mods: 'Several mods',
    },
  },
  {
    id: 5,
    title: 'Own island start with the best city states',
    description: {
      leader: 'Gitarja - Indonesia',
      difficulty: 'King',
      map: 'TS East Asia',
      size: 'Huge',
      speed: 'Standard',
      mods: 'None',
    },
  },
  {
    id: 6,
    title: 'Banger start near a natural wonder',
    description: {
      leader: 'Pericles - Greece',
      difficulty: 'Deity',
      map: 'Archipelago',
      size: 'Large',
      speed: 'Epic',
      mods: 'Religion Expanded mod',
    },
  },
];

exports.getSaveFiles = (req, res) => {
  res.status(200).json(saveFiles);
};
