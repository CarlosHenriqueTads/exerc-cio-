/*console.log('helo world');

console.log(Math.max(2, 4));

const nome = prompt("Tell me everything you know.", "...");

console.log('nome')*/

function exercico1(){
   
    var n1 = document.getElementById('ex1-n1');
    var n2 = document.getElementById('ex1-n2');
    document.get
    var retorno = document.getElementById('ex1-return');
    if(Number(n1.value) > Number(n2.value)){
        retorno.innerHTML = `O memor numero é:  ${Number(n2.value)}`;
    }else{
        retorno.innerHTML = `O memor numero é:  ${Number(n1.value)}`
    }
}


/*************
 ************** exercicio 2 */
function exercicio2(){
    //window.alert("teste")
    var n = document.getElementById('ex2-n1');
    var n1 = Number(n.value);
    var retorno = document.getElementById('ex2-return')
    if(n1 < 0){
        n1 = n1*-1;
        while(n1 > 1){
            n1 = n1 - 2;
           // window.alert(' teste wil')
        }
        }else{
            while(n1 > 1){
                n1 = n1 - 2;
               // window.alert(' teste wil')
            }
        }
    if(n1 == 0){
        retorno.innerHTML = 'O numero é par'
    }else{
        retorno.innerHTML = 'O numero é ímpar'
    }
}

/*********** 
 //////////// exercicio 3*/
 function procurandoB(){
    // window.alert('teste chamada');
     var st = window.prompt(' Entre com uma string: ');
     var retorno = document.getElementById('ex3-a-return');
     var j = 0; var i = 0;
   
     while( i < st.length ){
        if( st.charAt(i) == 'B'){
            j++;
           // window.alert('teste for')
        }
        i++
     }
     retorno.innerHTML = `${st} possui ${j}:  B`;
 }

 function escolha(){
    // window.alert('teste chamada');
     var st = window.prompt(' Entre com uma string: ');
     var es = window.prompt(' Escolha o Caracter: ');
     var retorno = document.getElementById('ex3-b-return');
     var j = 0; var i = 0; var c = 0;
   
     while( i < st.length ){
        if( st.charAt(i) == es.charAt(c)){
            j++;
           // window.alert('teste for')
        }
        i++
     }
     retorno.innerHTML = `${st} possui ${j}:  ${es}`;
 }
