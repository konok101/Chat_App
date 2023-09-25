
//get lgin  page

function getInbox(req, res, next) {
    res.render("inbox", {
        title: "users chat Applcation"
    })
}


module.exports = {
    getInbox
}