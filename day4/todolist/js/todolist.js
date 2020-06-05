define(function () {
    function TodoList(opt) {
        Object.assign(this, opt);
        this.init();
    }
    TodoList.prototype = {
        constructor: TodoList,
        init: function () {
            this.bindEvent();
            this.compute();
        },
        bindEvent: function () {
            var that = this;
            this.add.addEventListener("keydown", function (e) {
                if (e.keyCode === 13) {
                    that.header.innerHTML += `
                    <li>
                        <input type="checkbox">
                        <span>${this.value}</span>
                        <b>X</b>
                    </li>
                    `;
                    that.compute();
                }
            })
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "B") {
                    tar.parentNode.remove();
                }

                if (tar.nodeName === "INPUT") {
                    if (tar.checked) {
                        that.bottom.appendChild(tar.parentNode)
                    } else {
                        that.header.appendChild(tar.parentNode)
                    }
                }
                that.compute();
            })

        },
        compute: function () {
            this.headerNum.innerHTML = this.header.children.length;
            this.bottomNum.innerHTML = this.bottom.children.length;
        }
    }
    return TodoList
})