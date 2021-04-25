var fname, mob, mail, name1, ad, sw, m, m1, m2, t, t1, t2, msg, l1, l2, l3, da, tn, bg, otp;
let result = '';
function Ready(){
fname = document.getElementById('f_name').value;
mail = document.getElementById('email').value;
mob = document.getElementById('mobile').value;
name1 = mail.substring(0, mail.lastIndexOf("@"));
m = document.getElementById('radio1').value;
m1 = document.getElementById('radio2').value;
m2 = document.getElementById('radio3').value;
t = document.getElementById('radio7').value;
t1 = document.getElementById('radio8').value;
t2 = document.getElementById('radio9').value;
sw = document.getElementById('typeofwork').value;
ft = document.getElementById('mealtype').value;
ad = document.getElementById('add').value;
ad1 = document.getElementById('addre').value;
msg = document.getElementById('msg').value;
l1 = document.getElementById('l').value;
l2 = document.getElementById('m').value;
l3 = document.getElementById('h').value;
da = document.getElementById('doa').value;
tn = document.getElementById('tname').value;
bg = document.getElementById('bgno').value;
dte = document.getElementById('sd').value;
sn = document.getElementById('sname').value;
otp = bkid(6);
}

function bkid(length){
  const characters ='0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) 
  {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
 }

function insertdata(el){
  Ready();
  var e = document.getElementById(el);
  var f = e.options[e.selectedIndex].text;
    if(f === "Maid Services"){
      if(document.getElementById("radio1").checked == true){
        firebase.database().ref('Booking/Maid/'+name1).set({
            Name: fname,
            Mobile: mob,
            Email: mail,
            Time: m,
            Address: ad,
            Work: sw,
            Message: msg
        });
        window.location.replace('../Thank_You/index.html')
    }
    if(document.getElementById("radio2").checked == true){
      firebase.database().ref('Booking/Maid/'+name1).set({
          Name: fname,
          Mobile: mob,
          Email: mail,
          Time: m1,
          Address: ad,
          Work: sw,
          Message: msg
      });
  }
  if(document.getElementById("radio3").checked == true){
    firebase.database().ref('Booking/Maid/'+name1).set({
        Name: fname,
        Mobile: mob,
        Email: mail,
        Time: m2,
        Address: ad,
        Work: sw,
        Message: msg
    });
  }
}
    if(f === "Coolie Services"){
        firebase.database().ref('Booking/Coolie/'+name1).set({
        Name: fname,
        Mobile: mob,
        Email: mail,
        Message: msg,
        LargeBags: l1,
        MediumBags: l2,
        HandBags: l3,
        Arrival: da,
        TrainName: tn,
        BogeyNoBirthNo: bg,
        SName: sn,
        OTP: otp
        });
   
    }
    if(f === "Tiffin Services"){
      if(document.getElementById("radio7").checked == true){
        firebase.database().ref('Booking/Tiffin/'+name1).set({
            Name: fname,
            Mobile: mob,
            Email: mail,
            Time: t,
            Start: dte,
            Address: ad1,
            FoodType: ft,
            Message: msg,
            SName: sn,
            OTP: otp
            
        });
      }
      if(document.getElementById("radio8").checked == true){
        firebase.database().ref('Booking/Tiffin/'+name1).set({
            Name: fname,
            Mobile: mob,
            Email: mail,
            Time: t1,
            Start: dte,
            Address: ad1,
            FoodType: ft,
            Message: msg,
            SName: sn,
            OTP: otp
        });
    }
    if(document.getElementById("radio9").checked == true){
      firebase.database().ref('Booking/Tiffin/'+name1).set({
          Name: fname,
          Mobile: mob,
          Email: mail,
          Time: t2,
          Start: dte,
          Address: ad1,
          FoodType: ft,
          Message: msg
      });
    }
    
     } 
     Thanku();
    
}

function Thanku(){
  setTimeout(() => { window.location.replace("Thank_You/index.html") }, 4000);
  
    
}