var lofi_audio = document.getElementById("lofi");
var lofi = document.getElementById("lofirange");
lofi.addEventListener("input", function aud(){  
    var vol = document.getElementById('lofirange').value;  
    if(vol>0){
        lofi_audio.play();
        document.getElementById("lofival").innerText=vol*100;
    }
    else if(vol==0){
        lofi_audio.pause();
        document.getElementById("lofival").innerText=vol*100;
    } 
    lofi_audio.volume=vol;
});  

var rain_audio = document.getElementById("rain");
var rain = document.getElementById("rainrange");
rain.addEventListener("input", function aud(){  
    var vol = document.getElementById('rainrange').value;  
    if(vol>0){
        rain_audio.play();
        document.getElementById("rainval").innerText=vol*100;
    }
    else if(vol==0){
        rain_audio.pause();
        document.getElementById("rainval").innerText=vol*100;
    } 
    rain_audio.volume=vol;
});  

var cracker_audio = document.getElementById("cracker");
var cracker = document.getElementById("crackerrange");
cracker.addEventListener("input", function aud(){  
    var vol = document.getElementById('crackerrange').value;  
    if(vol>0){
        cracker_audio.play();
        document.getElementById("crackerval").innerText=vol*100;
    }
    else if(vol==0){
        cracker_audio.pause();
        document.getElementById("crackerval").innerText=vol*100;
    } 
    cracker_audio.volume=vol;
});  

var mbf_audio = document.getElementById("mbf");
var mbf = document.getElementById("mbfrange");
mbf.addEventListener("input", function aud(){  
    var vol = document.getElementById('mbfrange').value;  
    if(vol>0){
        mbf_audio.play();
        document.getElementById("mbfval").innerText=vol*100;
    }
    else if(vol==0){
        mbf_audio.pause();
        document.getElementById("mbfval").innerText=vol*100;
    } 
    mbf_audio.volume=vol;
});  

var na_audio = document.getElementById("na");
var na = document.getElementById("narange");
na.addEventListener("input", function aud(){  
    var vol = document.getElementById('narange').value;  
    if(vol>0){
        na_audio.play();
        document.getElementById("naval").innerText=vol*100;
    }
    else if(vol==0){
        na_audio.pause();
        document.getElementById("naval").innerText=vol*100;
    } 
    na_audio.volume=vol;
});  

var na_audio = document.getElementById("na");
var na = document.getElementById("narange");
na.addEventListener("input", function aud(){  
    var vol = document.getElementById('narange').value;  
    if(vol>0){
        na_audio.play();
        document.getElementById("naval").innerText=vol*100;
    }
    else if(vol==0){
        na_audio.pause();
        document.getElementById("naval").innerText=vol*100;
    } 
    na_audio.volume=vol;
});  

var ws_audio = document.getElementById("winter");
var ws = document.getElementById("wsrange");
ws.addEventListener("input", function aud(){  
    var vol = document.getElementById('wsrange').value;  
    if(vol>0){
        ws_audio.play();
        document.getElementById("wsval").innerText=vol*100;
    }
    else if(vol==0){
        ws_audio.pause();
        document.getElementById("wsval").innerText=vol*100;
    } 
    ws_audio.volume=vol;
});  

var cb_audio = document.getElementById("cb");
var cb = document.getElementById("cbrange");
cb.addEventListener("input", function aud(){  
    var vol = document.getElementById('cbrange').value;  
    if(vol>0){
        cb_audio.play();
        document.getElementById("cbval").innerText=vol*100;
    }
    else if(vol==0){
        cb_audio.pause();
        document.getElementById("cbval").innerText=vol*100;
    } 
    cb_audio.volume=vol;
});  

var cb_audio = document.getElementById("cb");
var cb = document.getElementById("cbrange");
cb.addEventListener("input", function aud(){  
    var vol = document.getElementById('cbrange').value;  
    if(vol>0){
        cb_audio.play();
        document.getElementById("cbval").innerText=vol*100;
    }
    else if(vol==0){
        cb_audio.pause();
        document.getElementById("cbval").innerText=vol*100;
    } 
    cb_audio.volume=vol;
});

var rail_audio = document.getElementById("railway");
var rail = document.getElementById("railrange");
rail.addEventListener("input", function aud(){  
    var vol = document.getElementById('railrange').value;  
    if(vol>0){
        rail_audio.play();
        document.getElementById("railval").innerText=vol*100;
    }
    else if(vol==0){
        rail_audio.pause();
        document.getElementById("railval").innerText=vol*100;
    } 
    rail_audio.volume=vol;
});  