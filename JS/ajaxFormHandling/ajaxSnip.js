function fName(id){

	if(id == ""){  // Validation
		alert("Err-msg");
	} else {

      var conf = confirm("Are you Sure? Click OK to confirm."); // Action confirmation
			if (conf != true) {
				return false;
			}

		_("addtocart"+id).innerHTML = 'Please wait ...';
        _("addtocart"+id).disabled = true;
        
        
		var ajax = ajaxObj("POST", "parser/php_parser.php"); // ajax starts
        ajax.onreadystatechange = function() {
	        if(ajaxReturn(ajax) == true) {
	            if(ajax.responseText == "doesntexists"){
					alert("You do not have this item in your cart anymore.")
				}
                else if(ajax.responseText == "notLoggedIn") {
					$("#myModal").modal();
				}
                else if(ajax.responseText == "removed") {
                    location.reload();
				}
	        }
        }
        ajax.send("someVariable=1&id="+id); // ajax ends
	}
}
