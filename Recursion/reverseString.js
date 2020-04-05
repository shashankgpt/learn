function reverse(str){
    if(str){
    return str[str.length-1]+reverse(str.slice(0, -1))
    }
    else {
        return "";
    }
}
reverse('abc');