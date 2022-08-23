P: h 0->23, m 0-> 59, s 0->59
R: time in milliseconds
E: past(0,1,1),61000
  past(1,1,1),3661000
P: multi h by 60 then add m and multi by 60 then add s and multi by 1000

function past(h, m, s){
  return (((h*60) + m)*60 + s)*1000
}