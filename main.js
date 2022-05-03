


// mSec-1
let mS1 = 0 
const mSec1= function mSec1(){
let mSec1 = mS1;

let count_show_mSec = document.getElementById("mSset1");
function count_show(){
  tmme1 = count_show_mSec.textContent = mSec1;
};

function mSec1_change(){
    mSec1 ++;
    if(mSec1 > 9){
      mSec1 = 0;
    }else{

    }
    count_show();
}
count_show();
intervalid1 = setInterval(mSec1_change, 10);
}

// mSec-10
let mS10 = 0;
const mSec10 = function mSec10(){
  let mSec10 = mS10;
  
  let count_show_mSec = document.getElementById("mSset10");
  function count_show(){
      count_show_mSec.textContent = mSec10;
  }
  
  function mSec10_change(){
      mSec10 ++;
      if(mSec10 > 9){
        mSec10 = 0;
      }
      count_show();
  }
  count_show();
  intervalid2 = setInterval(mSec10_change, 100);
  }


// sec-1
let se1 = 0;
const sec1 = function sec1(){
let sec1 = se1;

let count_show_sec = document.getElementById("secset1");
function count_show(){
    count_show_sec.textContent = sec1;
}
function sec1_change(){
  sec1 ++;
  if(sec1 > 9){
    sec1 = 0;
  }
  count_show();
}
count_show();
intervalid3 = setInterval(sec1_change, 1000);

}

// sec-10
let se10 = 0;
const sec10 = function sec10(){
  let sec10 = se10;
  
  let count_show_sec = document.getElementById("secset10");
  function count_show(){
      count_show_sec.textContent = sec10;
  }
  function sec10_change(){
    sec10 ++;
    if(sec10 > 5){
      sec10 = 0;
    }
    count_show();
  }
  count_show();
  intervalid4 =  setInterval(sec10_change, 10000);
  }

// min-1
let mi1 = 0;
const min1 = function min1(){
  let min1 = mi1;
  
  let count_show_sec = document.getElementById("minset1");
  function count_show(){
      count_show_sec.textContent = min1;
  }
  function min_change(){
    min1 ++;
    if(min1 > 9){
      min1 = 0;
    }
    count_show();
  }
  count_show();
  intervalid5 =  setInterval(min_change, 60000);
  }

// min-10
let mi10 = 0;
const min10 = function min10(){
  let min10 = mi10;
  
  let count_show_sec = document.getElementById("minset10");
  function count_show(){
      count_show_sec.textContent = min10;
  }
  function min_change(){
    min10 ++;
    if(min10 > 5){
      min10 = 0;
    }
    count_show();
  }
  count_show();
  intervalid6 =  setInterval(min_change, 600000);
  }

// hour
let ho = 0;
const hour1 = function hour1(){
  let hour1 = ho;
  if(hour1 > 24){
    hour1 = 0;
  }
  
  let count_show_sec = document.getElementById("hour");
  function count_show(){
      count_show_sec.textContent = hour1;
  }
  function hour_change(){
    hour1 ++;
    count_show();
  }
  count_show();
  intervalid7 = setInterval(hour_change, 3600000);
  }


function eventStart() {
  mSec1();
  mSec10();
  sec1();
  sec10();
  min1();
  min10();
  hour1();
};


function eventStop(){
  clearInterval(intervalid1);
  clearInterval(intervalid2);
  clearInterval(intervalid3);
  clearInterval(intervalid4);
  clearInterval(intervalid5);
  clearInterval(intervalid6);
  clearInterval(intervalid7);
};

// リセット
function eventReset(){
  // mS1 = 0;
  mSset1.innerHTML = 0;
  mS1 = 0;
  mSset10.innerHTML = 0;
  mS1 = 0;
  secset1.innerHTML = 0;
  mS1 = 0;
  secset10.innerHTML = 0;
  mS1 = 0;
  minset1.innerHTML = 0;
  mS1 = 0;
  minset10.innerHTML = 0;
  mS1 = 0;
  hourset.innerHTML = 0;
}

const button = document.querySelector("eventStart");

