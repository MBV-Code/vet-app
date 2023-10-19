import fs from 'node:fs'
import path from 'node:path'

const clientsFilePath = path.join(process.cwd(), 'server', 'db', 'clients.json')
const professionalsFilePath = path.join(process.cwd(), 'server', 'db', 'professionals.json')

// Read files (clients or professionals) and return it like JSON
export function getAllItems (collection = 'clients') {
  if (collection === 'professionals') {
    try {
      const data = fs.readFileSync(professionalsFilePath, 'utf8')
      return JSON.parse(data)
    } catch (error) {
      return []
    }
  }

  try {
    const data = fs.readFileSync(clientsFilePath, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    return []
  }
}

// Write clients JSON file
export function saveItem (item) {
  fs.writeFileSync(clientsFilePath, JSON.stringify(item, null, 2), 'utf8')
}
