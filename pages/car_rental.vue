<template>
    <div>
        <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden relative"
            @mousedown="startDrawing" @mousemove="handleMouseMove" @mouseup="endDrawing">

            <!-- Navbar on top of the video -->
            <nav class="absolute top-0 left-0 w-full bg-transparent p-4 z-20">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <div id="logo" class="text-3xl font-sourGummy text-white ml-4 md:ml-10">
                        <NuxtLink to="/" class="hover:text-blue-500">Travel_Tails</NuxtLink>
                    </div>

                    <!-- Hamburger Button (Custom Gradient Icon) -->
                    <button id="hamburger-btn" @click="toggleSidebar"
                        class="text-white text-3xl md:hidden focus:outline-none mr-4">
                        <img src="/public/images/car_ham.png" alt="Hamburger Menu" class="w-10 h-10" />
                    </button>

                    <!-- Navbar Links (Visible on larger screens) -->
                    <div
                        class="hidden md:flex space-x-4 md:space-x-6 mr-4 md:mr-10 font-bob text-base md:text-xl gradient-text z-10">
                        <NuxtLink to="/flights"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-xl gradient-text">
                            Flights
                        </NuxtLink>
                        <NuxtLink to="/hotels"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-xl gradient-text">
                            Hotels
                        </NuxtLink>
                        <NuxtLink to="/car_rental"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-xl gradient-text">
                            Car Rentals</NuxtLink>
                        <NuxtLink to="/contact"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-xl gradient-text">
                            Contact
                        </NuxtLink>

                    </div>
                </div>
                <div id="sidebar" :class="{ 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen }"
                    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-30">
                    <button id="close-btn" @click="toggleSidebar"
                        class="text-gray-600 text-2xl absolute top-4 right-4 focus:outline-none">
                        ✕
                    </button>
                    <div class="mt-16 space-y-6 px-6 font-bob text-xl">
                        <NuxtLink to="/flights" class="block text-[#4a4947] hover:text-blue-600">Flights</NuxtLink>
                        <NuxtLink to="/hotels" class="block text-[#4a4947] hover:text-blue-600">Hotels</NuxtLink>
                        <NuxtLink to="/car_rental" class="block text-[#4a4947] hover:text-blue-600">Car Rentals
                        </NuxtLink>
                        <NuxtLink to="/contact" class="block text-[#4a4947] hover:text-blue-600">Contact</NuxtLink>
                    </div>
                </div>
            </nav>

            <!-- Video element, now responsive -->
            <video ref="videoRef" class="absolute top-0 left-0 w-full h-full object-cover z-0">
                <source src="/video/Car_Slow.mp4" type="video/mp4" />
            </video>

            <!-- Circle, only visible when video is not playing -->
            <div v-if="!isPlaying" class="border-l-2 border-b-2 border-white rounded-full z-10 rotate-90 absolute top-[10%] left-1/2 transform -translate-x-1/2 overflow-hidden 
                    sm:w-[80vh] sm:h-[80vh] md:w-[100vh] md:h-[100vh] lg:w-[120vh] lg:h-[120vh] hidden sm:block">
            </div>

            <!-- Text moved to the right -->
            <div v-if="!isPlaying"
                class="absolute top-[66%] right-28 transform -translate-y-1/2 font-sourGummy z-20 opacity-90 animate-fadeIn gradient-text">
                <div class="md:text-base lg:text-xl text-xs sm:text-sm hidden xl:block">Begin The Experience
                </div>
                <div class="text-xs mt-1 md:text-sm md:mt-1 lg:mt-0 sm:text-sm sm:mt-2 hidden sm:block">Drag To Start
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const points = ref([]);
const isPlaying = ref(false);
const isSidebarOpen = ref(false);
const videoRef = ref(null);
const lastPoint = ref(null);
const startPoint = ref(null);
const angleThreshold = ref(180);  // 1/2 circle = 180 degrees
const currentAngle = ref(0);  // Track the current angle

// Function to toggle the sidebar's visibility
const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
};

// Start drawing (mouse down)
const startDrawing = () => {
    points.value = []; // Clear points on new gesture
    lastPoint.value = null; // Reset the last point
    startPoint.value = null; // Reset the starting point
    currentAngle.value = 0; // Reset the angle
};

// Handle mouse move and track the path
const handleMouseMove = (event) => {
    if (!startPoint.value) {
        // Set the start point when the mouse is first pressed
        startPoint.value = { x: event.clientX, y: event.clientY };
    }

    if (lastPoint.value) {
        // Calculate the angle between the current point and the start point
        const angle = calculateAngle(startPoint.value, { x: event.clientX, y: event.clientY });
        if (angle > angleThreshold.value && !isPlaying.value) {
            points.value.push({ x: event.clientX, y: event.clientY });
        }
    }

    lastPoint.value = { x: event.clientX, y: event.clientY };
};

// Handle mouse up (end the gesture)
const endDrawing = () => {
    if (currentAngle.value >= angleThreshold.value) {
        if (isPlaying.value) {
            videoRef.value.pause();
            isPlaying.value = false;
        } else {
            videoRef.value.play();
            isPlaying.value = true;
        }
    }
};

// Function to calculate the angle between the start point and the current mouse position
const calculateAngle = (start, current) => {
    const deltaX = current.x - start.x;
    const deltaY = current.y - start.y;
    const radians = Math.atan2(deltaY, deltaX); // Get angle in radians
    const degrees = (radians * 180) / Math.PI; // Convert radians to degrees
    const normalizedAngle = (degrees + 360) % 360; // Normalize angle to positive values
    currentAngle.value = normalizedAngle; // Update current angle
    return normalizedAngle;
};

// Handle video play
const handleVideoPlay = () => {
    isPlaying.value = true;
};
</script>

<style scoped>
@keyframes animate-gradient {
    to {
        background-position: 200%;
    }
}

.gradient-text {
    background: linear-gradient(to right, #fc72ff, #8f68ff, #487bff, #8f68ff, #fc72ff);
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate-gradient 2.5s linear infinite;
}

@media (max-width: 765px) {
    #hamburger-btn {
        display: block;
    }
}
</style>
