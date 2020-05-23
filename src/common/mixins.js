export const Mixins = {
    methods: {
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