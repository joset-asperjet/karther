import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const BASE_PATH = ''

export function prefixPath(path: string) {
  if (path.startsWith(BASE_PATH)) return path
  return `${BASE_PATH}${path}`
}
