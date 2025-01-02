<template>
    <section class="container mx-auto py-4">
        <!-- Attention-Grabbing Image -->
        <div class="relative mb-8 h-[30rem]">
            <img src="/public/images/plane_bg.jpg" alt="Scenic view from a plane during flight"
                class="w-full h-full object-cover rounded-3xl" />
        </div>

        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Find Your Flights
        </h2>
        <form class="bg-gray-100 p-10 rounded shadow-md space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Departure City" class="p-4 border rounded" />
                <input type="text" placeholder="Destination City" class="p-4 border rounded" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" class="p-4 border rounded" />
                <input type="number" placeholder="Passengers" class="p-4 border rounded" />
            </div>
            <div class="flex justify-center">
                <button type="submit" class="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded w-48">
                    Search Flights
                </button>
            </div>
        </form>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
});
</script>
