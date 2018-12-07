// Code your solution in this file.
let lowerCaseDrivers=(drivers)=>{
  let test = []
  drivers.map(driver=>{
  test.push(driver.toLowerCase())
  })
  return test
}

function nameToAttributes(drivers){
  let namesArray = []
  let names = {}
  let firstName = ""
  let lastName = ""
  drivers.map(driver=>{
    names={firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}
    namesArray.push(names)
  })
  return namesArray
}

function attributesToPhrase(drivers){
      let phraseArray = []
      let phrase = ''
      drivers.map(driver => {
        phrase = `${driver.name} is from ${driver.hometown}`
        phraseArray.push(phrase)
      })
  return phraseArray
}
