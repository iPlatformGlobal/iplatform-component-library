export const useMixin = (targetPropName: string, targetValue, mixin) => (props) => {
  if (props[targetPropName] !== targetValue) {
    return '';
  }
  return mixin;
}
