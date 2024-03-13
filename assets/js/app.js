const {createApp}= Vue

createApp({
    data(){
        return{
            todoList: [
            {
                text: 'Pulire',
                done: 'true',
            },
            {
                text: 'Lavare i piatti',
                done: 'false',
            },
            {
                text: 'Dar da mangiare al gatto',
                done: 'true',
            },
            {
                text: 'Salvare quei cuccioli vicino a casa',
                done: 'false',
            },
            {
                text: 'Comprare una bara e fare testamento',
                done: 'false',
            }
        ],
        }
    },
    methods(){
    }
}).mount('#app')