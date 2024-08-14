<script>
    export let data;

    const verf_message = "We sent a verification link to your inbox. You know what to do :)"
</script>

<div class="w-full h-full min-h-screen flex flex-col justify-center items-center gap-6">
    <h1 class="text-white text-5xl font-semibold w-1/2 text-center">
        {verf_message}
    </h1>

    <div class="w-full flex flex-row justify-center">
        <a href="/{data?.user?.id}" class="w-3/4 px-6 py-2 flex justify-center items-center flex-row bg-[#CE1B4A] rounded-xl hover:bg-[#D72655] transition-all duration-300 ease-in-out drop-shadow-lg">
            <span class="text-white font-semibold">
                Done!
            </span>
        </a>
    </div>
</div>
