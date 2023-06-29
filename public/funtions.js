var paragraph = "lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged";   
paragraph = paragraph.toLowerCase();
paragraph = paragraph.replace(/[^a-zA-Z0-9 ]/g, '');
var words = paragraph.split(" ");
var b="";   
var index=0;
var i=0,j=0,count=0,total=1;
var time=15 , y;
var currenttime=15;


update();

const spans = document.getElementsByTagName("span");
spans[0].classList.add("highlight");
//logic for checkboxes
var checkboxes = document.querySelectorAll('input[name="option"]');
checkboxes.forEach(function(i)
{
    i.addEventListener('change',function(){
        if(this.checked)
        {
            checkboxes.forEach(function(other){
                if(other !== i)
                {
                    other.checked = false;
                }
            });
            if(this.id=="first")
                time=15;
            else if(this.id=="second")
                time=30;
            else if(this.id=="third")
                time=60;  

            console.log("hello");
            currenttime=time;
            clearInterval(y);
            reset();
        }
    });
});


//function for timer
function starttimer()
{
    if(!y)
    {
        y = setInterval(function(){
            document.querySelector(".timer").innerHTML = time;
            time--;
            if(time == -1)
            {
                clearInterval(y);
                var acc = (count/total)*100;
                var wpm ; 
                if(currenttime == 15)
                    wpm = count*4;
                if(currenttime == 30)
                wpm = count*2;
                if(currenttime == 60)
                wpm = count;
                document.querySelector(".timer").innerHTML= "&nbsp;Wpm : "+wpm+"&nbsp; &nbsp; Accuracy : "+acc.toFixed(2)+"%";
            }
        },1000);
    }   
}



 // function to set a given theme/color-scheme
 function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();



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

document.querySelector(".reset").addEventListener("click",reset);
function reset()
{
    i=0;
    j=0;
    index=0;
    b=""; 
    ////////timer reset///////////////
    total=0; count=0; time=currenttime;
    clearInterval(y);
    y=null;
    document.querySelector(".timer").innerHTML = "&nbsp;";
    
    ///////timer reset///////////////

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
};

function resettextarea()
{
    document.querySelector(".text").value="";
}


function check(x)
{
    if(x.key==" ") 
    {              
        total++;
        if(words[i]==b)
        {
            console.log(words[i],b);
            count++;
            spans[i].classList.remove("incorrect");
            spans[i].classList.remove("highlight");
            spans[i].classList.add("correct");
            resettextarea();
        }   
        else
        {
            spans[i].classList.remove("highlight");
            spans[i].classList.add("incorrect");
            resettextarea();
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
    
}

