const { exec } = require('child_process')
const fs = require('fs')

/**
 *  For checking out react-native v0.67.2 for building from ReactAndroid
 */

// removing react-native folder
exec ('rm -rf ./node_modules/react-native',(error, stdOut, stdErr)=>{
    if(!error){
      console.log(stdOut)
      // cloning from source from branch 0.67 stable
      exec ('git clone -b 0.67-stable --single-branch https://github.com/facebook/react-native.git node_modules/react-native', (error, stdOut, stdErr)=>{
        if(!error){
          console.log(stdOut)
          // applying patches to the cloned folder
          exec('patch-package', (error, stdOut, stdErr)=>{
            if(!error){
              console.log(stdOut)
            }
            else{
              throw new Error(`Patching Failed: ${error.message}`)
            }
          })
        }
        else{
          throw new Error(`Git Clone Failed: ${error.message}`)
        }
      })
    }
    else{
      throw new Error(`Module Removal Failed: ${error.message}`)
    }
  }
)

