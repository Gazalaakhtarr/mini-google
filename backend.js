window.onload=function(){
    var cn=0;
    var q='';
    var tk=new Date()
    var tt=tk.getHours();
    if(tt<=9)
    {
    
    text="Good Morning.";
       pr(text)
    responsiveVoice.speak(text);
    
    }
    else if(tt>11 && tt<=14)
    {
        
        text="Good Noon." ;
        pr(text);
    responsiveVoice.speak(text);
    }
    else if(tt>=14 && tt<=16)
    {
        
        text="Good afternoon." ;
        pr(text);
        responsiveVoice.speak(text);
    }
    else if(tt>=16 && tt<=19)
    {
        
        text="Good evening." ;
        pr(text);
        responsiveVoice.speak(text);
    }
    else if(tt>=19 && tt<=22)
    {
        
        text="Dinner Time" ;
        pr(text);
        responsiveVoice.speak(text);
    }
    else if(tt>=22)
    {
        
        text="Good Night." ;
        pr(text);
        responsiveVoice.speak(text);
    }
    
    }
    
    function ro()
    {
        document.getElementsByTagName("i")[0].style.display="none";
        
        var com=no.value;
        com=com+" ";
        var len=com.length;
    
        var wo=[];
        var w="";var q=0;
        for(var i=0;i<len;i++)
        {
          
            if(com.charAt(i)==" "||com.charAt(i)=="?")
            { 
            
                wo[q]=w;
                
                w="";
                q++;
            }
            else
            {
                  w=w+com.charAt(i);
            }
        }
        var flag=0;
        for(var i=0;i<q;i++)
        {
            
            if(wo[i]==="date" || wo[i]==="Date")
            {
              var today = new Date(); var dd = today.getDate(); 
              var mm = today.getMonth()+1; 
              var yyyy = today.getFullYear(); 
              if(dd<10) 
              { dd = '0'+dd }
              if(mm<10) 
              { mm = '0'+mm } 
              today = dd + '/' + mm + '/' + yyyy; 
            flag=2; document.getElementById('ans').innerHTML="Today's date is " +today;
            text="Today's date is " +today;
            responsiveVoice.speak(text);
        }
         else if(wo[i]==="time" || wo[i]==="Time")
        {
           flag=2;
           var time= new Date();
           var t=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
           document.getElementById('ans').innerHTML="Current Time is " +t;
           text="Current Time is " +t;
           responsiveVoice.speak(text);
        }
        else if(wo[i]==="day" || wo[i]==="Day")
        {
           flag=2;
           var day= new Date();
           var weekday = new Array(7);
           weekday[0] = "Sunday";
           weekday[1] = "Monday";
           weekday[2] = "Tuesday";
           weekday[3] = "Wednesday";
           weekday[4] = "Thursday";
            weekday[5] = "Friday";
            weekday[6] = "Saturday";
          var tday = weekday[day.getDay()];
    document.getElementById('ans').innerHTML="It's " +tday;
           text="It's " +tday;
           responsiveVoice.speak(text);
        }
    else if(wo[i]==="weather" || wo[i]==="Weather"|| wo[i]==="Current Weather")
        {
           flag=2;
          const weather = {};  
      
    weather.temperature = {  
        unit : "celsius"  
    }  
      
    const KELVIN = 273;  
       
      
    const key = "89ef8a05b6c964f4cab9e2f97f696c81";  
      
    if('geolocation' in navigator){  
        navigator.geolocation.getCurrentPosition(setPosition, showError);  
    }else{  
       document.getElementById('ans').innerHTML = "<p>Browser doesn't Support Geolocation</p>";  
    }  
      
    function setPosition(position){  
        let latitude = position.coords.latitude;  
        let longitude = position.coords.longitude;  
          
        getWeather(latitude, longitude);  
    }  
      
    function showError(error){    
       document.getElementById('ans').innerHTML = `<p> ${error.message} </p>`;  
    }  
      
    function getWeather(latitude, longitude){  
        let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;  
          
        fetch(api)  
             .then(function(response){  
                let data = response.json();  
                return data;  
            }) 
    .then(function(data){  
                weather.temperature.value = Math.floor(data.main.temp - KELVIN);  
                weather.city = data.name;  
            })  
    .then(function(){  
                displayWeather();  
            });  
    }  
      
    function displayWeather(){ 
      document.getElementById('ans').innerHTML ="Current Weather in"+"&nbsp;"+weather.city+"&nbsp;"+"is"+"&nbsp;"+weather.temperature.value+"°C";
    text="Current Weather in"+weather.city+"is"+weather.temperature.value+"Degree celsius"
      responsiveVoice.speak(text);
    }
      
        }
                    
    
        else if(wo[i]==="name"||wo[i]==="Name"||wo[i]==="Your name"||wo[i]==="NAME")
        {   
        flag=2; document.getElementById('ans').innerHTML="Hello  my name is Mini Google";
        text="Hello  my name is Mini Google";
        responsiveVoice.speak(text);
        
        }
        else if(wo[i].charAt(0)=='0'||wo[i].charAt(0)=='1'||wo[i].charAt(0)=='2'||wo[i].charAt(0)=='3'||wo[i].charAt(0)=='4'||wo[i].charAt(0)=='5'|| wo[i].charAt(0)=='6'||
    wo[i].charAt(0)=='7'||wo[i].charAt(0)=='8'||wo[i].charAt(0)=='9')
    {
        var l=wo[i].length;
        
        for(var j=0;j<l;j++)
        {
            if(wo[i].charAt(j)=='+'||wo[i].charAt(j)=='-'||wo[i].charAt(j)=='*'||wo[i].charAt(j)=='/'||wo[i].charAt(j)=='%'||
            wo[i].charAt(j)=='^')
            {
                cn=j;
                q=wo[i].charAt(j);
            }
        }
        var fp=wo[i].substring(0,cn);
        var lp=wo[i].substring(cn+1,l);
        switch(q)
        {
            case '+':
            {
                var res=parseFloat(lp)+parseFloat(fp);
                break;
            }
            case '-':
            {
                var res=parseFloat(fp)-parseFloat(lp);
                
                break;
            }
            case '*':
            {
                var res=parseFloat(lp)*parseFloat(fp);
                break;
            }
            case '^':
            {
                var res=parseFloat(fp)^parseFloat(lp);;
                break;
            }
            case '/':
            {
                var res=parseFloat(fp)/parseFloat(lp);
                break;
            }
            case '%':
            {
                var res=parseFloat(fp)%parseFloat(lp);
                break;
            }
            default:
               break;
        }
        document.getElementById('ans').innerHTML="Result :" +res;
        text="Result :" +res;
        responsiveVoice.speak(text);
        flag=2;
        
    }
    else if(wo[i]==="you")
    {
        text="I am fine.  Tell me how can I help you?";
        document.getElementById('ans').innerHTML=text;
        flag=2;
        responsiveVoice.speak(text);
    }
    else if(wo[i]==="morning"||wo[i]==="Morning"||wo[i]==="noon"||wo[i]==="Noon"||wo[i]==="evening"||wo[i]==="Evening"||wo[i]==="Night"||wo[i]==="night"||wo[i]==="afternoon"||wo[i]==="Afternoon")
    {
        text=" Tell me how can I help you?";
        document.getElementById('ans').innerHTML=text;
        flag=2;
        responsiveVoice.speak(text);
    }
    else if(wo[i]==="Hello" || wo[i]==="hello"||wo[i]==="Hi"||wo[i]==="hi"||wo[i]==="hii"||wo[i]==="Hii"||wo[i]==="Hiii"||wo[i]==="hiii")
    {
        text="Hello,How can I help you";
        document.getElementById('ans').innerHTML=text;
        flag=2;
        responsiveVoice.speak(text);
    }
    else if(wo[i]==="GeniusXD" || wo[i]==="GENIUSXD"||wo[i]==="Gazalaakhtarr"||wo[i]==="Gazala Akhtar")
    {
        text="She's my creator,If you want to know more about her tap on linkedin logo in footer below";
        document.getElementById('ans').innerHTML=text;
        flag=2;
        responsiveVoice.speak(text);
    }
        else
        {
             if(flag==0)
             flag=1; 
             
        }
        
    }
    if(flag==1)
    {
        
        var str="http://www.google.com/search?hl=en&source=hp&q=" + com + "&aq=f&oq=&aqi=";
    var replaced=str.replace(" ","+");
    
    window.open(replaced , "_blank");
    }
    
    }
    function pr(txt)
    {
        var word = txt.split("");
    var i = 0;
    var interval = setInterval(writeText, 100 );
    function writeText() {
        var p = document.getElementsByTagName("i")[0];
        if (i < word.length) {
            p.innerHTML += word[i];
            i++;
        } else {
            clearInterval(interval);
             
      
      } 
    }
    }
    console.log = function() {}