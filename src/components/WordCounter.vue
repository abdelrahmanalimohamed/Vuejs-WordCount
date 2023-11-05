<template>
    <div>
      <pre>{{ fileContent }}</pre>
      <ul>
        <li v-for="(count, word) in wordCount" :key="word">{{ word }}: {{ count }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      fileContent: String,
    },
    computed: {
      wordCount() {
        const words = this.fileContent.toLowerCase().match(/\b\w+\b/g);
        const wordCount = {};
  
        if (words) {
          words.forEach(word => {
            if (wordCount[word]) {
              wordCount[word]++;
            } else {
              wordCount[word] = 1;
            }
          });
        }
  
        return wordCount;
      },
    },
  };
  </script>
  