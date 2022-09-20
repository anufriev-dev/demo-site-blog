
function defineRole(role: "1" | "2" | "ADMIN" | "USER" ): "1" | "2" | "ADMIN" | "USER" {
  if(!isNaN(+role) ) {
    return {
      "1": "ADMIN",
      "2": "USER"
    }[role]
  }else {
    return {
      ADMIN: "1",
      USER: "2"
    }[role]
  }
}

export default defineRole