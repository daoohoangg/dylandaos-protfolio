<template>
  <div class="w-full max-w-3xl rounded-2xl bg-gray-50 p-6 shadow flex flex-col mt-9 h-[280px]">
    
    <div ref="messageBox" class="flex-1 overflow-y-auto flex flex-col gap-2 pr-1 scrollbar-none">
      <template v-for="(msg, idx) in messages" :key="idx">
        <div v-if="msg.from === 'me'" class="flex justify-end">
          <div class="bg-blue-500 text-white rounded-2xl rounded-tr-md px-5 py-2 max-w-xs text-right shadow"
               style="border-top-right-radius: 1.5rem;">
            {{ msg.text }}
          </div>
        </div>

        <div v-else class="flex items-start gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" id="whale" class="w-9 h-9 rounded-full object-cover">
            <path fill="#00A6ED" d="M24.0391 6.50785C27.0078 9.50004 29 12.9532 29 16.4688 29 22.8896 27.0502 26.86 22.3519 28.7834 21.7423 28.6957 21.1938 28.5899 20.7 28.4651L20.6875 29.047C20.5833 29.6095 20.2031 30.3994 19.0625 29.7501 18.2234 29.2723 16.9509 28.1995 16.7334 25.4686 16.2218 24.198 16.1162 22.5598 16 20.5001 15.8357 17.5891 12.9219 16.6095 11 16.5001 9.16066 16.3955 2.68432 16.0332 2.13144 16.0022 2.11443 15.6318 2.11085 15.261 2.12109 14.8907 2.12109 12.2307 5.48437 9.99005 7.83372 9.99005H14.3837C17.8437 9.99005 20.6537 12.8001 20.6537 16.2601 20.4844 18.672 24.0267 19.6662 24.4737 17.0401 24.9665 14.1449 23.8828 10.8753 22.0391 8.5471 21.8438 8.50002 21.7307 8.50039 21.5938 8.59377 20.3359 9.85159 19.4337 9.90584 17.7422 9.50784 17.6686 9.46055 17.5846 9.43217 17.5033 9.40471 17.2752 9.32763 17.0682 9.25769 17.1719 8.7969 17.3125 8.1719 18.2969 7.07815 18.2969 7.07815 19.0703 6.1719 20.0547 5.96877 20.5234 6.02346 20.9249 6.0703 21.0378 5.95464 21.1029 5.88787 21.1138 5.87667 21.1234 5.86685 21.1328 5.8594 21.1981 5.80752 21.2656 5.4219 21.2656 5.4219 21.1016 4.5469 21.3088 3.74389 21.8125 3.03909 21.8125 3.03909 22.6953 1.77349 23.5 1.69536 24.2193 1.62553 24.3028 2.06462 24.3786 2.46259 24.3875 2.50982 24.3964 2.55654 24.4062 2.6017 24.7401 4.13697 24.5763 4.50402 24.1912 5.36709 24.1256 5.51407 24.0536 5.67543 23.9766 5.8594 23.8479 6.16667 23.9186 6.29282 24.0145 6.46374 24.0225 6.47808 24.0308 6.49274 24.0391 6.50785ZM8.21875 29.9375C6.48438 29.9375 4.57812 27.5 5.10937 24.0156 5.42187 24.2156 7.72396 26.0677 8.85937 27.1562 9.1875 28 8.96875 29.9375 8.21875 29.9375Z"></path>
            <path fill="#1C1C1C" d="M15.517 15.0001C15.1867 15.0001 14.9127 14.7261 14.9127 14.3958V13.6384C14.9127 13.3081 15.1867 13.0342 15.517 13.0342C15.8473 13.0342 16.1213 13.3081 16.1213 13.6384V14.3958C16.1213 14.7342 15.8473 15.0001 15.517 15.0001Z"></path>
            <path fill="#AEDDFF" d="M20.7055 28.2075C21.204 28.3938 21.7654 28.5777 22.398 28.7644 21.8378 28.9962 21.2383 29.1987 20.5981 29.3725 20.6394 29.2632 20.6682 29.1512 20.6875 29.047L20.7055 28.2075ZM16.7329 23.7396C16.626 22.9685 16.5756 22.0687 16.5157 20.9994L16.5 20.7188C16.3357 17.8077 12.7344 16.1094 10.8125 16 8.97415 15.8954 2.67537 15.9909 2.13131 15.9994 2.4697 23.3988 8.16521 30.6385 16.0164 30.0947 17.0934 30.0201 18.0947 29.8982 19.0234 29.7276 18.0237 29.1453 16.4592 27.7214 16.7329 23.7396Z"></path>
          </svg>
          <div>
            <div class="text-xs text-gray-500 mb-1">Dylan</div>
            <div class="bg-gray-200 text-gray-900 rounded-2xl rounded-tl-md px-5 py-2 max-w-xs shadow"
                 style="border-top-left-radius: 1.5rem;">
              {{ msg.text }}
            </div>
          </div>
        </div>
      </template>
    </div>

    <form @submit.prevent="sendMessage" class="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-inner mt-1 ">
      <a class="text-gray-400 hover:text-gray-600" href="mailto:daohoang2911@gmail.com?subject=Secret%20to%20tell">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
      </a>

      <a class="text-gray-400 hover:text-gray-600 -rotate-40 pb-2" href="https://t.me/daohoang2911" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
        </svg>
      </a>

      <input
        v-model="input"
        type="text"
        placeholder="iMessage"
        class="flex-1 bg-transparent outline-none px-2 text-gray-700"
      />

      <button type="submit" class="text-gray-400 hover:text-blue-500 transition">
        <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M2 21l21-9-21-9v7l15 2-15 2z"/>
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// Cấu trúc hội thoại
const fixedConversation = [
  { from: 'Dylan', text: "wanna work together or some sweeties for me? let's DM me and bright together🌟" },
  { from: 'Dylan', text: "what's your name?" },
  { from: 'me', text: "" },
  { from: 'Dylan', text: "nice to meet you!.🙌" },
  { from: 'Dylan', text: "dm me on telegram @daohoang2911 or mmhh... on this way ^^" }
]

const messages = ref([fixedConversation[0], fixedConversation[1]])
const input = ref('')
const messageBox = ref(null)
let step = 2

function sendMessage() {
  if (!input.value.trim() || step >= fixedConversation.length) return
  messages.value.push({ from: 'me', text: input.value })
  input.value = ''
  
  // Trả lời tự động
  if (step < fixedConversation.length) {
    setTimeout(() => {
      messages.value.push(fixedConversation[step])
      step = 4
      messages.value.push(fixedConversation[step])
      nextTick(() => {
        messageBox.value.scrollTop = messageBox.value.scrollHeight
      })
    }, 900)
  }
  step++
  
  nextTick(() => {
    messageBox.value.scrollTop = messageBox.value.scrollHeight
  })
}
</script>

<style scoped>
.scrollbar-none {
  scrollbar-width: none;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
