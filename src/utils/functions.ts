export const formatCurrency = (value: number) => {
  if (!Number.isNaN(value)) {
    const formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);

    return formattedValue;
  }

  return String(value);
};
