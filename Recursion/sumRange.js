function sunRange(n){
    if(n==1) return 1;
    return n + sunRange(n-1);
}
sunRange(10)