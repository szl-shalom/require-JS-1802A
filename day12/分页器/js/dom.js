define(function () {
    return {
        get: function (el) {
            return document.querySelector(el)
        },
        gets: function () {
            return document.querySelectorAll(el)
        }
    }
})