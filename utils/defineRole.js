function defineRole(role) {
  return {
    ADMIN: "1",
    USER: "2"
  }[role]
}

module.exports = defineRole