function removeSlash(link: string) {
  if (link.endsWith("/")) return link.slice(0, link.length - 1);
  return link;
}

function getDescription(str) {
  return str.replace(/<[^>]+>/g, "").replace('\n', '').slice(0, 150).trim();
}

export { removeSlash, getDescription };
