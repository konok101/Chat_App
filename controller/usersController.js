
//get lgin  page
 
function  getUsers(req, res, next) {
    res.render("users", {
        title: "users chat Applcation"
    })
}


module.exports = {
    getUsers
}