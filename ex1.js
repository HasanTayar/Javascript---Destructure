// refactor this to a single line of destructuring...
  const info = {
    title: "Once Upon a Time",   protagonist: {
      name: "Emma Swan",
      enemies: [
        { name: "Regina Mills", title: "Evil Queen" },
        { name: "Cora Mills", title: "Queen of Hearts" },
        { name: "Peter Pan", title: `The boy who wouldn't grow up` },
        { name: "Zelena", title: "The Wicked Witch" },          ],
   },
};


const {title , names} = info
const {protagonist:{enemies: enemyName}}=info
// const title = info.title;
// console.log(enemies[0].name: enemyNames);
const protagonistName = info.protagonist.name;
const enemy = info.protagonist.enemies[3];
const enemyTitle = enemy.title;
console.log(enemyName[0].name);
// const enemyName = enemy.name;