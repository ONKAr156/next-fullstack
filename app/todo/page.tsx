
const page = () => {
    const todoData: { task: FormDataEntryValue | null, desc: FormDataEntryValue | null } = {
        task: "",
        desc: ""
    }
    const handelUserResponse = async (e: FormData) => {
        "use server"
        try {
            todoData.task = e.get("task")
            todoData.desc = e.get("desc")
            const res = await fetch("https:/localhost:3000/api/todo", {
                method: 'GET',
                body: JSON.stringify(todoData),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const result = await res.json()
            console.log(result);


        } catch (error) {
            console.log(error)

        }

    }
    return <>
        <form action={handelUserResponse}>
            <input type="text" name="task" />
            <input type="text" name="desc" />
            <button type='submit'>Add Todo</button>
        </form>
    </>
}

export default page