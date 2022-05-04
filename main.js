

let mS1 = 0;
let mS10 = 0;
let sec1 = 0;
let sec10 = 0;
let mi1 = 0;
let mi10 = 0;
let ho = 0;

function time_change(){
    mS1 ++;

    if(mS1 > 9){
      mS1 = 0;
      mS10 ++
    }

    if(mS10 > 9){
      mS10 = 0;
      sec1 ++
    }

    if(sec1 > 9){
      sec1 = 0;
      sec10 ++
    }

    if(sec10 > 5){
      sec10 = 0;
      mi1 ++
    }

    if(mi1 > 9){
      mi1 = 0;
      mi10 ++
    }

    if(mi10 > 5){
      mi10 = 0;
      ho ++
    }
  

    let mSset1 = document.getElementById("mSset1");
     mSset1.textContent = mS1;

    let mSset10 = document.getElementById("mSset10");
      mSset10.textContent = mS10;

    let secset1 = document.getElementById("secset1");
     secset1.textContent = sec1; 

    let secset10 = document.getElementById("secset10");
     secset10.textContent = sec10; 

    let minset1 = document.getElementById("minset1");
    minset1.textContent = mi1; 

    let minset10 = document.getElementById("minset10");
    minset10.textContent = mi10; 

    let hourset = document.getElementById("hourset");
    hourset.textContent = ho; 

    msec1 = mS1;
    msec10 = mS10;
    seconds1 = sec1;
    seconds10 = sec10;
    minutes1 = mi1;
    minutes10 = mi10;
    hour = ho;
    }




// スタート

function eventStart() {
  intervalid1 = setInterval(time_change, 10);
};

// ストップ
function eventStop(){
  clearInterval(intervalid1);
};

// リセット
function eventReset(){

  mSset1.innerHTML = 0;
  mS1 = 0;
  mS10 = 0;
  sec1 = 0;
  sec10 = 0;
  mi1 = 0;
  mi10 = 0;
  ho = 0;

  mSset10.innerHTML = 0;
  secset1.innerHTML = 0;
  secset10.innerHTML = 0;
  minset1.innerHTML = 0;
  minset10.innerHTML = 0;
  hourset.innerHTML = 0;
}
