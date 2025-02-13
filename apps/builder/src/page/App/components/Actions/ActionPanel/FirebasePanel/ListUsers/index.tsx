import { FC } from "react"
import { useTranslation } from "react-i18next"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { FirebaseActionPartProps } from "@/page/App/components/Actions/ActionPanel/FirebasePanel/intreface"
import { ListUsers } from "@/redux/currentApp/action/firebaseAction"
import { InputEditor } from "@/page/App/components/InputEditor"

export const ListUsersPart: FC<FirebaseActionPartProps> = (props) => {
  const { t } = useTranslation()
  const options = props.options as ListUsers
  const { handleValueChange } = props

  return (
    <>
      <InputEditor
        title={t("editor.action.panel.firebase.len_of_list")}
        value={options.number}
        onChange={(value) => handleValueChange(value, "number")}
        expectedType={VALIDATION_TYPES.STRING}
        placeholder={"{{1000}}"}
      />
      <InputEditor
        title={t("editor.action.panel.firebase.next_page_token")}
        value={options.token}
        onChange={(value) => handleValueChange(value, "token")}
        expectedType={VALIDATION_TYPES.STRING}
      />
    </>
  )
}

ListUsersPart.displayName = "ListUsersPart"
