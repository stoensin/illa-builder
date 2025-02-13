import { css, Global } from "@emotion/react"
import { useEffect } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { RouterProvider } from "react-router-dom"
import {
  ConfigProvider,
  MessageGroup,
  ModalGroup,
  NotificationGroup,
} from "@illa-design/react"
import "@/api/base"
import { GlobalDataProvider } from "@/page/App/context/globalDataProvider"
import {
  getCurrentConfigLanguage,
  getCurrentTranslateLanguage,
} from "@/redux/currentUser/currentUserSelector"
import { ILLARoute } from "@/router"
import { globalStyle } from "./style"
import { getIllaMode } from "@/redux/config/configSelector"

function App() {
  const configLanguage = useSelector(getCurrentConfigLanguage)
  const currentUserLanguage = useSelector(getCurrentTranslateLanguage)
  const { i18n } = useTranslation()
  const mode = useSelector(getIllaMode)

  useEffect(() => {
    if (!!currentUserLanguage) {
      i18n.changeLanguage(currentUserLanguage)
    }
  }, [currentUserLanguage, i18n])

  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalDataProvider>
        <ConfigProvider locale={configLanguage}>
          <Global styles={css(globalStyle)} />
          <MessageGroup pt={mode !== "production" ? "46px" : "0"} />
          <NotificationGroup pt={mode !== "production" ? "46px" : "0"} />
          <ModalGroup />
          <RouterProvider router={ILLARoute} />
        </ConfigProvider>
      </GlobalDataProvider>
    </DndProvider>
  )
}

export default App
