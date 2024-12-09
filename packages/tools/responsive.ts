export type ResponsiveCallback<T> = () => T;
export class Responsive<T>{
  private callback: ResponsiveCallback<T>;
  constructor(
    callback: ResponsiveCallback<T>
  ){
    this.callback = callback;
  }
  resolve(){
    return this.callback();
  }
  static of<T>(
    callback: ResponsiveCallback<T>
  ){
    return new Responsive(callback);
  }
}

export const createResponsive = <T>(
  callback: ResponsiveCallback<T>
) => {
  const responsive = Responsive.of(callback);
  return {
    resolve: responsive.resolve
  }
}
