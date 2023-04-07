# @ Vue FieldSafe
## Just an abstraction of the FieldSafe package for Vue.js

Library to assist in the development of security for form fields, with validation by RegEx, Sanitization and Mask in inputs.

### Installation

npm:
```
$ npm install vue-fieldsafe
```

yarn:
```
$ yarn add vue-fieldsafe
```

### Usage:

```vue
<template>
  <main>
    <h1>Vue FieldSafe</h1>

    <form method="post" @submit.prevent="myform">

      <input 
        type="text" 
        name="email" 
        placeholder="Email" 
        v-model="email"
        /> 

      <button type="submit">Submit</button>

    </form>

  </main>
</template>

<script>

import { Validation } from 'vue-fieldsafe';

export default {
  data() {
    return {
      email: 'guest@mail.com'
    }
  },

  methods: {
    myform() {
    
      const validator = new Validation();  
      const isEmail = validator.email(this.email);
      console.log(isEmail); // true
    
    }
  }

}

</script>
```
