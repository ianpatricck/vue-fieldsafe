/*
 * Mask function
 *
 * @param {object}
 * @return {string}
 *
 */

const mask = {
  updated: (element, binding) => {  

    if (element.value.trim() !== "") {

      let maskArray   = binding.value.split('');
      let textArray   = element.value.split('');

      textArray = textArray.filter(element => {
        if (!maskArray.includes(element) && element.trim() !== "") {
          return element;
        }

        return null;

      });

      let textMasked = [];

      maskArray.forEach(elemMask => {

        if (elemMask !== "#") {
          textMasked.push(elemMask);
        } else {

          const findFirst = textArray.find(element => element)

          textArray.shift();
          textMasked.push(findFirst);
        }

      });

      element.maxLength = binding.value.length;
      element.value = textMasked.join('');

    }


  }
}

export default mask;
