var s='ada';
var len=s.length;
var msg='is palindrome'
for(var i=0;i<len/2;i++);{
    if(s[i]!=s[len-1-i]){
        msg='not palindrome'
    }
}console.log(msg)