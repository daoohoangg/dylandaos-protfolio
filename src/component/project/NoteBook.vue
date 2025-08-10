<template>
  <div class="px-28 py-30 max-w-6xl mx-auto ">
    <h1 class="text-4xl font-medium font-sans">Note Book</h1>
    <p class="text-xl text-gray-500 mt-2">Online Note Taking App</p>

    <hr class="my-6 border-gray-300" />

    <div class="grid grid-cols-1 md:grid-cols-4">
      <!-- Left column -->
      <div class="space-y-6 grid grid-cols-1 md:grid-cols-1">
        <div>
          <h3 class="uppercase text-sm font-semibold text-gray-500">My Role</h3>
          <p>Product Designer</p>
          <p>UI/UX Designer</p>
        </div>

        <div>
          <h3 class="uppercase text-sm font-semibold text-gray-500">Tools</h3>
          <p>Figma</p>
          <p>VSCode</p>
          <p>Git</p>
        </div>

        <div>
          <h3 class="uppercase text-sm font-semibold text-gray-500">Timeline</h3>
          <p>October 2024</p>
        </div>
      </div>

      <!-- Right column -->
      <div class="md:col-span-3 space-y-6 ">
        <div>
          <h3 class="uppercase text-sm font-semibold text-gray-500 space-y-4">Description</h3>
          <p>An online wedding invitation card that allows users to create and customize their own invitations.</p>
        </div>

        <div class="mt-4">
          <h3 class="uppercase text-sm font-semibold text-gray-500 mt-10">Context</h3>
          <p>
            I designed a concept online wedding invitation card that allows users to create and customize their own invitations.
          </p>
          <p class="mt-4">
            This project showcases my ability to create user-friendly and visually appealing designs. I focused on intuitive navigation, elegant layouts, and responsive design to ensure a seamless experience across devices.
          </p>
        </div>
        <div class="flex items-center mt-10">
          <a class="inline-flex items-center px-6 py-3 border rounded-full hover:bg-gray-100 transition font-semibold gap-2"
            href="https://duyanh-daohe.vercel.app/" target="_blank">
            View The Card
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="rotate-45 w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18" />
            </svg>
          </a>
        </div>
      </div>

    </div>
  </div>
</template>
