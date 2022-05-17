function formatDate(timestamp) {
  return new Date(timestamp).toLocaleDateString("uk-UA");
}

export default formatDate;
