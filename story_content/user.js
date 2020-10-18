function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6hzJ4iC7AG1":
        Script1();
        break;
      case "6qhSHOCt7Fa":
        Script2();
        break;
      case "5ux0XLRUAxa":
        Script3();
        break;
      case "5pgcOfpixYE":
        Script4();
        break;
      case "6q8RAzi7EWK":
        Script5();
        break;
      case "5kc88Yi0epI":
        Script6();
        break;
      case "62NyPA5LiUJ":
        Script7();
        break;
      case "5WW7WxO5C84":
        Script8();
        break;
      case "6dcxyJR2Tvs":
        Script9();
        break;
      case "6oR6lc2oZPB":
        Script10();
        break;
      case "5zy4lA5yDVD":
        Script11();
        break;
      case "66Sbj1Q8D6N":
        Script12();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script11()
{
  $("#tab-customlink").show();
}

function Script12()
{
  window.print();
}

