module.exports = function () {
    return {
        //只有第一个参数prop时，修改的是component的属性，有三个参数时修改的是component下的数组类型属性的值
        //如：component.title_1，component.elements[2].title_1
        // @prop component的直接属性名
        // @index prop为数组属性时子元素的索引
        // @prop2 prop为数组时元素名
        edit(prop, index, prop2) {
            this.dialogVisible = true;
            this.currentProp = {
                prop,
                index,
                prop2
            };
            if (arguments.length == 3) {
                this.rawhtml = this.component[prop][index][prop2];
            } else {
                this.rawhtml = this.component[prop];
            }
        },
        editOK() {
            if (this.currentProp.prop2) {
                this.component[this.currentProp.prop][this.currentProp.index][
                    this.currentProp.prop2
                ] = this.rawhtml;
            } else {
                this.component[this.currentProp.prop] = this.rawhtml;
            }
            this.dialogVisible = false;
        }
    }
}