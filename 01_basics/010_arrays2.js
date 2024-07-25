// Slice , Splice

const arr = [1,2,3,4,5]
console.log("A", arr);

const slicearr = arr.slice(1,3)
console.log(slicearr);
console.log("B", arr);

const splicearr = arr.splice(1,3) // change the actual array , includes/works on last parameter
console.log(splicearr);
console.log("c" , arr);