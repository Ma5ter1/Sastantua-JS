//THIS CHALLENGE WAS BASED ON 42's Piscine C test, I wanted to make a theorectical JS version/port of the infamous Sastantua test many classmates failed around me. Enjoy!
//It Came out kinda rusty how it is drawn in the console, WIP.

function sastantua(size) {
  var height = (size + 1) * (size + 1) / 2;
  var tree = '';

  for (var i = 0; i < height; i++) {
    var levelWidth = ((size + i-1) * 1.1) + (i > 0 ? i * 1 : 0);
    var indent = ' '.repeat((height - i) * 4);
    //tree += indent + ' '.repeat((levelWidth - 1) / 2) + '*'.repeat(levelWidth - (levelWidth - 1) / 2) + ' '.repeat((levelWidth - 1) / 2) + '\n';
    tree += indent + ' '.repeat((levelWidth + 1) / 1.8) + ' '.repeat((levelWidth / 1.3) - 2.2) + '*'.repeat(levelWidth + (levelWidth - 1.8) / 2) + ' '.repeat((levelWidth - 1) / 2) + ' '.repeat((levelWidth - 2) / 4) + '\n';
  }

  return tree;
}

console.log(sastantua(7));









