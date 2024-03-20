const { createApp } = Vue;

createApp({
  data() {
    return {
      newTask_text: "",

      todoList: [
        {
          text: "Pulire",
          done: "true",
        },
        {
          text: "Lavare i piatti",
          done: "false",
        },
        {
          text: "Dar da mangiare al gatto",
          done: "true",
        },
        {
          text: "Salvare quei cuccioli vicino a casa",
          done: "false",
        },
        {
          text: "Comprare una bara e fare testamento",
          done: "false",
        },
      ],
    };
  },
  methods: {
    /* Creo una funzione e gli passo come valore "INDEX" */
    removeF(index) {
      /* Recupero con il "THIS" l'array "TODOLIST" dall'istanza */
      /* Rimuovo con ".splice" nella posizione di "INDEX", "1" elemento */
      this.todoList.splice(index, 1);
      console.log("Remove note in position : " + index);
    },
    addNewTaskF() {
      console.log("Add this task to the list", this.newTask_text);

      const objNewTask = {
        text: this.newTask_text,
        done: false,
      };

      this.todoList.push(objNewTask);
      this.newTask_text = "";
    },
    getStatusDone(index) {
      if (this.todoList[index].done === "false") {
        this.todoList[index].done = "true";
      } else {
        this.todoList[index].done = "false";
      }
    },
  },
}).mount("#app");
