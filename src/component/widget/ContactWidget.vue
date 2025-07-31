<template>
  <div class="flex flex-wrap gap-4 p-6 rounded-2xl justify-center mt-10 font-sans ">

    <div class="bg-gray-50 rounded-3xl shadow-md w-95 p-6">
      <div class="flex items-center gap-2 mb-4">
        <div class="flex-grow">
          <h2 class="font-semibold text-lg">Hoang Trung Dao</h2>
          <p class="text-sm text-gray-500">linkedin@daoohoangg</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
        </svg>
      </div>
      <div class="border border-blue-100 bg-blue-50 rounded-lg p-3 mb-4">
        <p class="text-sm text-gray-700"><strong>To</strong> <span class="text-blue-600 font-medium">linkedin@daoohoangg</span></p>
        <p class="text-sm text-gray-800 mt-2">Let’s Chat</p>
        <p class="text-sm text-gray-500">Say hello</p>
      </div>
      <a href="https://www.linkedin.com/in/daoohoangg/" target="_blank">
        <button class="w-full border border-gray-300 rounded-xl py-2 text-sm font-medium hover:bg-gray-100">
            See Me →
        </button>
      </a>
    </div>


    <div class="bg-gray-50 rounded-3xl shadow-md w-95 p-6">
      <div class="flex items-center gap-2 mb-4">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" class="w-8 h-8 rounded-full" alt="Avatar" />
        <div class="flex-grow">
          <h2 class="font-semibold text-lg">Dylan Dao</h2>
          <p class="text-sm text-gray-500">@daohoang2911</p>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="80" height="80" viewBox="0 0 48 48">
            <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
        </svg>
      </div>
      <p class="text-sm text-gray-800 mb-4">
        i get computers ‘puting ✹<br>
        ai design <a href="#" class="text-blue-500">@fpt</a> ✹ prev <a href="#" class="text-blue-500">@developer</a>
      </p>
      <a href="https://t.me/daohoang2911" target="_blank">
        <button class="w-full border border-gray-300 rounded-xl py-2 text-sm font-medium hover:bg-gray-100 mt-13">
        DM Me →
      </button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactCards'
}
</script>
