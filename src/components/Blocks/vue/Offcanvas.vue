<template>
    <div class="drawer lg:drawer-open">
        <input
            id="drawer"
            type="checkbox"
            class="drawer-toggle"
            ref="refDrawer"
        />
        <div class="drawer-side">
            <label for="drawer" class="drawer-overlay"></label>
            <div class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <div class="flex items-center justify-between p-4 lg:hidden">
                    <h5
                        class="mb-0 font-semibold leading-normal"
                        id="offcanvasExampleLabel"
                    >
                        Offcanvas
                    </h5>
                    <button
                        type="button"
                        class="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        @click="toggleDrawer()"
                    >
                        <span
                            class="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="h-6 w-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="flex flex-col gap-4 items-center pt-10">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img
                                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                            />
                        </div>
                    </div>
                    <div class="flex flex-col gap-2 text-center">
                        <div class="text-lg font-bold" rel="author nofollow">
                            Mix
                        </div>
                        <dd class="location">Taiwan</dd>
                        <a
                            class="link"
                            href="https://www.blogger.com/profile/08357211573037259523"
                            rel="author"
                        >
                            瀏覽簡介
                        </a>
                    </div>
                    <span class="divider"></span>
                    <div class="collapse collapse-arrow bg-base-200">
                        <input
                            type="radio"
                            name="my-accordion-2"
                            checked="checked"
                        />
                        <div class="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div class="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div class="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div class="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                    <div class="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div class="collapse-title text-xl font-medium">
                            Click to open this one and close others
                        </div>
                        <div class="collapse-content">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const refDrawer = ref(null);
const toggleDrawer = () => {
    refDrawer.value.checked = !refDrawer.value.checked;
};
defineExpose({ toggleDrawer });
</script>

<style>
</style>