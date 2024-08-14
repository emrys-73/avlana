<script>

    export let data;
</script>

<div class="w-full h-full min-h-screen flex flex-col justify-center items-center gap-6 bg-[url('/core.png')] bg-cover p-2 transition-all duration-1000 ease-in-out relative">
    <div class="w-[15vw] h-full min-h-screen absolute left-0 transition-all duration-1000 ease-in-out flex-col gap-6 px-4 py-2 justify-between hidden">

        <h1 class="text-white font-semibold text-3xl">
            Avlana
        </h1>

    </div>
    <div class="w-full h-full bg-[#f1f1f1] rounded-lg opacity-80">
        {data?.scenes}
    </div>
</div>