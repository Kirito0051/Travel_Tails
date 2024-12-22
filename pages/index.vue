<template>
    <div>
        <!-- Hero Section -->
        <section class="relative bg-cover bg-center h-[50rem] text-center text-white overflow-hidden"
            style="background-image: url('/images/herobg.jpg')">
            <!-- Navbar -->
            <nav class="absolute top-0 left-0 w-full bg-transparent p-4 z-20">
                <div class="flex justify-between items-center">
                    <!-- Logo -->
                    <div id="logo" class="text-3xl font-sourGummy text-white ml-4 md:ml-10">
                        <NuxtLink to="/" class="hover:text-blue-500">Travel_Tails</NuxtLink>
                    </div>

                    <!-- Hamburger Button (Custom Icon) -->
                    <button id="hamburger-btn" class="text-white text-3xl md:hidden focus:outline-none mr-4">
                        <img src="/public/images/hamburger.png" alt="Hamburger Menu" class="w-8 h-8" />
                    </button>

                    <!-- Navbar Links (Visible on larger screens) -->
                    <div class="hidden md:flex space-x-4 md:space-x-6 mr-4 md:mr-10 font-bob text-base md:text-xl">
                        <NuxtLink to="/flights"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-2xl text-[#4a4947]">
                            Flights
                        </NuxtLink>
                        <NuxtLink to="/hotels"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-2xl text-[#4a4947]">
                            Hotels
                        </NuxtLink>
                        <NuxtLink to="/car_rental"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-2xl text-[#4a4947]">
                            Car Rentals</NuxtLink>
                        <NuxtLink to="/contact"
                            class="transition-all duration-300 ease-in-out hover:scale-105 hover:text-2xl text-[#4a4947]">
                            Contact
                        </NuxtLink>
                    </div>
                </div>

                <!-- Sidebar (Hidden by default) -->
                <div id="sidebar"
                    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform -translate-x-full transition-transform duration-300 z-30">
                    <button id="close-btn" class="text-gray-600 text-2xl absolute top-4 right-4 focus:outline-none">
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
            <!-- Hero Content (Title, Subtitle, Button) -->
            <div class="absolute top-1/3 left-5 md:left-10 w-full px-4 md:px-10 text-left">
                <h1
                    class="text-3xl sm:text-4xl md:text-6xl font-sourGummy mb-4 transform transition duration-500 hover:scale-105">
                    Discover Your Next Adventure
                </h1>
                <p class="text-base sm:text-lg md:text-xl mb-4 md:mb-6 font-sourGummy">
                    Book flights, hotels, and car rentals effortlessly.
                </p>
                <NuxtLink to="/flights"
                    class="inline-block bg-blue-600 px-6 py-3 text-base text-white rounded-md hover:bg-blue-700 transition transform duration-300 hover:scale-105">
                    Get Started
                </NuxtLink>
            </div>

            <!-- Wave Effect -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute bottom-0 left-0 w-full"
                style="bottom: -10px;">
                <path fill="#ffffff" fill-opacity="1"
                    d="M0,96L48,117.3C96,139,192,181,288,186.7C384,192,480,160,576,165.3C672,171,768,213,864,240C960,267,1056,277,1152,261.3C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </section>
        <!-- Features Section -->
        <div class="w-full p-4 py-20 flex flex-wrap gap-12 justify-center items-center">
            <!-- Feature Cards -->
            <div class="flex items-center gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="/images/fast-booking.gif" alt="Fast Booking" class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <div class="text-left">
                    <p class="text-lg md:text-2xl font-bob">Fast Booking</p>
                    <p class="text-sm md:text-base text-gray-600">Book flights, hotels, and car rentals quickly and
                        easily</p>
                </div>
            </div>
            <div class="flex items-center gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="/images/hotel.gif" alt="Luxury Hotels" class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <div class="text-left">
                    <p class="text-lg md:text-2xl font-bob">Luxury Hotels</p>
                    <p class="text-sm md:text-base text-gray-600">Stay at the most luxurious hotels worldwide</p>
                </div>
            </div>
            <div class="flex items-center gap-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                <img src="/images/trip.gif" alt="Transportation" class="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                <div class="text-left">
                    <p class="text-lg md:text-2xl font-bob">Convenient Transportation</p>
                    <p class="text-sm md:text-base text-gray-600">Easily book cabs, buses, and other modes of transport
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full px-6 py-12 md:px-10 md:py-28 flex flex-wrap justify-center items-center bg-gray-100">
            <!-- Left Section -->
            <div class="w-full md:w-1/2 flex justify-center items-center relative mb-6 md:mb-0">
                <div class="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg z-10">
                    <img src="/images/girl.jpg" alt="Hotel View" class="w-full h-full object-cover">
                </div>
                <!-- Paper Plane Icon -->
                <img src="/public/images/paper-plane.png" alt="Paper Plane"
                    class="absolute top-0 left-[160px] w-[20vw] md:w-[70px] h-auto p-2 bg-transparent custom-hide">
                <img src="/public/images/sun-hat.png" alt="Sun Hat"
                    class="absolute bottom-0 right-[130px] w-[20vw] md:w-[90px] h-auto p-2 bg-transparent custom-hide">
            </div>

            <!-- Right Section (Text) -->
            <div class="w-full md:w-1/2 text-center md:text-left px-6 md:px-4 relative">
                <h2 class="text-2xl md:text-3xl font-bob text-gray-800 mb-3">Luxury Hotels for Every Traveler</h2>
                <p class="text-gray-600 text-xs md:text-sm mb-3 leading-relaxed">
                    Discover unparalleled comfort and elegance with our handpicked selection of luxury hotels worldwide.
                    Whether for business or leisure, we have the perfect stay tailored for you.
                </p>
                <NuxtLink to="/hotels"
                    class="inline-block bg-blue-600 px-5 py-2 text-sm text-white rounded-full hover:bg-blue-700 transition transform duration-300 hover:scale-105">
                    Explore Hotels
                </NuxtLink>
                <img src="/public/images/random-star.png" alt="Paper Plane"
                    class="absolute top-[-100px] right-10 w-[20vw] md:w-[70px] h-auto p-2 bg-transparent custom-hide">
            </div>

        </div>
        <img src="/images/star-ani.gif" alt="Star Icon" class="w-16 h-auto absolute right-[450px] z-10 custom-hide">
        <div class="w-full px-6 py-12 md:px-10 md:py-20 flex flex-col items-center bg-gray-100">
            <!-- Header -->
            <!-- Paragraph with Star Icon -->
            <p class="text-lg text-gray-800 font-atma flex items-center space-x-2">
                <img src="/public/images/stars.png" alt="Star Icon" class="w-6 h-6">
                <!-- Replace with your star image path -->
                Discover World-Renowned Tourist Destinations
            </p>

            <!-- Header -->
            <h2 class="text-4xl font-bob mb-6 text-gray-800">
                Featured Tourist Spots You Can't Miss
            </h2>


            <!-- Images Container (One line, even spacing) -->
            <div class="flex justify-evenly items-center w-full max-w-6xl mx-auto gap-x-8 py-10">
                <!-- First Image (Hidden at 800px or below) -->
                <div class="w-1/5 hidden md:block">
                    <img src="/images/eiffel.jpg" alt="Eiffel Tower"
                        class="w-full h-80 object-cover rounded-full shadow-lg">
                    <p class="text-center mt-4 text-2xl font-bob text-gray-800">Eiffel Tower</p>
                </div>

                <!-- Second Image -->
                <div class="w-1/4 md:w-1/5">
                    <img src="/images/Taj.jpg" alt="Taj Mahal" class="w-full h-80 object-cover rounded-full shadow-lg">
                    <p class="text-center mt-4 text-2xl font-bob text-gray-800">Taj Mahal</p>
                </div>

                <!-- Third Image -->
                <div class="w-1/4 md:w-1/5">
                    <img src="/images/Burj.jpg" alt="Burj Khalifa"
                        class="w-full h-80 object-cover rounded-full shadow-lg">
                    <p class="text-center mt-4 text-2xl font-bob text-gray-800">Burj Khalifa</p>
                </div>

                <!-- Fourth Image -->
                <div class="w-1/4 md:w-1/5">
                    <img src="/images/japan.jpg" alt="Mount Fuji"
                        class="w-full h-80 object-cover rounded-full shadow-lg">
                    <p class="text-center mt-4 text-2xl font-bob text-gray-800">Mount Fuji</p>
                </div>

                <!-- Fifth Image (Hidden at 800px or below) -->
                <div class="w-1/5 hidden md:block">
                    <img src="/images/statue.jpg" alt="Statue of Liberty"
                        class="w-full h-80 object-cover rounded-full shadow-lg">
                    <p class="text-center mt-4 text-2xl font-bob text-gray-800">Statue of Liberty</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const closeBtn = document.getElementById('close-btn');
        const sidebar = document.getElementById('sidebar');
        const logo = document.getElementById('logo');

        // Ensure all elements are available before adding event listeners
        if (logo && hamburgerBtn && closeBtn && sidebar) {
            // Logo click toggles sidebar
            logo.addEventListener('click', () => {
                sidebar.classList.toggle('-translate-x-full'); // Toggle sidebar visibility
            });

            // Hamburger button opens sidebar
            hamburgerBtn.addEventListener('click', () => {
                sidebar.classList.remove('-translate-x-full'); // Show sidebar
            });

            // Close button hides sidebar
            closeBtn.addEventListener('click', () => {
                sidebar.classList.add('-translate-x-full'); // Hide sidebar
            });

            // Optional: Close sidebar when clicking outside
            window.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !hamburgerBtn.contains(e.target) && !logo.contains(e.target)) {
                    sidebar.classList.add('-translate-x-full'); // Hide sidebar when clicking outside
                }
            });
        }
    }
}
</script>

<style scoped>
@media (max-width: 1375px) {
    .custom-hide {
        display: none !important;
    }
}
</style>