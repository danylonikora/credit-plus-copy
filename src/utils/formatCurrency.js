function formatCurrency(num) {
  return (
    Intl.NumberFormat("uk-UA", {
      style: "decimal",
      minimumFractionDigits: 2,
    }).format(num) + " грн"
  );
};

export default formatCurrency;