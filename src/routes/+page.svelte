<script>
    import '../app.css'

    import { tasks } from '../data/stores.js'

    let inputVal = ""
    let tasksArr = $tasks

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
                    <input type="text" bind:value={task} name="" id="" class="bg-transparent" key={index}>
                </label>
                <button on:click={() => {
                    deleteTask(index)
                }}>Delete</button>
            </li>
        {/each}
    </ul>
</div>