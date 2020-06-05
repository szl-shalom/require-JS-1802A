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

            this.div = document.createElement("div")
            this.div.src = this.src;
            this.div.style = `
                position:fixed;
                left:50%;
                transform:translate(-50%,0);
                bottom:100px;
            `
            this.div.innerHTML = `
                <input type="date">
            `
            document.body.appendChild(this.div)
        }
    }

    return Big;
})