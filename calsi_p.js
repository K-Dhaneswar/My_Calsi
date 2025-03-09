var output=document.querySelector("p");
var num1='';
var flag=1;
var ops=[];

function nValue(num){
    num1+=num;
    output.innerHTML=num1;
    flag=0;
}
function art_op(sign){
    if(flag==0){
        num1+=sign;
        ops.push(sign);
        output.innerHTML=num1;
    }
    flag=1;
}
function bs_C(bc){
    if(bc=='bs'){
        if(num1[num1.length-1]== ops[ops.length-1]){
            ops.pop();
            flag=0;
        }
        num1=num1.slice(0,-1);
        output.innerHTML=num1;
    }
    else if(bc=='c'){
        num1='';
        output.innerHTML=num1;
        flag=0;
        sol=0;
    }
    if(num1[num1.length-1]==ops[ops.length-1]){
        flag=1;
    }
}
function solution(equal){
        var pos = num1.indexOf(ops[0]) ;
        var sol=parseFloat(num1.slice(0,pos));
        for(var op=0; op < ops.length ;op++){
            if(op+1!=ops.length){
                en_pos = num1.indexOf(ops[op+1]);
            }
            else{
                en_pos=num1.length;
            }
            if(ops[op]=='+'){
            sol= sol +parseFloat(num1.slice(pos+1,en_pos));
            }
            else if(ops[op]=='-'){

                sol= sol - parseFloat(num1.slice(pos+1,en_pos));
            }
            else if(ops[op]=='x'){

                sol= sol * parseFloat(num1.slice(pos+1,en_pos));
            }
            else if(ops[op]=='/'){

                sol=sol / parseFloat(num1.slice(pos+1,en_pos));
            }
            else if(ops[op]=='%'){

                sol= sol % parseFloat(num1.slice(pos+1,en_pos));
            }
            pos=en_pos;
        }
        output.innerHTML=sol;
        num1=sol;
        ops=[];
}