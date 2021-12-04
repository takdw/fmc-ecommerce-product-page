<template>
  <div class="md:container md:mx-auto font-kumbh">
    <header class="py-6 md:py-12 md:border-b border-gray-300">
      <div class="flex justify-between items-center px-6">
        <div class="flex items-center">
          <button
            type="button"
            class="block lg:hidden"
            @click="showMobileNav = !showMobileNav"
          >
            <MenuIcon class="mt-1 h-4 w-4" />
          </button>

          <a href="#" class="block ml-4 lg:ml-0">
            <img src="~/assets/images/logo.svg" alt="sneakers" />
          </a>
          <h1 class="sr-only">sneakers</h1>

          <nav class="hidden lg:block ml-24 space-x-10">
            <a
              href="#"
              v-for="(link, index) in links"
              :key="`link-${index}`"
              class="text-lg text-gray-400"
              >{{ link.label }}</a
            >
          </nav>
        </div>

        <div class="flex items-center space-x-4 md:space-x-8">
          <a href="#">
            <CartIcon class="text-gray-500 h-6 w-6 md:h-8 md:w-8" />
          </a>

          <div class="w-6 h-6 md:w-14 md:h-14 rounded-full overflow-hidden">
            <img
              class="w-full h-full object-cover"
              src="https://avatars.githubusercontent.com/u/17249078?v=4"
              alt="Tamrat Assefa"
            />
          </div>
        </div>
      </div>

      <transition
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-150"
      >
        <div
          v-if="showMobileNav"
          @click="showMobileNav = false"
          class="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
        ></div>
      </transition>
      <transition
        enter-class="transform -translate-x-full opacity-0"
        enter-to-class="trasnform translate-x-0 opacity-100"
        leave-class="trasnform translate-x-0 opacity-100"
        leave-to-class="transform -translate-x-full opacity-0"
        enter-active-class="transition duration-200"
        leave-active-class="transition duration-200"
      >
        <div
          v-if="showMobileNav"
          class="lg:hidden fixed inset-y-0 left-0 overflow-hidden w-72 z-20"
        >
          <div class="bg-white w-full h-full overflow-y-auto">
            <div class="p-2">
              <button type="button" class="p-4" @click="showMobileNav = false">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-6 px-6 space-y-6">
              <a
                href="#"
                v-for="(link, index) in links"
                :key="`mobile-link-${index}`"
                class="block text-lg text-gray-600 font-bold tracking-wide"
                >{{ link.label }}</a
              >
            </div>
          </div>
        </div>
      </transition>
    </header>

    <div class="md:mt-16 lg:mt-24 lg:grid lg:grid-cols-2">
      <div class="md:px-12 lg:px-16 xl:px-24">
        <div class="relative overflow-hidden lg:overflow-visible">
          <transition
            :enter-class="enterClass"
            :enter-to-class="enterToClass"
            :leave-to-class="leaveToClass"
            :leave-class="leaveClass"
            enter-active-class="transition duration-200"
            leave-active-class="transition duration-200"
            mode="out-in"
            appear
          >
            <img
              class="relative h-[400px] w-full md:h-auto md:rounded-3xl overflow-hidden object-cover"
              :src="activeImage.src"
              :key="`product-image-${activeIndex}`"
              :alt="`Product Image ${activeIndex}`"
            />
          </transition>

          <div class="md:hidden absolute inset-y-0 left-6 flex items-center">
            <button
              @click="prevImage"
              type="button"
              class="bg-white rounded-full h-10 w-10 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="inline-block h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </div>
          <div class="md:hidden absolute inset-y-0 right-6 flex items-center">
            <button
              @click="nextImage"
              type="button"
              class="bg-white rounded-full h-10 w-10 flex items-center justify-center"
            >
              <svg
                class="inline-block h-5 w-5 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="4"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div class="hidden mt-8 md:grid md:grid-cols-4 md:gap-4 xl:gap-8">
          <div
            class="col-span-1"
            v-for="(thumbnail, index) in productImages"
            :key="`thumbnail-${index}`"
          >
            <div
              class="relative rounded-xl overflow-hidden cursor-pointer border-4"
              :class="
                activeIndex === index
                  ? 'border-theme-orange'
                  : 'border-transparent'
              "
              tabindex="0"
              style="padding-top: 100%"
              @click="activeIndex = index"
            >
              <div
                class="absolute inset-0 w-full h-full hover:opacity-30 transition"
                :class="{
                  'opacity-30': activeIndex === index,
                }"
              >
                <img
                  :src="thumbnail.src"
                  :alt="`Thumbnail ${index}`"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="md:px-12 lg:px-16 xl:px-24 md:self-center">
        <div class="px-6 md:px-0 mt-6 lg:mt-0">
          <p
            class="text-yellow-500 uppercase text-sm md:text-xl tracking-widest font-bold"
          >
            Sneaker Company
          </p>
          <h2 class="mt-4 text-4xl md:text-6xl font-bold">
            Fall Limited Edition Sneakers
          </h2>
          <p class="mt-4 md:mt-8 md:text-xl text-gray-500">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>

          <div class="mt-6 md:mt-10 flex lg:block items-center justify-between">
            <div class="flex items-center space-x-4">
              <p class="text-3xl md:text-4xl font-bold">$125.00</p>
              <span
                class="bg-yellow-100 text-yellow-600 rounded px-2 py-1 font-bold md:text-lg"
                >50%</span
              >
            </div>
            <p class="md:mt-2 md:text-lg line-through font-bold text-gray-300">
              $250.00
            </p>
          </div>

          <div class="mt-6 md:mt-10 md:grid md:grid-cols-5 md:gap-4">
            <div
              class="md:col-span-2 py-2 md:py-5 bg-gray-100 rounded-xl flex justify-between items-center"
            >
              <button type="button" class="px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-theme-orange h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M18 12H6"
                  />
                </svg>
              </button>
              <span class="font-bold md:text-lg">1</span>
              <button type="button" class="px-4 py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-theme-orange h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>

            <div class="mt-6 md:mt-0 md:col-span-3 md:h-full">
              <button
                class="block w-full py-4 md:h-full flex items-center justify-center space-x-4 text-white bg-theme-orange rounded-xl shadow-xl"
              >
                <CartIcon class="h-5 w-5" />
                <span class="font-bold">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pt-24"></div>
  </div>
</template>

<script>
import { CartIcon, MenuIcon } from "@/components/icons";

export default {
  data() {
    return {
      links: [
        { label: "Collections" },
        { label: "Men" },
        { label: "Women" },
        { label: "About" },
        { label: "Contact" },
      ],
      productImages: [
        {
          src: require("~/assets/images/image-product-1.jpg"),
          thumbnail: require("~/assets/images/image-product-1-thumbnail.jpg"),
        },
        {
          src: require("~/assets/images/image-product-2.jpg"),
          thumbnail: require("~/assets/images/image-product-2-thumbnail.jpg"),
        },
        {
          src: require("~/assets/images/image-product-3.jpg"),
          thumbnail: require("~/assets/images/image-product-3-thumbnail.jpg"),
        },
        {
          src: require("~/assets/images/image-product-4.jpg"),
          thumbnail: require("~/assets/images/image-product-4-thumbnail.jpg"),
        },
      ],
      activeIndex: 0,
      dir: false,
      showMobileNav: false,
    };
  },

  computed: {
    activeImage() {
      return this.productImages[this.activeIndex];
    },
    enterToClass() {
      return `transform translate-x-0 opacity-100`;
    },
    enterClass() {
      return `transform ${this.dir ? "-" : ""}translate-x-8 opacity-0`;
    },
    leaveClass() {
      return this.enterToClass;
    },
    leaveToClass() {
      return `transform ${this.dir ? "" : "-"}translate-x-8 opacity-0`;
    },
  },

  watch: {
    activeIndex(val, oldVal) {
      if (val < oldVal) {
        this.dir = true;
      } else {
        this.dir = false;
      }
    },
  },

  methods: {
    prevImage() {
      if (this.activeIndex === 0) {
        this.activeIndex = this.productImages.length - 1;
        return;
      }

      this.activeIndex--;
    },
    nextImage() {
      if (this.activeIndex === this.productImages.length - 1) {
        this.activeIndex = 0;
        return;
      }

      this.activeIndex++;
    },
  },

  components: {
    CartIcon,
    MenuIcon,
  },
};
</script>
