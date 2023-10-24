declare global {
  /** 객체 타입의 각 값들을 타입으로 변환하는 제네릭 타입 */
  type ValueOf<T> = T[keyof T];
}