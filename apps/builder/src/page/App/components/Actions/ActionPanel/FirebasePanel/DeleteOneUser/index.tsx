import { FC } from "react"
import { useTranslation } from "react-i18next"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { FirebaseActionPartProps } from "@/page/App/components/Actions/ActionPanel/FirebasePanel/intreface"
import { DeleteOneUser } from "@/redux/currentApp/action/firebaseAction"
import { InputEditor } from "@/page/App/components/InputEditor"

export const DeleteOneUserPart: FC<FirebaseActionPartProps> = (props) => {
  const { t } = useTranslation()
  const options = props.options as DeleteOneUser
  const { handleValueChange } = props

  return (
    <InputEditor
      title={t("editor.action.panel.firebase.uid")}
      value={options.filter}
      onChange={(value) => handleValueChange(value, "filter")}
      expectedType={VALIDATION_TYPES.STRING}
    />
  )
}

DeleteOneUserPart.displayName = "DeleteOneUserPart"
