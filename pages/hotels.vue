<template>
    <div class="flex justify-center items-center shadow-2xl">
        <div class="relative w-[100vw] h-[70vh] rounded-3xl">
            <!-- Video -->
            <video ref="video" class="w-full h-full object-cover rounded-3xl" muted loop @ended="onVideoEnded">
                <source src="/public/video/hotel.mov" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <!-- Play Button -->
            <button id="playButton"
                class="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full flex items-center justify-center transition hover:scale-110"
                @click="togglePlay">
                <img src="/public/images/Play.png" alt="Play" class="w-6 h-6" />
            </button>

            <!-- Half Div Above Video (Out of Container) with Rounded Corners -->
            <div class="relative w-[65vw] min-h-32 bg-white rounded-3xl p-4 shadow-2xl mt-[-4rem] mx-auto">
                <!-- Dropdown and Search Bar Section -->
                <div class="flex justify-center items-start space-x-8 w-full py-5 px-5">
                    <!-- Location Dropdown -->
                    <div class="flex flex-col items-start w-1/3">
                        <select class="w-full p-2 bg-gray-100 rounded-lg focus:outline-none">
                            <option value="location1">Location</option>
                            <option value="location2">Location 2</option>
                            <option value="location3">Location 3</option>
                        </select>
                        <p class="text-left text-sm mt-2 text-gray-600 px-3">Select Your Destination</p>
                    </div>

                    <div class="h-16 border-l border-gray-300"></div>

                    <!-- Date Dropdown -->
                    <div class="flex flex-col items-start w-1/3">
                        <select class="w-full p-2 bg-gray-100 rounded-lg focus:outline-none">
                            <option value="date1">Date</option>
                            <option value="date2">Date 2</option>
                            <option value="date3">Date 3</option>
                        </select>
                        <p class="text-left text-sm mt-2 text-gray-600 px-3">Choose Your Travel Date</p>
                    </div>

                    <div class="h-16 border-l border-gray-300"></div>

                    <!-- Search Bar -->
                    <div class="w-1/3">
                        <input type="text" placeholder="Search..."
                            class="w-[80%] py-6 px-4 bg-[#2c2c2c] text-white rounded-xl" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Define the custom layout for this page
definePageMeta({
    layout: 'custom', // Replace 'custom' with the name of your layout file
})

const video = ref<HTMLVideoElement | null>(null)

const togglePlay = () => {
    if (video.value) {
        const playButton = document.getElementById('playButton') as HTMLElement
        if (video.value.paused) {
            video.value.play()
            playButton.classList.add('hidden') // Hide play button when the video starts
        } else {
            video.value.pause()
            playButton.classList.remove('hidden') // Show play button when the video is paused
        }
    }
}

const onVideoEnded = () => {
    if (video.value) {
        video.value.currentTime = 0 // Reset the video to the start
        const playButton = document.getElementById('playButton') as HTMLElement
        playButton.classList.remove('hidden') // Show the play button again after video ends
    }
}
</script>

<style scoped>
/* No extra styles are necessary because Tailwind handles everything. */
</style>
