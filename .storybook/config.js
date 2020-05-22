import { configure, addDecorator } from "@storybook/react"
import themeDecorator from "../src/core/theme-decorator"

addDecorator(themeDecorator);