<template>
  <div class="w-full max-w-3xl rounded-2xl bg-gray-50 p-6 shadow flex flex-col mt-10 h-[280px]">
    
    <div ref="messageBox" class="flex-1 overflow-y-auto flex flex-col gap-4 pr-1 scrollbar-none">
      <template v-for="(msg, idx) in messages" :key="idx">
        <div v-if="msg.from === 'me'" class="flex justify-end">
          <div class="bg-blue-500 text-white rounded-2xl rounded-tr-md px-5 py-2 max-w-xs text-right shadow"
               style="border-top-right-radius: 1.5rem;">
            {{ msg.text }}
          </div>
        </div>

        <div v-else class="flex items-start gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Marco"
            class="w-9 h-9 rounded-full object-cover"
          />
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
