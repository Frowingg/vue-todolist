var root = new Vue({
    el: '#root',
    data: {
        newToDoText: '',
        toDos: [
        {
            toDo: 'Fare i compiti',
            done: false,
        },
        {
            toDo: 'Fare la spesa',
            done: true,
        },
        {
            toDo: 'Fare il bucato',
            done: false,
        },
    ]
    },
    methods: {
        deledeToDo(index) {
            this.toDos.splice(index, 1);
        },
        invertThisItem(index) {
            this.toDos[index].done = !this.toDos[index].done;
        },
        addNewToDo() {
            newToDo = {
                        toDo: `${this.newToDoText}`,
                        done: false,
                    };
            this.toDos.push(newToDo);
            this.newToDoText = '';
        }
    }
})