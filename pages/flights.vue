<template>
    <section class="container mx-auto py-12">
        <h2 class="text-3xl font-bold mb-6">Find Your Flights</h2>
        <form class="bg-gray-100 p-6 rounded shadow-md space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Departure City" class="p-4 border rounded" />
                <input type="text" placeholder="Destination City" class="p-4 border rounded" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="date" class="p-4 border rounded" />
                <input type="number" placeholder="Passengers" class="p-4 border rounded" />
            </div>
            <button type="submit" class="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded w-full">
                Search Flights
            </button>
        </form>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'custom'
})
</script>
