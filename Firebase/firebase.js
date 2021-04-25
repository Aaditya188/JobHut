var fname, mob, mail, name1, sw, m, m1, m2, t, t1, t2, ft, gdm, down, Status = "Free";
function worker(el){ 
    var t2 = document.getElementById('namew').value;
    var sw = document.getElementById('agew').value;
    var ft = document.getElementById('numberw').value;
    var gd = document.getElementById('genderw').value;
    var eid = document.getElementById('emailw').value;
    var name2 = eid.substring(0, eid.lastIndexOf("@"));
    var e = document.getElementById(el);
    var f = e.options[e.selectedIndex].text;
      if(f === "Maid Services"){
      firebase.database().ref('Hiring/Worker/Maid/'+name2).set({
              Name: t2,
              Mobile: ft,
              Age: sw,
              Gender: gd
          });
          window.location.replace()
      }
     if(f === "Coolie Services"){
        firebase.database().ref('Hiring/Worker/Coolie/'+name2).set({
              Name: t2,
              Mobile: ft,
              Age: sw,
              Gender: gd,
              Status: Status
        });
      }
     if(f === "Tiffin Services"){
      firebase.database().ref('Hiring/Worker/Tiffin/'+name2).set({
              Name: t2,
              Mobile: ft,
              Age: sw,
              Gender: gd
        });
      }
      Thanku();
  }

function manager(el){
    upload();
    var e = document.getElementById(el);
    var f = e.options[e.selectedIndex].text;
    var q = document.getElementById('budgetm').value;
    fname = document.getElementById('namem').value;
    mail = document.getElementById('emailm').value;
    mob = document.getElementById('numberm').value;
    gdm = document.getElementById('genderm').value;
    name1 = mail.substring(0, mail.lastIndexOf("@"));
    m = document.getElementById('agem').value;
    m1 = document.getElementById('qualificationm').value;
    m2 = document.getElementById('salarym').value;
    t = document.getElementById('messagem').value;
    if(f === "Maid Services"){
        firebase.database().ref('Hiring/Manager/Maid'+name1).set({
            Name: fname,
            Email: mail,
            Gender: gdm,
            Mobile: mob,
            Age: m,
            Qualifications: q,
            Other_specified_qualification: m1,
            Expected_Salary: m2,
            Message: t
        });
    }
    if(f === "Coolie Services"){
        firebase.database().ref('Hiring/Manager/Coolie/'+name1).set({
          Name: fname,
          Email: mail,
          Gender: gdm,
          Mobile: mob,
          Age: m,
          Qualifications: q,
          Other_specified_qualification: m1,
          Expected_Salary: m2,
          Message: t
       });
    }
    if(f === "Tiffin Services"){
        firebase.database().ref('Hiring/Manager/Tiffin/'+name1).set({
          Name: fname,
          Email: mail,
          Gender: gdm,
          Mobile: mob,
          Age: m,
          Qualifications: q,
          Other_specified_qualification: m1,
          Expected_Salary: m2,
          Message: t
        });
      }
      Thanku();
 }

 function upload() {
  var image=document.getElementById("myFile").files[0];
  mail = document.getElementById('emailm').value;
  name1 = mail.substring(0, mail.lastIndexOf("@"));
  var imageName=name1;
  var storageRef=firebase.storage().ref('ManagerResume/'+imageName);
  var uploadTask=storageRef.put(image);

  uploadTask.on('state_changed',function (snapshot) {
      var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log("Uploading is " + progress +" done");
  },function (error) {
      console.log(error.message);
  },function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
      down =  downlaodURL;
      });
  });
  console.log(down);
}

function Thanku(){

  setTimeout(() => { window.location.replace("../book_worker/Thank_You/index.html") }, 4000);
      
}