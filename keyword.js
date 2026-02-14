const A = {
    name: 'Mukunda'
}

A.name = 'Rohit'
console.log(A);

const B = {...A}
B.name = 'Virat';
const C = {...B}
C.name = 'Rahul'
console.log(B);
console.log(C);