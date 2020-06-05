define(function () {
    function BigImg(opt) {
        Object.assign(this, opt);
        this.init();
    }

    BigImg.prototype = {
        constructor: BigImg,
        init: function () {
            this.create();
        },
        create: function () {
            this.mask = document.createElement("div");
            this.mask.classList.add("mask");
            document.body.appendChild(this.mask)

            this.content = document.createElement("div");
            this.content.classList.add("content");
            this.content.innerHTML = `
                <b>X</b>
                <img src="${this.src}" alt="">
            `
            document.body.appendChild(this.content);

           


            var b = this.content.querySelector("b"),
                that = this;
            b.addEventListener("click", function () {
                that.mask.remove();
                that.content.remove();
            })

            setTimeout(function () {
                that.content.style.opacity = 1
            }, 0)
        }
    }

    return BigImg;
})