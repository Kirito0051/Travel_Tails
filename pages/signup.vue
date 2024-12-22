<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
            <form @submit.prevent="handleSignUp">
                <div class="mb-4">
                    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input v-model="name" type="text" id="name" placeholder="Enter your name"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required />
                </div>
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input v-model="email" type="email" id="email" placeholder="Enter your email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input v-model="password" type="password" id="password" placeholder="Enter your password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required />
                </div>
                <button type="submit"
                    class="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none">
                    Sign Up
                </button>
            </form>
            <p class="mt-4 text-sm text-center">
                Already have an account?
                <NuxtLink to="/login" class="text-blue-500 hover:underline">Login</NuxtLink>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async handleSignUp() {
            try {
                // Handle signup logic (e.g., call backend API)
                const response = await $fetch('/api/signup', {
                    method: 'POST',
                    body: { name: this.name, email: this.email, password: this.password },
                });

                if (response.success) {
                    alert('Sign Up successful!');
                } else {
                    alert('Sign Up failed');
                }
            } catch (error) {
                console.error(error);
                alert('Error during Sign Up');
            }
        },
    },
};
</script>
