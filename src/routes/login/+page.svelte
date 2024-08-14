<script>
    import Input from "$lib/components/ui/input/input.svelte";
    
</script>


<div class="w-full h-full min-h-screen flex flex-row-reverse justify-center items-center p-6">
    <div class="w-full h-full flex flex-col gap-6 px-8 bg-black min-h-[95vh] rounded-3xl backdrop-blur-md bg-opacity-40 justify-center items-center">
        <h1 class="text-white text-5xl font-semibold w-3/4 text-center drop-shadow-md">
            Welcome back
        </h1>

        <form action="?/login" method="POST" class="flex flex-col justify-center w-full gap-4">
            <Input class="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border-none text-black placeholder:text-black drop-shadow-md" placeholder="E-Mail" name="email" type="email"/>
            <Input class="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border-none text-black placeholder:text-black drop-shadow-md" placeholder="Password" name="password" type="password"/>
    
            <button type="submit" class="w-full px-6 py-2 flex justify-center items-center flex-row bg-[#CE1B4A] rounded-xl hover:bg-[#D72655] transition-all duration-300 ease-in-out drop-shadow-lg">
                <span class="text-white font-semibold">
                    Next
                </span>
            </button>
        </form>

        <div>
            <span class="text-white">
                Don't have an account yet? <a href="/signup" class="underline transition-all duration-300 ease-in-out text-[#F1F1F1] hover:text-[#F0C396]">Register here.</a>
            </span>
        </div>
    </div>

    <div class="w-full h-full bg-transparent flex max-h-screen px-8 justify-center items-center py-4">
        <h1 class="text-white text-5xl font-semibold w-3/4 text-center drop-shadow-md">
            Let Avlana keep <i>labelling</i> and <i>categorising</i> for you
        </h1>
    </div>
</div>