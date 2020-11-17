const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-BR', {
    style: 'currenct',
    currency: 'BRL',
  }).format(value);

export default formatValue;
