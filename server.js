const newFolderName = function (folders) {
  if (folders.length === 0) {
    return 'New Folder'
  }

  const regex = /New Folder \((\d+)\)/
  const numbers = []
  let containsNewFolder = false

  for (let i = 0; i < folders.length; i++) {
    if (folders[i] === 'New Folder') {
      numbers.push(1)
      containsNewFolder = true
    } else if (regex.test(folders[i])) {
      numbers.push(parseInt(folders[i].match(regex)[1]))
    }
  }

  if (numbers.length === 0) {
    return 'New Folder'
  }

  numbers.sort()
  let nextNumber = numbers[0]

  if (nextNumber !== 1 || !containsNewFolder) {
    return 'New Folder'
  }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === nextNumber + 1) {
      nextNumber++
    } else {
      break
    }
  }

  return `New Folder (${nextNumber + 1})`
}

module.exports = { newFolderName }
