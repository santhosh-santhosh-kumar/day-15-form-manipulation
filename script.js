var tbody=document.getElementById('tbody')
var div=document.getElementById('tablemain')
var table=document.getElementById('table')
var button=document.getElementById('submit')
var pincodec,fnamec

button.addEventListener('click',show)

function show(){
   var tr1=document.createElement('tr')
   tr1.setAttribute("class","dtr")
        fnamec=body('td','class','td',document.getElementById('first-name').value)
        var lnamec=body('td','class','td',document.getElementById('last-name').value)
        var addressc=body('td','class','td',document.getElementById('address').value)
        pincodec=body('td','class','td',document.getElementById('pincode').value)
        var genderc=body('td','class','td',check1())
        var foodc=body('td','class','td',show1())
        var statec=body('td','class','td',document.getElementById('state').value)
        var countryc=body('td','class','td',document.getElementById('country').value)

    tr1.append(fnamec,lnamec,addressc,pincodec,genderc,foodc,statec,countryc)
    tbody.append(tr1)
    table.append(tbody)
    div.append(table)
document.body.append(div)

function body(tagname,arrtname,arrtvalue,content){
    var td=document.createElement(tagname);
    td.innerHTML=content;       
    td.setAttribute(arrtname,arrtvalue)
    return td;
}
}
 function check1(){
   var q=document.querySelector('input[name="gender"]:checked').value
  
   console.log(q)

   return q;
 }
function show1(){
    var arr=[],count=0
    var s=document.getElementById('parent')
    for(i=0;i<s.options.length;i++){
        if(s.options[i].selected)
        arr[count]=s.options[i].value
    count++;
    }
    let ans=''
    for(var n in arr){
        if(arr[n]!=undefined){
          ans+=arr[n]+"&"
        }
    }
    ans=ans.substring(0,ans.length-1)
   return ans
}
var c=document.getElementById('clear')
c.addEventListener("click",clear);

function clear(){
    document.getElementById('first-name').value='';
    
    document.getElementById('last-name').value='';

    document.getElementById('pincode').value='';

    document.getElementById('state').value='';

    document.getElementById('country').value='';
    
    var b=document.getElementById('address')
          b.value='';

    var z=document.querySelector('input[name="gender"]:checked')
    console.log(z)
    console.log(z.value)
    z.checked='';

    var d=document.getElementById('parent')
         for(t=0;t<d.length;t++){
            d.options[t].selected=false;
       }
}
