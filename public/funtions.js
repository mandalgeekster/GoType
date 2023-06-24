var paragraph = "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";   
paragraph = paragraph.toLowerCase();
paragraph = paragraph.replace(/[^a-zA-Z0-9 ]/g, '');
var words = paragraph.split(" ");
var b="";   
var index=0;
console.log(words); 
var i=0,j=0,count=0; 
update();
function update()
{       
    const paraelement = document.querySelector(".one");
    paraelement.innerHTML="";
    for(var i=0;i<words.length;i++)
    {
        const span = document.createElement("span");
        span.innerText = words[i] + " ";
        paraelement.appendChild(span);
    }
    document.querySelector(".text").addEventListener("keydown",function(event){
        check(event);
    });
}

document.querySelector(".reset").addEventListener("click",function(event){
    i=0;
    j=0;
    index=0;
    b="";
    document.querySelector(".text").value="";
    const paraelement = document.querySelector(".one");
    paraelement.innerHTML="";
    for(var k=0;k<words.length;k++)
    {
        const span = document.createElement("span");
        span.innerText = words[k] + " ";
        paraelement.appendChild(span);
    }
    const spans = document.getElementsByTagName("span");
    spans[0].classList.add("highlight");
});

function resettextarea()
{
    document.querySelector(".text").value="";
}

const spans = document.getElementsByTagName("span");
spans[0].classList.add("highlight");
function check(x)
{
    count++;   
    if(x.key==" ") 
    {              
        
        if(words[i]==b)
        {
            spans[i].classList.remove("incorrect");
            spans[i].classList.remove("highlight");
            spans[i].classList.add("correct");
            resettextarea();
        }   
        else
        {
            console.log(words[i],b);
            spans[i].classList.remove("highlight");
            spans[i].classList.add("incorrect");
        }
        
        b="";
        i++;
        index=i;
        spans[i].classList.add("highlight");
        j=0;
    }
    else if(x.key === 'Backspace')
    {
        b = b.substring(0,j);
        j--;
    }
    else if(x.keyCode >=65 && x.keyCode<=90 && x.key===words[i][j])
    { 
        b+=x.key;
        j++;          
    }
    else if(x.keyCode >=65 && x.keyCode<=90)
    {
        b+=x.key;
        spans[i].classList.remove("highlight");
        spans[i].classList.add("incorrect");
    }
    if(count==50)
    {
        resettextarea();
        count=0;
    }
}

