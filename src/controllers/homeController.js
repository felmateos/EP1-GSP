const renderHome = (req, res, next) => {
    res.render('index', { algo: "oi"});
}

const renderPg1 = (req, res, next) => {
    res.render('pg1', { test: "pg1"});
}

const renderPg3 = (req, res, next) => {
    res.render('pg3', { test: "pg3" });
}

module.exports = {
    renderHome, renderPg1, renderPg3,
}