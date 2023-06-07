var paragraph = document.querySelector(".one").textContent;   
var x;
var words = paragraph.split(" ");
var b="";   
var index=0;
console.log(words); 

var i=0,j=0,count=0; 
document.querySelector(".text").addEventListener("keypress",function(event){
    x=event.key
    console.log(x);
    check(x);
});

function check(letter)
{
    if(x==" ")
    {
        if(count==words[i].length)
        {
            console.log(b);
            var modifiedContent = "";
            for(var a=0;a<words.length;a++)
            {
                if(index==a && words[a]==b)
                {
                    console.log(words[a],b);
                    var span = document.createElement("span");
                    span.style.color = "green";
                    span.textContent = words[a];
                    modifiedContent += span.outerHTML + " ";
                }
                else
                {
                    modifiedContent += words[a] + " ";
                }
            }
            document.querySelector(".one").innerHTML = modifiedContent.trim();
            
        }   
        b="";
        i++;
        index=i;
        j=0;
        count=0;
    }
    else if(x==words[i][j])
    { 
        b+=x;
        console.log(x);
        j++;
        count++;   
    }
    else
    {
        // b+=x;
        var modifiedContent = "";
        for(var a=0;a<words.length;a++)
        {
            if(index==a)
            {
                console.log(words[a],b);
                var span = document.createElement("span");
                span.style.color = "red";
                span.textContent = words[a];
                modifiedContent += span.outerHTML + " ";
            }
            else
            {
                modifiedContent += words[a] + " ";
            }
        }
        document.querySelector(".one").innerHTML = modifiedContent.trim();
    }
}
