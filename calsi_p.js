var output=document.querySelector("p") ;
var num1='' ;
function nValue(eq){
    num1+=eq;
    output.innerHTML=num1;
}
function bs_C(bc){
    if(bc=='bs'){
        num1=num1.slice(0,-1);
    }
    else if(bc=='c'){
        num1='';
    }
    output.innerHTML=num1;
}
function solution(equal){
    num1=eval(num1);
    output.innerHTML=num1;
}
/*
tried without eval()
var flag=1 ;

var ops1=[] ;
var ops=[] ;
var hPreP=0,lPreP=0 ;
var high_pre=['x','/','%'] ;

var numValues=[] ;
var count=0,snp=0,enp=0,answer=0 ;

// value process

function nValue(num){
    num1+=num ; 
    output.innerHTML=num1 ;
    flag=0 ;
    count++ ;}

// arthematic operator proccessing

function art_op(sign){
    if(flag==0){
        ops1.push(sign) ;
        num1+=sign ;
        if(high_pre.includes(sign)){
            ops.splice(hPreP,0,sign) ;
            hPreP++ ;
        }
        else {
            ops.splice(lPreP,0,sign) ;
        }
        lPreP++ ;
        flag=1 ;
        enp=count+snp ;
        numValues.push(num1.slice(snp,enp) ) ;
        snp=enp+1 ;
        count=0 ;
        output.innerHTML=num1 ;
    }
}

// backspace and clear

function bs_C(bc){
    if(bc=='bs'){
        /*if(num1[num1.length-1]== ops1[ops1.length-1]){
            ops.splice(ops.lastIndexOf(ops1.pop()),1) ;
            flag=0 ;
        }
        num1=num1.slice(0,-1) ;
        output.innerHTML=num1 ;

    }
    else if(bc=='c'){
        num1='' ;
        output.innerHTML=num1 ;
        flag=1;
        snp=enp=count=hPreP=lPreP=0;
        ops=[];
        ops1=[];
        numValues=[];
        flag=1 ;
    }
    if(num1[num1.length-1]==ops1[ops1.length-1]){
        flag=1 ;
    }
}

//arthematic operation

function solution(equal){
    numValues.push(num1.slice(-count)) ;
    var pos=0;
   // if(ops1.length>1)
    for(var i=0;i<ops.length;i++){
        pos=ops1.indexOf(ops[i]);
        if(ops1[pos]=='x'){
            numValues.splice(pos,2 ,numValues[pos] * numValues[pos+1]);
        }
        else if(ops1[pos]=='/'){
            numValues.splice(pos,2,numValues[pos] / numValues[pos+1]);
        }
        else if(ops1[pos]=='%'){
            numValues.splice(pos,2, numValues[pos] % numValues[pos+1]);
        }
        else if(ops1[pos]=='+'){
            numValues.splice(pos,2 , numValues[pos] - (- numValues[pos+1]));
        }
        else if(ops1[pos]=='-'){
            numValues.splice(pos,2 , numValues[pos] - numValues[pos+1]);
        }
        ops1.splice(pos,1);
        console.log("ops^"+ops1+",oops^"+ops+",nv^"+numValues);
    }
    answer=numValues[0] ;
    bs_C('c');
    flag=0;
    count=answer.toString().length-1;
    nValue(answer);
}*/
/*var output=document.querySelector("p");
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
}*/
