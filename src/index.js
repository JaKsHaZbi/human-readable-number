 module.exports = function toReadable (number) {

    if (isNaN(number)) {
        console.log('empty string') 
     } else if (`${number}`.length >= 4) {
        console.log('overflow')
     }
  
     const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
     const twoDigits = ['ten', 'eleven',  'twelve', 'thirteen',  'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
     const tensMultiple = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  
     if (`${number}`.length == 1) {
        return singleDigits[number]
     } else if ((10 <= number) && (number < 20)) {
        return twoDigits[number % 10]
     } else if ((20 <= number) && (number < 100)) {
        let tens = Math.floor(number / 10)
        let ones = number % 10
        return ones == 0 ? tensMultiple[tens] : tensMultiple[tens] + ' ' + singleDigits[ones]
     } else if ((100 <= number) && (number < 1000)) {
       let hundred = Math.floor(number / 100);
       if (+`${number}`.slice(1) < 10)  {
           return (+`${number}`.slice(1)) == 0 ? singleDigits[hundred] + ' hundred' : singleDigits[hundred] + ' hundred ' + singleDigits[+`${number}`.slice(1)] 
       } else if ((10 <= +`${number}`.slice(1)) && (+`${number}`.slice(1) < 20)) {
           return singleDigits[hundred] + ' hundred ' + twoDigits[number % 10]
       } else {
           let tens = Math.floor(+`${number}`.slice(1) / 10)
           let ones = +`${number}`.slice(1) % 10
           return ones == 0 ? singleDigits[hundred] + ' hundred ' + tensMultiple[tens] : singleDigits[hundred] + ' hundred ' + tensMultiple[tens] + ' ' + singleDigits[ones]
      }
    }
 }