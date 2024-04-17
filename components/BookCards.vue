<template>
    <div>
        <div class="max-w-sm rounded-lg overflow-hidden shadow-xl">
            <img class="w-full h-48 object-cover" src="https://picsum.photos/200" alt="book cover">
            <div class="px-6 py-4">
                <div class="flex items-center justify-between mb-2">
                    <div class="font-bold text-xl">Book Name</div>
                    <Favorite />
                </div>
                <p class="text-gray-700 text-base truncate ...">
                    Book Description
                </p>
                <div class="pt-4 pb-2">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read More</a>
                </div>
            </div>
        </div>
    </div>
</template>