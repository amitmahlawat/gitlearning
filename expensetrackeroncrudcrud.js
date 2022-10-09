window.addEventListener('DOMContentLoaded', async function () {
    try {

        let res = await axios.get("https://crudcrud.com/api/fdca5c85c5c646c588d223b89481b461/expense")

        for (let i = 0; i < res.data.length; i++) {
            ShowUserOnScreen(res.data[i])
            console.log(res.data[i])
        }
    } catch (err) {
        console.log(err)
    }

})




async function SubmitData(event) {
    try {
        event.preventDefault();
        var Amount = document.getElementById('amount').value
        var Category = document.getElementById('category').value
        var Description = document.getElementById('description').value
        var obj = {
            Amount: Amount,
            Category: Category,
            Description: Description
        }


        document.getElementById("amount").value = '';
        document.getElementById("category").value = '';
        document.getElementById("description").value = '';
        // ShowUserOnScreen(obj)
        let res = await axios.post("https://crudcrud.com/api/fdca5c85c5c646c588d223b89481b461/expense", obj)

        ShowUserOnScreen(res.data)
        console.log(res.data)
    } catch (err) {
        console.log(err)
    }

}







async function ShowUserOnScreen(user) {
    var ParentNode = document.getElementById('Items')
    var ChildNode = `<li id=${user._id}>amount is ${user.Amount} for ${user.Category} in ${user.Description}<button onclick=EditUserDetails('${user.Amount}','${user.Category}','${user.Description}','${user._id}')>Edit</button>
    <button onclick=DeleteUserFromScreen('${user._id}')>Delete</button></li>`

    ParentNode.innerHTML = ParentNode.innerHTML + ChildNode


}

async function EditUserDetails(Amount, Category, Description, userid) {
    document.getElementById('amount').value = Amount
    document.getElementById('category').value = Category
    document.getElementById('description').value = Description
    localStorage.removeItem(userid)
    DeleteUserFromScreen(userid)


}
async function DeleteUserFromScreen(userid) {
    try {
        let res = await axios.delete(`https://crudcrud.com/api/fdca5c85c5c646c588d223b89481b461/expense/${userid}`)
        console.log(res)


        var ParentNode = document.getElementById('Items')
        var ChildNodeToBeDeleted = document.getElementById(userid)

        ParentNode.removeChild(ChildNodeToBeDeleted)

    } catch (err) {
        console.log(err)
    }


}

