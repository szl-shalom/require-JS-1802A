define(function () {
    function get(el) {
        return document.querySelector(el)
    }

    function gets(el) {
        return document.querySelectorAll(el)
    }


    return {
        get: get,
        gets: gets,
    }
})