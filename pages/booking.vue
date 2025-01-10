<template>
    <div class="container mx-auto p-6">
        <h1 class="text-3xl font-bold text-center mb-6">Book Your Travel</h1>

        <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Flight Booking Section -->
            <div class="bg-gray-100 p-4 rounded-lg">
                <h2 class="text-xl font-semibold">Flight Booking</h2>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="departure" class="block text-sm font-medium">Departure</label>
                        <input id="departure" type="date" v-model="departure"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        <span v-if="errors.departure" class="text-red-500 text-sm">{{ errors.departure }}</span>
                    </div>
                    <div>
                        <label for="destination" class="block text-sm font-medium">Destination</label>
                        <input id="destination" type="text" v-model="destination" placeholder="Enter destination"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                        <span v-if="errors.destination" class="text-red-500 text-sm">{{ errors.destination }}</span>
                    </div>
                </div>
            </div>

            <!-- Hotel Booking Section -->
            <div class="bg-gray-100 p-4 rounded-lg">
                <h2 class="text-xl font-semibold">Hotel Booking</h2>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="checkin" class="block text-sm font-medium">Check-in Date</label>
                        <input id="checkin" type="date" v-model="checkin"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label for="checkout" class="block text-sm font-medium">Check-out Date</label>
                        <input id="checkout" type="date" v-model="checkout"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                    </div>
                </div>
            </div>

            <!-- Car Rental Section -->
            <div class="bg-gray-100 p-4 rounded-lg">
                <h2 class="text-xl font-semibold">Car Rental</h2>
                <div class="grid grid-cols-2 gap-4 mt-4">
                    <div>
                        <label for="pickup" class="block text-sm font-medium">Pick-up Date</label>
                        <input id="pickup" type="date" v-model="pickup"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                        <label for="dropoff" class="block text-sm font-medium">Drop-off Date</label>
                        <input id="dropoff" type="date" v-model="dropoff"
                            class="mt-2 p-2 w-full border border-gray-300 rounded-lg" />
                    </div>
                </div>
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-blue-600 text-white py-2 px-6 rounded-lg">Submit Booking</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'BookingPage',
    data() {
        return {
            departure: '',
            destination: '',
            checkin: '',
            checkout: '',
            pickup: '',
            dropoff: '',
            errors: {}
        }
    },
    methods: {
        handleSubmit() {
            this.errors = {}; // Reset errors
            if (!this.departure) {
                this.errors.departure = "Departure date is required";
            }
            if (!this.destination) {
                this.errors.destination = "Destination is required";
            }
            if (!this.checkin) {
                this.errors.checkin = "Check-in date is required";
            }
            if (!this.checkout) {
                this.errors.checkout = "Check-out date is required";
            }
            if (!this.pickup) {
                this.errors.pickup = "Pick-up date is required";
            }
            if (!this.dropoff) {
                this.errors.dropoff = "Drop-off date is required";
            }

            if (Object.keys(this.errors).length === 0) {
                alert("Booking Successful!");
            }
        }
    }
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
