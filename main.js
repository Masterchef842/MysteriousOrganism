// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
const idList=[];
function pAequorFactory(){
  let id= Math.floor(Math.random()*1000)+1;
  while(idList.includes(id)){
    id= Math.floor(Math.random()*1000)+1;
  }
  idList.push(id);

  return {
    specimenNum: id,

    dna: mockUpStrand(),

    mutate(){
      let randIndex=Math.floor(Math.random()*this.dna.length);
      let newBase= returnRandBase();
      while(newBase===this.dna[randIndex]){
        newBase= returnRandBase();
      }
      this.dna[randIndex]=newBase;
      return this.dna;
    },

    compareDNA(dna2){
      let count=0;
      for(let i=0;i<this.dna.length;i++){
        if(this.dna[i]===dna2[i]){
          count++;
        }
      }

      let percent= Math.floor((count/this.dna.length)*100);
      console.log(`specimen #1 and specimen #2 have ${percent}% DNA in common`);
    },

    willLikelySurvive(){
      let count=0;
      for(let i=0; i<this.dna.length; i++){
        if(this.dna[i]==='C'||this.dna[i]==='G'){
          count++;
        }
      }

      if(count/this.dna.length>=0.6){
        return true;
      }
      return false;
    }
  }
}


//creation tests

let t1=pAequorFactory();
let t2=pAequorFactory();
let t3=pAequorFactory();
let t4=pAequorFactory();
let t5=pAequorFactory();

let t6=pAequorFactory();
t6.dna=['C','C','C','G','G','C','C','C','C','C','C','C','C','C','C'];
let t7=pAequorFactory();
t7.dna=['A','A','A','G','G','A','A','A','A','A','A','A','A','A','A'];


//id test
// console.log(t1.specimenNum);
// console.log(t2.specimenNum);
// console.log(t3.specimenNum);
// console.log(t4.specimenNum);
// console.log(t5.specimenNum);


//mutate test
// console.log(t1.dna);
// t1.mutate();
// console.log(t1.dna);
// t1.mutate();
// console.log(t1.dna);
// t1.mutate();
// console.log(t1.dna);
// t1.mutate();
// console.log(t1.dna);

//compare test
// t1.compareDNA(t2.dna);
// t1.mutate();
// t1.compareDNA(t2.dna);


//survival test
// console.log(t6.willLikelySurvive());
// console.log(t7.willLikelySurvive());

function create30(){
  let arr=[]
  while(arr.length<30){
    let organism=pAequorFactory();
    if(organism.willLikelySurvive()){
      arr.push(organism);
    }
  }

  return arr;
}
//create30 test
// let arr30=create30();
// for(let i=0;i< arr30.length;i++){
//   console.log(arr30[i].specimenNum);
//   console.log(arr30[i].willLikelySurvive())
//   if(!arr30[i].willLikelySurvive()){
//     console.error('problem here')
//   }
// }