// Given a decimal number, convert it to its binary form.

const decimalToBinary = (num) => {
    return (num>>>0).toString(2);
}

console.log(decimalToBinary(5));

/*
Explanation:

> (num>>>0) performs an unsigned right shift operation by 0 positions on the num. 
This operation doesn't change the value but ensures that num is treated as an unsigned 32-bit integer. 
This is a safeguard and might be used to handle cases where num might not be an integer 
or could be interpreted as something other than an unsigned 32-bit integer.

> .toString(2) converts the resulting unsigned 32-bit integer into its binary representation. 
The toString method with a parameter of 2 specifies that the number should be converted 
into a binary string.
*/