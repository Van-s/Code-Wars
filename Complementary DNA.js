// input str
// out str
// turn str to arr loop thru and switch alternate pairs
// ("AAAA") -> "TTTT"
//  ("ATTGC") -> "TAACG"

function DNAStrand(dna){
  let nd = dna.split('')
  for(let i = 0; i < nd.length; i++){
    if( nd[i] === 'A'){
      nd[i] = 'T'
    } else if (nd[i] === 'T'){
      nd[i] = 'A'
    } else if (nd[i] === 'G'){
      nd[i] = 'C'
    } else if (nd[i] === 'C'){
      nd[i] = 'G'
    }
  }
  return nd.join('')
}


// creating a pairs obj thing would have been a better solution and utilizing map as follows

const pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}