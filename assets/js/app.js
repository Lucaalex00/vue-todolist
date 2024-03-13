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
    methods:{
        /* Creo una funzione e gli passo come valore "INDEX" */
        removeF(index){
            /* Recupero con il "THIS" l'array "TODOLIST" dall'istanza */
            /* Rimuovo con ".splice" nella posizione di "INDEX", "1" elemento */
            this.todoList.splice(index,1)
        }
    }
}).mount('#app')