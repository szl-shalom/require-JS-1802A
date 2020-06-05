define(function () {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Car.prototype = {
        constructor: Car,
        init: function () {
            var that = this;
            this.table.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.className === "check-all") {
                    var ipts = [...that.table.querySelectorAll(".check-one")];
                    ipts.forEach(function (item) {
                        item.checked = tar.checked;
                    })
                } else if (tar.className === "add") {
                    tar.previousElementSibling.innerHTML++;
                    tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                } else if (tar.className === "red") {
                    tar.nextElementSibling.innerHTML--;
                    tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.innerHTML * tar.parentNode.previousElementSibling.innerHTML
                }
            })
        }
    }
    return Car;
})

