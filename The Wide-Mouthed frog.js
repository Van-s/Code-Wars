// input str name of animal
// output wide or small depending on animal
// alligator -> small else wide
// check if alligator if so return small otherwise return wide

function mouthSize(animal) {
  return animal.toLowerCase() === 'alligator'? 'small': 'wide'
}
