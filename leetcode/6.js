// Z 字形变换

var convert = function(s, n) {
    let res='';
    let len=s.length;
    if(n==1) return s;
    for(let i=0;i<n;i++){
        if(i==0 || i==n-1){
           for(let j=i;j<len;j+=2*n-2){
               res+=s.charAt(j);
           }
        }else{
            for(let j=i,k=2*n-2-i;j<len || k<len;j+=2*n-2,k+=2*n-2){
                if(j<len) res+=s.charAt(j);
                if(k<len) res+=s.charAt(k);
            }
        }
    }
    return res;
  };
  