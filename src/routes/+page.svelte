<script>
    import Button from "$lib/components/ui/button/button.svelte";
    
</script>

<div class="w-full h-full flex min-h-screen">
    <!-- welcoming screen -->
    <div class="w-full h-full min-h-screen flex flex-col justify-center items-center gap-6">
        <h1 class="text-white text-5xl font-semibold w-1/2 text-center">
            Welcome to Avlana
        </h1>

        <div class="w-1/2 flex flex-row justify-center">
            <Button href="/signup" class="w-3/4 px-6 py-2 flex justify-center items-center flex-row bg-[#CE1B4A] rounded-xl hover:bg-[#D72655] transition-all duration-300 ease-in-out drop-shadow-lg">
                <span class="text-white font-semibold">
                    Start here
                </span>
            </Button>
        </div>
    </div>
</div>