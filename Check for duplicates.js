function containsDuplicates(arr) {
        for (let i = 0; i < arr.length; i++) {
          for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
              return true
            }
          }
        }
        return false
      }
    
      let arrayWithDuplicates = [1, 2, 3, 4, 5, 1]
      let arrayWithoutDuplicates = [1, 2, 3, 4, 5]
      
      console.log(containsDuplicates(arrayWithDuplicates))
      console.log(containsDuplicates(arrayWithoutDuplicates))