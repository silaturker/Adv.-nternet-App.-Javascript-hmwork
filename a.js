function edit(id)
{
  
  var tr = document.getElementById(id);
  var br =  tr.cells[0].innerHTML;
  var nam = tr.cells[1].innerHTML;

  var Brand = document.createElement("input");
  Brand.setAttribute("type", "text");
  Brand.setAttribute("id","brand"+id);
  Brand.setAttribute("value",br);
  tr.cells[0].append(Brand);
  
  var Name = document.createElement("input");
  Name.setAttribute("id","name"+id);
  Name.setAttribute("type", "text");
  Name.setAttribute("value",nam);
  tr.cells[1].append(Name);

}
function add() {
  
   var collection = document.getElementById("bookcollection");
   var tr = document.createElement("tr");
   var id;
   var lastone =collection.rows.length;
   if(lastone==1)
    {
        id=1;
    }
    else
    {
        var lastId = collection.rows[lastone - 1].id; 
        id = parseInt(lastId)+1;
    }
    tr.setAttribute("id", id);

    var td = document.createElement("td");
    td.style.padding="3%";
    td.style.width="15%";
    if(id%2 == 1)
    {
        td.style.backgroundColor="grey";
    }
    var Brand = document.createElement("input");
    Brand.setAttribute("type", "text");
    Brand.setAttribute("id","brand"+id);
    td.append(Brand);
    tr.append(td);

    var td2 = document.createElement("td");
    td2.style.padding="3%";
    td2.style.width="15%";
    if(id%2 == 1)
    {
        td2.style.backgroundColor="#F0F0F0";
    }
    var Name = document.createElement("input");
    Name.setAttribute("id","name"+id);
    Name.setAttribute("type", "text");
    td2.append(Name);
    tr.append(td2);

    var td3 = document.createElement("td");
    td3.style.padding="3%";
    td3.style.width="5%";
    if(id%2 == 1)
    {
        td3.style.backgroundColor="#F0F0F0";
    }
    var Save = document.createElement("button");
    Save.setAttribute("id","button"+id);
    Save.innerHTML = "Save"; 
    Save.setAttribute("onclick", "save(" + id + ")");
    td3.append(Save);
    tr.append(td3);

    var td4 = document.createElement("td");
    td4.style.padding="3%";
    td4.style.width="5%";
    if(id%2 == 1)
    {
        td4.style.backgroundColor="#F0F0F0";
    }
    var Remove = document.createElement("button");
    Remove.innerHTML = "Remove"; 
    Remove.setAttribute("onclick", "remove(" + id + ")");
    td4.append(Remove);
    tr.append(td4);
          
    collection.append(tr);
}

    function save(id)
    {
	  
      var tr = document.getElementById(id);
      var brand= document.getElementById("brand"+id).value;
      var name = document.getElementById("name"+id).value;
      var button = document.getElementById("button"+id);
      tr.cells[0].innerHTML = brand;
      tr.cells[1].innerHTML = name;
      button.setAttribute("onclick", "edit(" + id + ")");
      button.innerHTML = "Edit"; 
      
    }

    function remove(id)
    {
      var tr = document.getElementById(id);
      tr.parentNode.removeChild(tr);
    }

  