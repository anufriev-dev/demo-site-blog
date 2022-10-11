import { useRouterPath } from "src/hooks"
import { toPascalCase } from "src/utils"


function useBreadcrumbPath() {

  const route = useRouterPath()

  const removeQuestionMark = route.replace(/\?/g, "/")
  const removeEquals = removeQuestionMark.replace(/\=/g, "/")

  const pathToPascalCase = toPascalCase(removeEquals)

  return  pathToPascalCase.split("/")
}

export default useBreadcrumbPath
