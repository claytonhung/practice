// shorter function syntax

const dragonEvents = [
  {type: 'attack', value: 12, target: 'player-dorkman' },
  {type: 'yawn', value: 40 },
  {type: 'eat', target: 'kitty' },
  {type: 'attack', value: 23, target: 'player-fluffs' },
  {type: 'attack', value: 12, target: 'player-dorkman' }
];

// const totalDamangeOnDorkman = dragonEvents
// .filter(function(event) {
//   return event.type === 'attack';
// .filter(function(event) {
//   return event.target === 'player-dorkman';
// }).map(function(event) {
//   return event.value;
// }).reduce(function(prev, value) {
//   return (prev || 0) + value
// });

const totalDamangeOnDorkman = dragonEvents
  .filter(event => event.type === 'attack')
  .filter(event => event.target === 'player-dorkman')
  .map(event => event.value)
  .reduce((prev, value) => (prev || 0) + value);

console.log( 'totalDamangeOnDorkman', totalDamangeOnDorkman)