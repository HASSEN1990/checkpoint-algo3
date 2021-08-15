function dotProduct(v1,v2){
    for (let i = 0; i < v1.length; i++) {
        ps=ps +v1[i] * v2[i];
        
    }
    return ps
}
var tab=[[1,0],[-2,3],[3,-2],[0,1]];
for (let i = 0; i < tab.length-1; i++) {
    for (let j =i+1; j < tab.length; j++) {
       if(dotProduct(tab[i],tab[j])==0)
          console.log('vect ${i + 1} et vect ${j +1 } sont orth')
    }
    
}