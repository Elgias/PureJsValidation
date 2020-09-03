export const getValidationStatus = (inputField, opts) => {
  const value = inputField.value.trim().split("");
  console.log(opts, opts.required, opts.equal, value.length);
  if(opts.minLength > 0){
    if(value.length < opts.minLength){
      console.log(value.length, opts.minLength)
      return false;
    } 
  }
  if(opts.maxLength > 0){
    if(value.length > opts.maxLength) return false;
  }
  if(opts.email){
    if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value.join(""))) return false;
  }
  if(opts.required){
    if(value.length < 1) return false;
  }
  if(opts.equal){
    if(value.join('') !== opts.equal().toString()) return false;
  }
  
  return true;
  // Add check
}

export const setValidationStatus = (inputField, opts) => {
  if( getValidationStatus(inputField, opts) ) inputField.className = "valid";
  else inputField.className = "invalid"
}