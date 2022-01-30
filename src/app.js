let pronoun = ["the", "our"];
let adj = ["great", "big", "awesome"];
let noun = ["jogger", "racoon", "bear"];
let dominio = [".com", ".cl", ".net"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < dominio.length; l++)
        console.log(pronoun[i] + adj[j] + noun[k] + dominio[l]);
    }
  }
}
