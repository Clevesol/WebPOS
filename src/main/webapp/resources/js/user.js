function editUser(id, fName, lName, role, uName, password) {
	document.getElementById("editId").value = id;
	document.getElementById("editId").disabled = false;
	document.getElementById("editFirstName").value = fName;
	document.getElementById("editFirstName").disabled = false;
	document.getElementById("editLastName").value = lName;
	document.getElementById("editLastName").disabled = false;
	document.getElementById("editRole").value = role;
	document.getElementById("editRole").disabled = false;
	document.getElementById("editUsername").value = uName;
	document.getElementById("editUsername").disabled = false;
	document.getElementById("editPassword").value = password;
	document.getElementById("editPassword").disabled = false;
	$("#editUserForm").attr("action", "editUser");
	$("#editDeleteUserModalHeader").html('Edit user');
	$("#btnEditDeleteUserSubmit").html('Edit');
	$('#editDeleteUserModal').modal('show');
}

function deleteUser(id, fName, lName, role, uName, password) {
	document.getElementById("editId").value = id;
	document.getElementById("editFirstName").value = fName;
	document.getElementById("editFirstName").disabled = true;
	document.getElementById("editLastName").value = lName;
	document.getElementById("editLastName").disabled = true;
	document.getElementById("editRole").value = role;
	document.getElementById("editRole").disabled = true;
	document.getElementById("editUsername").value = uName;
	document.getElementById("editUsername").disabled = true;
	document.getElementById("editPassword").value = password;
	document.getElementById("editPassword").disabled = true;
	$("#editUserForm").attr("action", "deleteUser");
	$("#editDeleteUserModalHeader").html('Delete user');
	$("#btnEditDeleteUserSubmit").html('Delete');
	$('#editDeleteUserModal').modal('show');
}

function deleteProduct(id, pName,quantity, price) {
	document.getElementById("editDeleteId").value = id;
	document.getElementById("editDeleteProductName").value = pName;
	document.getElementById("editDeleteProductName").disabled = true;
	document.getElementById("editDeletePrice").value = price;
	document.getElementById("editDeletePrice").disabled = true;
	document.getElementById("editDeleteQuantity").value = quantity;
	document.getElementById("editDeleteQuantity").disabled = true;
	$("#editDeleteProductForm").attr("action", "deleteProduct");
	$("#editDeleteProductModalHeader").html('Delete Product');
	$("#btnEditDeleteProductSubmit").html('Delete');
	$('#editDeleteProductModal').modal('show');
}

function editProduct(id, pName,quantity, price) {
	document.getElementById("editDeleteId").value = id;
	document.getElementById("editDeleteProductName").value = pName;
	document.getElementById("editDeleteProductName").disabled = false;
	document.getElementById("editDeletePrice").value = price;
	document.getElementById("editDeletePrice").disabled = false;
	document.getElementById("editDeleteQuantity").value = quantity;
	document.getElementById("editDeleteQuantity").disabled = false;
	$("#editDeleteProductForm").attr("action", "editProduct");
	$("#editDeleteProductModalHeader").html('Edit Product');
	$("#btnEditDeleteProductSubmit").html('Edit');
	$('#editDeleteProductModal').modal('show');
}


function calculatePrice(price){
	var a = document.getElementById("quanitity").value;
	document.getElementById("inputPrice").value = price * a;
	
}


function onSelect(p){
	var x = document.getElementById("inputProduct").value;
	$('#quantity').empty().append('<option selected="selected" value="0">0</option>');
	var $select = $('#quantity');
    for (i=1;i<=x.price;i++){
        $select.append($('<option></option>').val(i).html(i))
    }	
    document.getElementById("price").value = p.price;
}
