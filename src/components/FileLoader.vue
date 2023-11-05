<template>
    <div>
      <input type="file" @change="loadFile">
      <p v-if="error">{{ error }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        error: null,
      };
    },
    methods: {
      loadFile(event) {
        this.error = null; 
        
        const file = event.target.files[0];
        if (!file) {
          this.error = "Please select a file.";
          return;
        }
  
        if (!file.name.endsWith(".txt")) {
          this.error = "Invalid file type. Please select a .txt file.";
          return;
        }
  
        const reader = new FileReader();
        reader.onload = () => {
          this.$emit("fileLoaded", reader.result);
        };
  
        reader.onerror = () => {
          this.error = "Error loading the file. Please try again.";
        };
  
        reader.readAsText(file);
      },
    },
  };
  </script>
  