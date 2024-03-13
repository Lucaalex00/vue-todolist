# Descrizione:

    Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:

        - text, una stringa che indica il testo del todo,
        - done, un booleano (true/false) che indica se il todo è stato fatto oppure no.

# MILESTONE 1

    Stampare all'interno di una lista HTML un item per ogni todo. Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

# MILESTONE 2

    Visualizzare a fianco ad ogni item una "x": cliccando su di essa, il todo viene rimosso dalla lista.

# MILESTONE 3

    Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

# Bonus:

    1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
    2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

# DESCRIPTION

creo un array "todoList" di oggetti "todoItem" con le proprietà "text" & "done" a cui associo i valori.

# 1.

    - uso un ciclo v-for in una lista nella dom (UL > LI) e stampo tutti i valori della lista;
    - associo al ciclo un v-if (done==='true') che aggiunge all'elemento stampato una :class (completed) con lo style text-decoration:line-trough;

# 2.

    - inserire nell'HTML una "x" e al @click= richiamare la funzione removeItem(index) con l'indice dell'elemento cliccato e item='';

# 3.

    - inserisco un input nell'HTML e un button "add" TUTTO all'interno di un form;
    - inserisco nel form il "submit" del button;
    - inserisco con un .push il testo nella lista stampata di "todoList"

# Bonus

    - inserire un keyup.enter al button richiamando il .push del punto 3
    - cliccando sull'elemento, SE il valore di done=== true cambiare il valore di "done" e quindi associargli la classe (completed)
    OPPURE rimuovere la classe (completed)
