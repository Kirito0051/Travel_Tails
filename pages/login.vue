<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
            <form @submit.prevent="handleLogin">
                <div class="mb-4">
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input v-model="email" type="email" id="email"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your email" required />
                </div>
                <div class="mb-6">
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                    <input v-model="password" type="password" id="password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        placeholder="Enter your password" required />
                </div>
                <button type="submit"
                    class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none">
                    Login
                </button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await $fetch('/api/login', {
                    method: 'POST',
                    body: { email: this.email, password: this.password },
                });
                if (response.success) {
                    alert('Login successful!');
                } else {
                    alert('Invalid credentials');
                }
            } catch (error) {
                console.error(error);
                alert('Error logging in');
            }
        },
    },
};
</script>
