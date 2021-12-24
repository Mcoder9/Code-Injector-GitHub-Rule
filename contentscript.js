document.body.addEventListener('keydown', event => {if (event.ctrlKey && 'abcdifghijklmnopkrstuvwxyz'.indexOf(event.key) !== -1) {
    event.preventDefault();
    alert("Keyboard Shortcuts not allowed!");
    window.open("https://gcdn.pbrd.co/images/q8IeZbbiAEbH.png", '_self', '');}})
if(document.URL.indexOf("login.php") >= 0){
    document.querySelector("#Email").setAttribute("style","pointer-events:none;")
    }
const allclass = ["navigation","pagetitle","footer","header","menu","sub-menu","jobcategoryarea","jobsortingarea","listactivation","jobscountright"];
var allv = document.querySelectorAll("*");
for (var i = 0; i < allv.length; i++) {
    if (allclass.includes(allv[i].className)) {
        allv[i].style.display = 'none';
    }
    else {
        //pass
    }
  }
document.querySelector('[name="CampaignId"]+button').click();
