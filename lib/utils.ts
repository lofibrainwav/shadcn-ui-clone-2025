import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 클래스명을 병합하고 중복을 제거하는 유틸리티 함수
 * @param inputs - 병합할 클래스명들
 * @returns 병합된 클래스명 문자열
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 포커스가 가능한 요소들을 찾는 유틸리티 함수
 * @param container - 검색할 컨테이너 요소
 * @returns 포커스 가능한 요소들의 배열
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
    '[contenteditable="true"]'
  ]
  
  return Array.from(
    container.querySelectorAll(focusableSelectors.join(', '))
  ) as HTMLElement[]
}

/**
 * 키보드 이벤트에서 특정 키 조합을 확인하는 유틸리티
 * @param event - 키보드 이벤트
 * @param hotkey - 확인할 핫키 (예: "cmd+k", "ctrl+shift+p")
 * @returns 키 조합이 일치하는지 여부
 */
export function isHotkey(event: KeyboardEvent, hotkey: string): boolean {
  const keys = hotkey.toLowerCase().split('+')
  const pressedKeys: string[] = []
  
  if (event.metaKey) pressedKeys.push('cmd', 'meta')
  if (event.ctrlKey) pressedKeys.push('ctrl')
  if (event.shiftKey) pressedKeys.push('shift')
  if (event.altKey) pressedKeys.push('alt')
  
  pressedKeys.push(event.key.toLowerCase())
  
  return keys.every(key => pressedKeys.includes(key))
}

/**
 * 디바운스 함수 - 함수 호출을 지연시키고 중복 호출을 방지
 * @param func - 디바운스할 함수
 * @param wait - 대기 시간 (밀리초)
 * @returns 디바운스된 함수
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

/**
 * 쓰로틀 함수 - 함수 호출 빈도를 제한
 * @param func - 쓰로틀할 함수
 * @param limit - 제한 시간 (밀리초)
 * @returns 쓰로틀된 함수
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

/**
 * 로컬 스토리지에 안전하게 값을 저장/가져오는 유틸리티
 */
export const storage = {
  get: <T>(key: string, defaultValue: T): T => {
    if (typeof window === 'undefined') return defaultValue
    
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  },
  
  set: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return
    
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // 스토리지 쓰기 실패 시 무시
    }
  },
  
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    
    try {
      window.localStorage.removeItem(key)
    } catch {
      // 스토리지 삭제 실패 시 무시
    }
  }
}

/**
 * 색상 유틸리티 함수들
 */
export const colors = {
  /**
   * HSL 값을 RGB로 변환
   */
  hslToRgb: (h: number, s: number, l: number): [number, number, number] => {
    h /= 360
    s /= 100
    l /= 100
    
    const a = s * Math.min(l, 1 - l)
    const f = (n: number) => {
      const k = (n + h / (1/12)) % 12
      return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    }
    
    return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)]
  },
  
  /**
   * 색상이 다크한지 라이트한지 판단
   */
  isColorDark: (r: number, g: number, b: number): boolean => {
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance < 0.5
  }
}