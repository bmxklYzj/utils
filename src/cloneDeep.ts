export const cloneDeep = (source: any) => {
  if (typeof source === 'object' && source) {
    const result:any = Array.isArray(source) ? [] : {};
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = cloneDeep(source[key]);
      }
    }
    return result;
  }

  return source;
}