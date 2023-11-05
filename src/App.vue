<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h3 class="text-center">File Word Counter</h3>
          </div>
          <div class="card-body">
            <FileLoader @fileLoaded="handleFileLoad" />
            <hr>
            <WordCounter v-if="fileContent" :fileContent="fileContent" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileLoader from "@/components/FileLoader.vue";
import WordCounter from "@/components/WordCounter.vue";

export default {
  components: {
    FileLoader,
    WordCounter,
  },
  data() {
    return {
      fileContent: "",
    };
  },
  methods: {
    handleFileLoad(content) {
      this.fileContent = content;
    },
  },
};
</script>
