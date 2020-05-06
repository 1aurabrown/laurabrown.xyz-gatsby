exports.linkResolver = function linkResolver(doc) {
  // Route for pages
  if (doc.type === "page") {
    return "/" + doc.uid
  }
  // Homepage route fallback
  return "/"
}