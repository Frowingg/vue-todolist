var root = new Vue({
    el: '#root',
    data: {
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
        }
    }
})