let string = "";
let buttons = document.querySelectorAll('.number')
buttons.forEach((btn) =>{
    btn.addEventListener('click',(no) =>{
        // console.log("i m clicked")
        if(no.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if (no.target.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value = string;

        } else{

             // console.log(no.target)
             string=string + no.target.innerHTML;
             document.querySelector('input').value = string;
    }
           
        })
    })