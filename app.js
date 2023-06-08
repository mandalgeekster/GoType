var paragraph = document.querySelector(".one").textContent;   
var x;
var words = paragraph.split(" ");
var b="";   
var index=0;
// console.log(words); 
var i=0,j=0,count=0; 

document.querySelector(".reset").addEventListener("click",function(event){
    i=0;
    j=0;
    count=0;
    index=0;
    b="";
    document.querySelector(".text").value="";
    colorchange("white");
});

document.querySelector(".text").addEventListener("keypress",function(event){
    x=event.key
    check(x);
});

function colorchange(str)
{
    var modifiedContent = "";
    for(var a=0;a<words.length;a++)
    {
        if(index==a)
        {
            var span = document.createElement("span");
            span.style.color = str;
            span.textContent = words[a];
            modifiedContent += span.outerHTML + " ";
        }
        else
        {
            modifiedContent += words[a] + " ";
        }
    }
    // words[i]=modifiedContent;
    document.querySelector(".one").innerHTML = modifiedContent.trim();
}

colorchange("grey");
function check(letter)
{
    if(x==" ")
    {
        
        if(count==words[i].length)
        {
            colorchange("green");
        }   
        
        b="";
        i++;
        index=i;
        colorchange("grey");
        console.log(words);
        j=0;
        count=0;
        }
    else if(x==words[i][j])
    { 
        b+=x;
        j++;
        count++;   
    }
    else
    {
        colorchange("red");
    }
}
