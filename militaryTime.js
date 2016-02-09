// Given a string that represents time in hours and minutes, convert the string to military time (if necessary).
function toMilitary (time) {
 if(time.length === 5)return time;
 var length = time.length;
 var tod = time.substring(length-2);
 var mh = time.substring(0, length-2);
 var hm = mh.split(':');
 if(tod === 'pm' && hm[0] !== '12'){
  hm[0] = (parseInt(hm[0])+12).toString();
 }
 else{
  if(hm[0] === '12' && tod === 'am'){
    hm[0] = '00';
  }
  else if(hm[0] !== '12'){
    hm[0] = '0'.concat(hm[0]);
  }
 }
 var mil = hm.join(':');
 return mil
}