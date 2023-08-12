<script>
    import '../app.css'

    import { tasks } from '../data/stores.js'

    let inputVal = ""
    let tasksArr = $tasks
    let checked = false

    function createTask(){
        if (!inputVal) return;
        for (let i = 0;i<tasksArr.length;i++){
            if(tasksArr[i] === inputVal) {
                inputVal = "";
                window.alert("Hey, you already have that on your list, silly!")
                return
            }
        }
        tasksArr = [...tasksArr, inputVal]
        inputVal = "";
    }

    function deleteTask(index){
        tasksArr = tasksArr.filter((task) => task !== tasksArr[index]);
    }

    function completeTask(){
        console.log("Ping");
    }
</script>

<!-- Todo: create new todo, read existing, update, delete -->

<div class="flex flex-col gap-8 items-center justify-center h-screen w-screen bg-red-200">
    <form action="" on:submit={createTask}>
        <label for="create-task">
            Task name:
            <input required type="text" bind:value={inputVal} name="" id="inputTask">
            <button>Create task</button>
        </label>
    </form>
    <ul>
        {#each tasksArr as task, index}
            <li>
                <label for="">
                    <input type="checkbox" checked={false} name="" id="" on:click={(e) => {
                    document.querySelector(`#task-${index}`).classList.toggle("line-through");
                    }}>
                    <input type="text" bind:value={task} name="" id={`task-${index}`} class="bg-transparent" key={index}>
                </label>
                <button on:click={() => {
                    deleteTask(index)
                }}>Delete</button>
            </li>
        {/each}
    </ul>
</div>