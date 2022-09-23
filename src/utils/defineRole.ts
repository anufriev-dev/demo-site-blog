type defineRoleParams = "1" | "2" | "ADMIN" | "USER"

function defineRole(role: defineRoleParams ): defineRoleParams {
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