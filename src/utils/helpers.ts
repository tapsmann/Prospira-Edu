/**
 * Sanitizes a string for use in URLs or as an ID
 */
export function sanitizeString(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9-]/g, '-')
}

/**
 * Truncates text to a specified length and adds ellipsis
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

/**
 * Formats a phone number for WhatsApp deep linking
 */
export function formatWhatsAppNumber(phone: string): string {
  return phone.replace(/[^0-9]/g, '')
}

/**
 * Opens WhatsApp with a pre-filled message
 */
export function openWhatsApp(phone: string, message: string): void {
  const formattedPhone = formatWhatsAppNumber(phone)
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${formattedPhone}?text=${encodedMessage}`, '_blank')
}

/**
 * Saves data to localStorage with a specific key
 */
export function saveToLocalStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.error(`Failed to save ${key} to localStorage:`, error)
  }
}

/**
 * Retrieves data from localStorage with a specific key
 */
export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  try {
    const item = localStorage.getItem(key)
    if (item) {
      return JSON.parse(item) as T
    }
    return defaultValue
  } catch (error) {
    console.error(`Failed to retrieve ${key} from localStorage:`, error)
    return defaultValue
  }
}

/**
 * Removes data from localStorage with a specific key
 */
export function removeFromLocalStorage(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch (error) {
    console.error(`Failed to remove ${key} from localStorage:`, error)
  }
}

/**
 * Delays execution for a specified number of milliseconds
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Gets the current year as a string
 */
export function getCurrentYear(): string {
  return new Date().getFullYear().toString()
}

/**
 * Formats a date string to a readable format
 */
export function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}