define(function () {
    function Big(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Big.prototype = {
        constructor: Big,
        init: function () {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                left:0;
                top:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
            `
            document.body.appendChild(this.mask);
            this.img = document.createElement("img")
            this.img.src = this.src;
            this.img.style = `
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                width:500px;
                height:500px;
            `
            document.body.append(this.img)
            var that = this;
            this.mask.addEventListener("click", function () {
                that.mask.remove();
                that.img.remove();
            })
        }
    }

    return Big;
})