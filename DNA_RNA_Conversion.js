
// "GCAT"  =>  "GCAU"

function DNAtoRNA(dna){
    return [...dna].map(el=>el==='T' ? 'U' : el).join('')
}

const DNAtoRNA = (dna) => dna.replaceAll('T', 'U')