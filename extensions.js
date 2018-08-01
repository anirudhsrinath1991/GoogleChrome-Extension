var totalCount = 30;
function ChangeIt() 
{
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize  = "cover";
var num = Math.ceil( Math.random() * totalCount );
document.body.background = 'images/'+num+'.jpg';
}
ChangeIt()
