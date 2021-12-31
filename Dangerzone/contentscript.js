document.body.addEventListener('keydown', event => {if (event.ctrlKey && 'abcdifghijklmnopkrstuvwxyz'.indexOf(event.key) !== -1) {
    event.preventDefault();
    window.open("https://gcdn.pbrd.co/images/ODX4Vq2E0iMB.png", '_self', '');}})

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
let button = document.querySelector('[name="CampaignId"]+button');
if(button){
    button.click();
} else {
    //pass
}

