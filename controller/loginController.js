
//get lgin  page
function getLogin(req, res, next) {
    res.render("index", {
        title: "Login chat Applcation"
    })
}
 

module.exports = {
    getLogin,
 }