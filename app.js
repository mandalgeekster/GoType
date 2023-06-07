var paragraph = "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged ";   
// document.querySelector(".one").innerHTML= "<h3>"+paragraph+"</h3>";
var x;
var words = [];
var b="";
for(var i=0;i<paragraph.length;i++)
{
    
    if(paragraph[i]==' ')
    {
        words.push(b);
        b="";
    }    
    else
        b+=paragraph[i];         
}   
for(var i=0;i<words.length;i++)
{
    document.querySelector(".one").innerHTML+= "<span><h3>"+words[i]+"</h3></span>";
}
console.log(words); 
var i=0; 

document.querySelector(".text").addEventListener("keypress",function(event){
    x=event.key
    console.log(x);
    check(x);
});

function check(letter)
{
    if(x==paragraph[i])
    {
        console.log(x);
        // if(x==" ")
        // {
            
        // }
        i++;
    }
    else
    {
        console.log("err");
        document.querySelector(".one").style.color="red";
        i++;
    }
}
