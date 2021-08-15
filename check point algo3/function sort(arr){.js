function sort(arr){
    var key
    var j
    for (  i= 0; i < arr.length; i++) {
       key=arr[i] ;
       console.log(` l'element a inserer = ${key}`)
        j=i-1;
        while(j>0 && arr[j]>key){
            arr[j+1]=arr[j]
            j=j-1
            console.log(arr)
            setTimeout(()=>{},2000)
        }
        arr[j+1]=key
        console.log(arr)
        setTimeout(()=>{},2000)
        

    }
    return arr
}
sort([ 5, 1, 7, -1])

function insert (val,arr1){
    var arr=sort(arr1)
   for(let i=0;i<arr.length-1;i++) {
    if(val<arr[i]){
        for(let j=tab.length;j>=i;j--){
            arr[j]=arr[j - i]
            console.log('=====, arr' )
        }
        arr[i]=val
        break
                  }
             }
           console.log(arr)
            }
               insert(3, [ 5, 1, 7, -1])
