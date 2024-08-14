<script>
    import { Input } from "$lib/components/ui/input"


    export let data;

</script>

<div class="w-full h-full min-h-screen flex flex-col justify-center items-center gap-6">
    <h1 class="text-white text-3xl font-semibold w-1/2 text-center">
        Great {data?.user?.name}, now let's start processing some footage
    </h1>

    <form action="?/run" method="POST" class="w-1/2 flex flex-col gap-6 justify-center">
        <Input class="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl border-none text-black placeholder:text-black drop-shadow-md" placeholder="URL to your video" name="url" type="url"/>

        <button type="submit" class="w-full px-6 py-2 flex justify-center items-center flex-row bg-[#CE1B4A] rounded-xl hover:bg-[#D72655] transition-all duration-300 ease-in-out drop-shadow-lg">
            <span class="text-white font-semibold">
                Go
            </span>
        </button>
    </form>


    <form action="?/logout" method="POST" class="absolute bottom-4 left-6 flex flex-row justify-center items-center gap-2 text-white font-semibold">
        <button type="submit">
            Log out
        </button>
    </form>
</div>
