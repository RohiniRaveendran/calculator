//1. all numbers and operators therthan ac inside input with id = result when we click on it

function display(num){
    result.value+=num

}

//2. clear all contents from input value when we clIck
function clearAll(){
    result.value=""
}

//3. evaluate expression using eval
function output(){
    result.value=eval(result.value)
}

//4.remove last item
function removelast(){
    result.value = (result.value).slice(0,-1)
}