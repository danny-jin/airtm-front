import { Option } from '../models/option';

export function enumToLabel(source: any, labels?: any): string {
  if (labels) {
    return labels[source];
  }
  if (source === '') {
    return '';
  }
  const list = source.split('_');
  return list.map((item: any) => {
    const labelItem = item.toLowerCase();
    return labelItem[0].toUpperCase() + labelItem.slice(1);
  }).join(' ');
}

export function enumToOptions<T>(source: any, labels?: any): Option<T>[] {
  return Object.keys(source).map(key => {
    return { label: enumToLabel(source[key], labels), value: source[key] };
  });
}

export function nextEnumValue<T>(source: any, currentEnum: T, isBack?: boolean): T {
  const enumOptions = enumToOptions<T>(source);
  const currentIndex = enumOptions.findIndex(option => option.value === currentEnum);
  const nextIndex = (enumOptions.length + currentIndex + (isBack ? -1 : 1)) % enumOptions.length;
  return enumOptions[nextIndex].value;
}
