<template>
     <div class=" mt-10 font-sans">
      <div class="bg-gray-50 font-normal rounded-3xl shadow p-6 text-gray-500 text-xl">
        <h1 class="text-3xl font-medium text-black mb-4">
          <span class="">Dylan </span> 
          <span class="text-gray-500">{{ displayedText }}</span>
        </h1>
        <hr class="mb-10 text-gray-300 height--1">
        <p class="mb-10">i develop things.</p>
        <p class="mb-10">i think development can change things.</p>
        <p class="mb-10">i think the things we develop are just as important as the things we choose not to.</p>
        <p class="mb-10">i think we should develop things that do the things we don't enjoy...</p>
        <p class="mb-10">i think there are too many things.</p>
        <p class="mb-10">i think there should be fewer, but better things<span class="text-red-500">*</span>.</p>
        <p>the best things. an optimal amount.</p>
        <p class="text-gray-400 text-sm mt-4"><span class="text-red-500">*</span> Less, but better</p>
      </div>
    </div>
</template>
<script>
  function loopTyping(vm, texts, speed = 100, delay = 1000) {
  let textIndex = 0; // vị trí trong mảng texts
  let charIndex = 0; // vị trí ký tự
  let deleting = false; // trạng thái xóa hay gõ

  function tick() {
    const currentText = texts[textIndex];

    if (!deleting) {
      // Gõ chữ
      vm.displayedText = currentText.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(tick, delay); // chờ trước khi xóa
        return;
      }
    } else {
      // Xóa chữ
      vm.displayedText = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length; // chuyển sang text kế
      }
    }

    setTimeout(tick, deleting ? speed / 2 : speed);
  }

  tick();
}

export default {
  data() {
    return {
      displayedText: ""
    };
  },
  mounted() {
    loopTyping(this, [
      "is cooking up something new...",
    ], 100, 1500);
  }
};</script>