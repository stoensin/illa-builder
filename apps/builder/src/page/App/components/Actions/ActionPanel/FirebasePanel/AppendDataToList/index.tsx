import { FC } from "react"
import { useTranslation } from "react-i18next"
import { VALIDATION_TYPES } from "@/utils/validationFactory"
import { FirebaseActionPartProps } from "@/page/App/components/Actions/ActionPanel/FirebasePanel/intreface"
import { SetData } from "@/redux/currentApp/action/firebaseAction"
import { InputEditor } from "@/page/App/components/InputEditor"

export const AppendDataToListPart: FC<FirebaseActionPartProps> = (props) => {
  const { t } = useTranslation()
  const { handleValueChange } = props
  const options = props.options as SetData

  return (
    <>
      <InputEditor
        title={t("editor.action.panel.firebase.database_ref")}
        value={options.ref}
        onChange={(value) => handleValueChange(value, "ref")}
        expectedType={VALIDATION_TYPES.STRING}
      />
      <InputEditor
        title={t("editor.action.panel.firebase.object_to_set")}
        value={options.object}
        onChange={(value) => handleValueChange(value, "object")}
        expectedType={VALIDATION_TYPES.STRING}
      />
    </>
  )
}

AppendDataToListPart.displayName = "AppendDataToListPart"
